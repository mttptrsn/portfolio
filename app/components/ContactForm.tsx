"use client"

import React, { FormEvent, useCallback, useEffect, useState } from "react";
import { FormState } from "@/common.types";
import Button from "./Button";
import FormField from "./FormField";

const initialForm: FormState = { title: "", email: "", subject: "", message: "", website: "" };

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formToken, setFormToken] = useState("");
  const [form, setForm] = useState<FormState>(initialForm);

  const initializeForm = useCallback(async () => {
    try {
      const response = await fetch("/api/form-token", { cache: "no-store" });
      if (!response.ok) throw new Error("Form initialization failed");
      const data = await response.json() as { token?: string };
      if (!data.token) throw new Error("Missing form token");
      setFormToken(data.token);
    } catch {
      setError("The contact form is temporarily unavailable. Please try again later.");
    }
  }, []);

  useEffect(() => { void initializeForm(); }, [initializeForm]);

  const handleStateChange = (fieldName: keyof FormState, value: string) => {
    setForm((previous) => ({ ...previous, [fieldName]: value }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formToken }),
      });
      const result = await response.json().catch(() => ({})) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Failed to send message.");
      setSubmitSuccess(true);
      setForm(initialForm);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitSuccess) {
    return <p className="py-3 text-center text-lg font-semibold">Thanks for reaching out, I&apos;ll be in touch soon.</p>;
  }

  return (
    <div className="max-w-xl lg:max-w-3xl">
      <div className="relative -mt-16 block mb-10">
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">Contact:</h1>
      </div>
      <p className="py-3 text-center text-lg font-semibold">Have a question or want to connect? Send me a message anytime.</p>
      <form onSubmit={handleFormSubmit} className="mt-10">
        <div className="flex flex-wrap gap-6">
          <FormField name="title" title="Name" state={form.title} placeholder="Name" minLength={2} maxLength={80} setState={(value) => handleStateChange("title", value)} />
          <FormField name="email" type="email" title="Email" state={form.email} placeholder="Email" minLength={3} maxLength={254} setState={(value) => handleStateChange("email", value)} />
          <FormField name="subject" title="Subject" state={form.subject} placeholder="Subject" minLength={2} maxLength={120} setState={(value) => handleStateChange("subject", value)} />
          <FormField name="message" title="Message" state={form.message} placeholder="Get in touch." isTextArea minLength={2} maxLength={5000} setState={(value) => handleStateChange("message", value)} />

          <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => handleStateChange("website", event.target.value)} />
          </div>

          {error && <p role="alert" className="w-full text-center text-sm text-red-600 dark:text-red-400">{error}</p>}
          <div className="w-full flex flexCenter">
            <Button title={submitting ? "Sending" : "Send"} type="submit" submitting={submitting || !formToken} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
