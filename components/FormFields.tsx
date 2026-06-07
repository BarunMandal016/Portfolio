"use client"

import { useId } from "react"

const FIELD_CLASSES =
  "w-full px-4 py-2.5 rounded-lg bg-accent/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/25 transition-colors"

function FieldLabel({
  id,
  label,
  required,
}: {
  id: string
  label: string
  required?: boolean
}) {
  return (
    <label htmlFor={id} className="text-sm font-medium">
      {label}
      {required && <span className="text-accent-blue ml-0.5">*</span>}
    </label>
  )
}

export function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
}) {
  const id = useId()

  return (
    <div className="space-y-1.5">
      <FieldLabel id={id} label={label} required={required} />
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={FIELD_CLASSES}
      />
    </div>
  )
}

export function FormTextarea({
  label,
  value,
  onChange,
  placeholder,
  required,
  rows = 5,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  required?: boolean
  rows?: number
}) {
  const id = useId()

  return (
    <div className="space-y-1.5">
      <FieldLabel id={id} label={label} required={required} />
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className={`${FIELD_CLASSES} resize-none`}
      />
    </div>
  )
}

export function FormSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
}) {
  const id = useId()

  return (
    <div className="space-y-1.5">
      <FieldLabel id={id} label={label} />
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${FIELD_CLASSES} cursor-pointer`}
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-popover">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
