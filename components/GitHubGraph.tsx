"use client";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { GITHUB_URL } from "@/data";
import {
  GITHUB_USERNAME,
  fetchContributions,
  type ContributionDay,
} from "@/lib/github";

const LEVEL_COLORS = [
  "var(--gh-level-0)",
  "var(--gh-level-1)",
  "var(--gh-level-2)",
  "var(--gh-level-3)",
  "var(--gh-level-4)",
] as const;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function groupIntoWeeks(contributions: ContributionDay[]): ContributionDay[][] {
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  for (const day of contributions) {
    const dayOfWeek = new Date(day.date).getDay();
    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  }
  if (currentWeek.length > 0) weeks.push(currentWeek);

  return weeks;
}

function getMonthLabels(weeks: ContributionDay[][]): { label: string; col: number }[] {
  const labels: { label: string; col: number }[] = [];
  let lastMonth = -1;

  for (let i = 0; i < weeks.length; i++) {
    const month = new Date(weeks[i][0].date).getMonth();
    if (month !== lastMonth) {
      labels.push({ label: MONTHS[month], col: i });
      lastMonth = month;
    }
  }

  return labels;
}

function ContributionCell({ day }: { day: ContributionDay }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const dateStr = new Date(day.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="gh-cell"
      style={{ backgroundColor: LEVEL_COLORS[day.level] }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      role="gridcell"
      aria-label={`${day.count} contribution${day.count !== 1 ? "s" : ""} on ${dateStr}`}
    >
      {showTooltip && (
        <div className="gh-tooltip">
          <strong>{day.count} contribution{day.count !== 1 ? "s" : ""}</strong>
          <span>{dateStr}</span>
        </div>
      )}
    </div>
  );
}

function GraphSkeleton() {
  return (
    <div className="gh-graph-container animate-pulse h-40">
      <div className="flex justify-evenly">
        {Array.from({ length: 52 }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: 7 }).map((_, d) => (
              <div key={d} className="gh-cell bg-muted rounded-sm" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContributionGrid({ data }: { data: { total: { lastYear: number }; contributions: ContributionDay[] } }) {
  const weeks = useMemo(() => groupIntoWeeks(data.contributions), [data.contributions]);
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  return (
    <>
      <div className="gh-graph-container" role="grid" aria-label="GitHub contribution graph">
        <div className="gh-month-row h-4">
          <div className="gh-day-label-spacer" />
          <div className="gh-grid-scroll">
            <div className="flex relative" style={{ gap: "3px" }}>
              {monthLabels.map(({ label, col }) => (
                <span
                  key={`${label}-${col}`}
                  className="gh-month-label h-3"
                  style={{ left: `${col * 15}px` }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="gh-day-labels">
            <span />
            <span>Mon</span>
            <span />
            <span>Wed</span>
            <span />
            <span>Fri</span>
            <span />
          </div>

          <div className="gh-grid-scroll">
            <div className="flex gap-[3px]">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day) => (
                    <ContributionCell key={day.date} day={day} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-xs text-muted-foreground">
          {data.total.lastYear} contributions in the last year
        </p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>Less</span>
          {LEVEL_COLORS.map((color, i) => (
            <div key={i} className="gh-cell" style={{ backgroundColor: color }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </>
  );
}

export default function GitHubGraph() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-contributions"],
    queryFn: ({ signal }) => fetchContributions(signal),
  });

  if (isError) return null;

  return (
    <section className="py-12 border-t border-white/50">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">GitHub Activity</h2>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
        >
          @{GITHUB_USERNAME}
        </a>
      </div>

      {isLoading ? <GraphSkeleton /> : data && <ContributionGrid data={data} />}
    </section>
  );
}
