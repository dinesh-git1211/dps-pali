"use client";

import { useState, useRef, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

/* ────────────────────────────────────────────────────────────────
   Grade options for the dropdown
   ──────────────────────────────────────────────────────────────── */
const GRADE_OPTIONS = [
  "Nursery",
  "LKG",
  "UKG",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI (Science)",
  "Class XI (Commerce)",
  "Class XI (Humanities)",
  "Class XII (Science)",
  "Class XII (Commerce)",
  "Class XII (Humanities)",
] as const;

/* ────────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────────── */
interface FormData {
  parentName: string;
  studentName: string;
  grade: string;
  phone: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

const INITIAL_DATA: FormData = {
  parentName: "",
  studentName: "",
  grade: "",
  phone: "",
  email: "",
  message: "",
};

/* ────────────────────────────────────────────────────────────────
   Validation helpers
   ──────────────────────────────────────────────────────────────── */
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.parentName.trim()) errors.parentName = "Parent name is required.";
  if (!data.studentName.trim())
    errors.studentName = "Student name is required.";
  if (!data.grade) errors.grade = "Please select a grade.";

  if (!data.phone.trim()) {
    errors.phone = "Contact number is required.";
  } else if (!/^[+]?\d[\d\s-]{7,14}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

/* ────────────────────────────────────────────────────────────────
   Component
   ──────────────────────────────────────────────────────────────── */
export default function AdmissionsForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const summaryRef = useRef<HTMLDivElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);

  /* ── Field change handler ── */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormData];
        return next;
      });
    }
  };

  /* ── Submit handler ── */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus the error summary
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Simulate submission (replace with actual API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setData(INITIAL_DATA);

    // Scroll success banner into view
    requestAnimationFrame(() => {
      formContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  const errorEntries = Object.entries(errors) as [keyof FormData, string][];

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div ref={formContainerRef}>
        <div
          className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary">
            <CheckCircle2 className="size-8 text-white" aria-hidden="true" />
          </div>
          <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
            Inquiry Submitted Successfully!
          </h3>
          <p className="mt-2 text-base text-muted">
            Thank you for your interest in DPS Pali District. Our admissions team
            will contact you within 48 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setErrors({});
              requestAnimationFrame(() => {
                formContainerRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              });
            }}
            className="mt-6 inline-flex items-center rounded-lg border border-primary bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary-light focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={formContainerRef} className="rounded-xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <h3 className="font-heading text-xl font-semibold text-foreground">
        Admission Inquiry Form
      </h3>
      <p className="mt-1 text-sm text-muted">
        Fill in the details below and we&apos;ll get back to you shortly.
      </p>

      {/* ── Error summary ── */}
      {errorEntries.length > 0 && (
        <div
          ref={summaryRef}
          role="alert"
          tabIndex={-1}
          aria-labelledby="error-summary-title"
          className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
        >
          <div className="flex items-center gap-2">
            <AlertCircle
              className="size-5 shrink-0 text-destructive"
              aria-hidden="true"
            />
            <p
              id="error-summary-title"
              className="text-sm font-semibold text-destructive"
            >
              Please fix {errorEntries.length} error
              {errorEntries.length > 1 ? "s" : ""} below:
            </p>
          </div>
          <ul className="mt-2 ml-7 list-disc space-y-1 text-sm text-red-700">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a
                  href={`#field-${field}`}
                  className="underline hover:no-underline focus-visible:ring-2 focus-visible:ring-destructive"
                >
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Form ── */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        {/* Parent Name */}
        <div>
          <label
            htmlFor="field-parentName"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Parent / Guardian Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="field-parentName"
            name="parentName"
            value={data.parentName}
            onChange={handleChange}
            aria-invalid={!!errors.parentName}
            aria-describedby={errors.parentName ? "err-parentName" : undefined}
            className={`block w-full rounded-lg border px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none ${
              errors.parentName ? "border-destructive" : "border-border"
            }`}
            placeholder="e.g. Rajesh Sharma"
          />
          {errors.parentName && (
            <p id="err-parentName" className="mt-1 text-xs text-destructive">
              {errors.parentName}
            </p>
          )}
        </div>

        {/* Student Name */}
        <div>
          <label
            htmlFor="field-studentName"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Student Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            id="field-studentName"
            name="studentName"
            value={data.studentName}
            onChange={handleChange}
            aria-invalid={!!errors.studentName}
            aria-describedby={
              errors.studentName ? "err-studentName" : undefined
            }
            className={`block w-full rounded-lg border px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none ${
              errors.studentName ? "border-destructive" : "border-border"
            }`}
            placeholder="e.g. Arjun Sharma"
          />
          {errors.studentName && (
            <p id="err-studentName" className="mt-1 text-xs text-destructive">
              {errors.studentName}
            </p>
          )}
        </div>

        {/* Grade Seeking */}
        <div>
          <label
            htmlFor="field-grade"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Grade Seeking Admission <span className="text-destructive">*</span>
          </label>
          <select
            id="field-grade"
            name="grade"
            value={data.grade}
            onChange={handleChange}
            aria-invalid={!!errors.grade}
            aria-describedby={errors.grade ? "err-grade" : undefined}
            className={`block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-foreground transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none ${
              errors.grade ? "border-destructive" : "border-border"
            } ${!data.grade ? "text-slate-400" : ""}`}
          >
            <option value="" disabled>
              Select a grade
            </option>
            {GRADE_OPTIONS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors.grade && (
            <p id="err-grade" className="mt-1 text-xs text-destructive">
              {errors.grade}
            </p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label
            htmlFor="field-phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Contact Number <span className="text-destructive">*</span>
          </label>
          <input
            type="tel"
            id="field-phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
            className={`block w-full rounded-lg border px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none ${
              errors.phone ? "border-destructive" : "border-border"
            }`}
            placeholder="+91 91161 26001"
          />
          {errors.phone && (
            <p id="err-phone" className="mt-1 text-xs text-destructive">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
          <label
            htmlFor="field-email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email Address <span className="text-destructive">*</span>
          </label>
          <input
            type="email"
            id="field-email"
            name="email"
            value={data.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
            className={`block w-full rounded-lg border px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none ${
              errors.email ? "border-destructive" : "border-border"
            }`}
            placeholder="parent@example.com"
          />
          {errors.email && (
            <p id="err-email" className="mt-1 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="field-message"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Message{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="field-message"
            name="message"
            value={data.message}
            onChange={handleChange}
            rows={3}
            className="block w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
            placeholder="Any specific questions or information you'd like to share…"
          />
        </div>

        {/* Submit */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? (
              <>
                <Loader2
                  className="size-5 animate-spin"
                  aria-hidden="true"
                />
                Submitting…
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
