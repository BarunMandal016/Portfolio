"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { FormInput, FormTextarea } from "@/components/FormFields";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const {
    formData,
    updateField,
    submit,
    reset,
    isSubmitting,
    isSuccess,
    error,
  } = useContactForm();

  if (isSuccess) {
    return (
      <Card className="bg-card border-border">
        <CardContent className="p-8 flex flex-col items-center text-center gap-4">
          <div className="p-3 rounded-full bg-green-500/10">
            <CheckCircle className="size-8 text-green-500" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Message Sent!</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <button
            onClick={reset}
            className="text-sm text-accent-blue hover:underline mt-2"
          >
            Send another message
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Name"
            value={formData.name}
            onChange={(v) => updateField("name", v)}
            placeholder="Your name"
            required
          />
          <FormInput
            label="Email"
            type="email"
            value={formData.email}
            onChange={(v) => updateField("email", v)}
            placeholder="you@example.com"
            required
          />
        </div>

        <FormInput
          label="Subject"
          value={formData.subject}
          onChange={(v) => updateField("subject", v)}
          placeholder="What is this about?"
        />

        <FormTextarea
          label="Message"
          value={formData.message}
          onChange={(v) => updateField("message", v)}
          placeholder="Write your message here..."
          required
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
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 text-white text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="size-4" />
              Send Message
            </>
          )}
        </button>
      </CardContent>
    </Card>
  );
}
