"use client"

import { useRef, useState } from "react"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { FormInput, FormTextarea, FormSelect } from "@/components/FormFields"
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
  FileText,
  X,
} from "lucide-react"

const MAX_ATTACHMENT_SIZE = 7 * 1024 * 1024
const TASK_FORM_NAME = "task-assignment"

interface TaskFormData {
  name: string
  company: string
  email: string
  category: string
  complexity: string
  description: string
  deadline: string
  attachment: File | null
}

const INITIAL_DATA: TaskFormData = {
  name: "",
  company: "",
  email: "",
  category: TASK_CATEGORIES[0],
  complexity: TASK_COMPLEXITIES[1].label,
  description: "",
  deadline: "",
  attachment: null,
}

function validate(data: TaskFormData): string | null {
  if (!data.name.trim()) return "Name is required"
  if (!data.email.trim()) return "Email is required"
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Invalid email address"
  if (!data.description.trim()) return "Task description is required"
  if (data.description.trim().length < 10)
    return "Task description must be at least 10 characters"
  if (data.attachment) {
    if (!data.attachment.name.toLowerCase().endsWith(".pdf"))
      return "Please attach a PDF file"
    if (data.attachment.type && data.attachment.type !== "application/pdf")
      return "Please attach a valid PDF file"
    if (data.attachment.size > MAX_ATTACHMENT_SIZE)
      return "The PDF must be 7 MB or smaller"
  }
  return null
}

export default function AssignTaskForm() {
  const attachmentInputRef = useRef<HTMLInputElement>(null)
  const [data, setData] = useState<TaskFormData>(INITIAL_DATA)
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [error, setError] = useState<string | null>(null)

  const updateField = (
    field: Exclude<keyof TaskFormData, "attachment">,
    value: string,
  ) => {
    setData((prev) => ({ ...prev, [field]: value }))
    if (error) {
      setError(null)
      setStatus("idle")
    }
  }

  const updateAttachment = (attachment: File | null) => {
    setData((prev) => ({ ...prev, attachment }))
    if (!attachment && attachmentInputRef.current) {
      attachmentInputRef.current.value = ""
    }
    if (error) {
      setError(null)
      setStatus("idle")
    }
  }

  const submit = async (formData: FormData) => {
    const validationError = validate(data)
    if (validationError) {
      setStatus("error")
      setError(validationError)
      return
    }

    setStatus("submitting")
    setError(null)

    try {
      formData.set("message", [
        `Company: ${data.company || "—"}`,
        `Category: ${data.category}`,
        `Complexity: ${data.complexity}`,
        `Deadline: ${data.deadline || "—"}`,
        "",
        data.description,
      ].join("\n"))

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setStatus("success")
        setData(INITIAL_DATA)
        if (attachmentInputRef.current) attachmentInputRef.current.value = ""
        toast.success("Task received! I'll get back to you with a timeline.")
      } else {
        setStatus("error")
        setError("Failed to submit. Please try again.")
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
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Assign Me a Task</h3>
        <form
          name={TASK_FORM_NAME}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          encType="multipart/form-data"
          onSubmit={(event) => {
            event.preventDefault()
            void submit(new FormData(event.currentTarget))
          }}
          className="space-y-4"
        >
        <input type="hidden" name="form-name" value={TASK_FORM_NAME} />
        <input
          type="hidden"
          name="subject"
          value={`Task assignment from ${data.name || "portfolio visitor"}`}
        />
        <input type="hidden" name="message" value="" />
        <div className="hidden" aria-hidden="true">
          <label>
            Don&apos;t fill this out:
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Your Name"
            name="name"
            value={data.name}
            onChange={(v) => updateField("name", v)}
            placeholder="Jane Smith"
            required
          />
          <FormInput
            label="Company / Organization"
            name="company"
            value={data.company}
            onChange={(v) => updateField("company", v)}
            placeholder="Acme Inc."
          />
        </div>

        <FormInput
          label="Your Email"
          name="email"
          type="email"
          value={data.email}
          onChange={(v) => updateField("email", v)}
          placeholder="jane@company.com"
          required
        />

        <FormSelect
          label="Task Category"
          name="category"
          value={data.category}
          onChange={(v) => updateField("category", v)}
          options={TASK_CATEGORIES}
        />

        <div className="space-y-1.5">
          <span className="text-sm font-medium">Task Complexity</span>
          <input type="hidden" name="complexity" value={data.complexity} />
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
          name="description"
          value={data.description}
          onChange={(v) => updateField("description", v)}
          placeholder="Describe the task you'd like me to complete. Include requirements, expected deliverables, and any specific technologies you'd like me to use..."
          required
        />

        <FormInput
          label="Deadline (Optional)"
          name="deadline"
          type="date"
          value={data.deadline}
          onChange={(v) => updateField("deadline", v)}
        />

        <div className="space-y-1.5">
          <label
            htmlFor="task-pdf"
            className="text-sm font-medium"
          >
            Attach task brief (PDF, optional)
          </label>
          <div className="flex items-center gap-3 rounded-lg border border-border bg-accent/50 px-4 py-3 cursor-pointer">
            <FileText className="size-4 shrink-0 text-muted-foreground" />
            <input
              ref={attachmentInputRef}
              id="task-pdf"
              name="attachment"
              type="file"
              accept=".pdf,application/pdf"
              onChange={(event) =>
                updateAttachment(event.target.files?.[0] ?? null)
              }
              className="min-w-0 flex-1 text-sm text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground hover:file:bg-accent/80"
            />
            {data.attachment && (
              <button
                type="button"
                onClick={() => updateAttachment(null)}
                aria-label="Remove attached PDF"
                className="shrink-0 rounded p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            PDF files up to 7 MB. Netlify limits the full submission to 8 MB.
          </p>
        </div>

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
          type="submit"
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
        </form>
      </CardContent>
    </Card>
  )
}
