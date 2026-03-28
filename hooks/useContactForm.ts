"use client";

import { useState, useCallback } from "react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";
import type { ContactFormData } from "@/types";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  error: string | null;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function validateForm(data: ContactFormData): string | null {
  if (!data.name.trim()) return "Name is required";
  if (!data.email.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Invalid email address";
  if (!data.message.trim()) return "Message is required";
  if (data.message.trim().length < 10) return "Message must be at least 10 characters";
  return null;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [state, setState] = useState<FormState>({ status: "idle", error: null });

  const updateField = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (state.error) setState({ status: "idle", error: null });
    },
    [state.error]
  );

  const reset = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setState({ status: "idle", error: null });
  }, []);

  const submit = useCallback(async () => {
    const validationError = validateForm(formData);
    if (validationError) {
      setState({ status: "error", error: validationError });
      return;
    }

    setState({ status: "submitting", error: null });

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData,
          from_name: formData.name,
          subject: formData.subject || `Portfolio message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setState({ status: "success", error: null });
        setFormData(INITIAL_FORM_DATA);
      } else {
        setState({
          status: "error",
          error: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setState({
        status: "error",
        error: "Network error. Please check your connection and try again.",
      });
    }
  }, [formData]);

  return {
    formData,
    updateField,
    submit,
    reset,
    isSubmitting: state.status === "submitting",
    isSuccess: state.status === "success",
    error: state.error,
  };
}
