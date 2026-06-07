"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { FormInput, FormTextarea, FormSelect } from "@/components/FormFields"
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants"
import {
  TASK_CATEGORIES,
  TASK_COMPLEXITIES,
  SAMPLE_TASK_IDEAS,
} from "@/data"
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Lightbulb,
  Sparkles,
} from "lucide-react"

const WEB3FORMS_URL = "https://api.web3forms.com/submit"

interface TaskFormData {
  name: string
  company: string
  email: string
  category: string
  complexity: string
  description: string
  deadline: string
}

const INITIAL_DATA: TaskFormData = {
  name: "",
  company: "",
  email: "",
  category: TASK_CATEGORIES[0],
  complexity: TASK_COMPLEXITIES[1].label,
  description: "",
  deadline: "",
}

function validate(data: TaskFormData): string | null {
  if (!data.name.trim()) return "Name is required"
  if (!data.email.trim()) return "Email is required"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Invalid email address"
  if (!data.description.trim()) return "Task description is required"
  if (data.description.trim().length < 10)
    return "Task description must be at least 10 characters"
  return null
}

export default function AssignTaskForm() {
  const [data, setData] = useState<TaskFormData>(INITIAL_DATA)
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [error, setError] = useState<string | null>(null)

  const updateField = (field: keyof TaskFormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
    if (error) {
      setError(null)
      setStatus("idle")
    }
  }

  const submit = async () => {
    const validationError = validate(data)
    if (validationError) {
      setStatus("error")
      setError(validationError)
      return
    }

    setStatus("submitting")
    setError(null)

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: data.name,
          email: data.email,
          subject: `Task assignment from ${data.name}`,
          message: [
            `Company: ${data.company || "—"}`,
            `Category: ${data.category}`,
            `Complexity: ${data.complexity}`,
            `Deadline: ${data.deadline || "—"}`,
            "",
            data.description,
          ].join("\n"),
        }),
      })
      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setData(INITIAL_DATA)
        toast.success("Task received! I'll get back to you with a timeline.")
      } else {
        setStatus("error")
        setError(result.message || "Failed to submit. Please try again.")
      }
    } catch {
      setStatus("error")
      setError("Network error. Please check your connection and try again.")
    }
  }

  if (status === "success") {
    return (
      <Card className="bg-card border-border">
        <CardContent className="p-8 flex flex-col items-center text-center gap-4">
          <div className="p-3 rounded-full bg-green-500/10">
            <CheckCircle className="size-8 text-green-500" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Task Received!</h3>
            <p className="text-sm text-muted-foreground">
              I&apos;ll review your task and get back to you with a timeline.
            </p>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="text-sm text-accent-blue hover:underline mt-2 cursor-pointer"
          >
            Assign another task
          </button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Assign Me a Task</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Your Name"
            value={data.name}
            onChange={(v) => updateField("name", v)}
            placeholder="Jane Smith"
            required
          />
          <FormInput
            label="Company / Organization"
            value={data.company}
            onChange={(v) => updateField("company", v)}
            placeholder="Acme Inc."
          />
        </div>

        <FormInput
          label="Your Email"
          type="email"
          value={data.email}
          onChange={(v) => updateField("email", v)}
          placeholder="jane@company.com"
          required
        />

        <FormSelect
          label="Task Category"
          value={data.category}
          onChange={(v) => updateField("category", v)}
          options={TASK_CATEGORIES}
        />

        <div className="space-y-1.5">
          <span className="text-sm font-medium">Task Complexity</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {TASK_COMPLEXITIES.map((option) => {
              const isSelected = data.complexity === option.label
              return (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => updateField("complexity", option.label)}
                  className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                    isSelected
                      ? "border-accent-blue bg-accent-blue/15 text-accent-blue"
                      : "border-border bg-accent/50 text-muted-foreground hover:border-accent-blue/40"
                  }`}
                >
                  <span className="block text-sm font-medium">
                    {option.label}
                  </span>
                  <span className="block text-xs opacity-70">
                    {option.duration}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <FormTextarea
          label="Task Description"
          value={data.description}
          onChange={(v) => updateField("description", v)}
          placeholder="Describe the task you'd like me to complete. Include requirements, expected deliverables, and any specific technologies you'd like me to use..."
          required
        />

        <FormInput
          label="Deadline (Optional)"
          type="date"
          value={data.deadline}
          onChange={(v) => updateField("deadline", v)}
        />

        {error && (
          <div
            role="alert"
            className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 px-3 py-2 rounded-lg"
          >
            <AlertCircle className="size-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          onClick={submit}
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-linear-to-r from-accent-blue to-accent-purple text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="size-4" />
              Submit Task Assignment
            </>
          )}
        </button>

        <div className="pt-4 border-t border-border space-y-2">
          <p className="text-sm font-medium flex items-center gap-1.5">
            <Lightbulb className="size-4 text-amber-400" />
            Sample Task Ideas — click to use:
          </p>
          {SAMPLE_TASK_IDEAS.map((idea) => (
            <button
              key={idea}
              type="button"
              onClick={() => {
                updateField("description", idea)
                toast.info("Sample task added to the description field")
              }}
              className="w-full flex items-start gap-2 text-left text-xs text-muted-foreground bg-accent/50 hover:bg-accent hover:text-foreground px-3 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <Sparkles className="size-3.5 shrink-0 text-accent-blue mt-0.5" />
              {idea}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
