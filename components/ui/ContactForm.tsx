"use client";

import { type FormEvent, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

type ApiResponse = {
  ok: boolean;
  message?: string;
  error?: string;
  fields?: Record<string, string>;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  service: "Website Design & Development",
  budget: "₹40K – ₹60K",
  message: ""
};

const inputClass =
  "w-full rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/[0.35] focus:border-violet focus:bg-white/[0.07]";

const serviceOptions = [
  "Website Design & Development",
  "Branding & Design",
  "Digital Marketing",
  "AI Automation",
  "Other"
];

const budgetOptions = [
  "₹40K – ₹60K",
  "₹55K – ₹90K",
  "₹90K – ₹1.3L+",
  "Other"
];

function CustomSelect({
  value,
  onChange,
  options,
  error
}: {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  error?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={cn(
          inputClass,
          "flex items-center justify-between text-left",
          error && "border-red-400/70",
          isOpen && "border-violet bg-white/[0.07]"
        )}
      >
        <span className="block truncate">{value}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white/40 shrink-0 ml-4"
        >
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 mt-2 w-full origin-top rounded-2xl border border-white/[0.1] bg-[#0a0a0a]/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onChange(option);
                  setIsOpen(false);
                }}
                className={cn(
                  "block w-full rounded-xl px-4 py-2.5 text-left text-sm transition-colors",
                  value === option
                    ? "bg-violet/15 text-violet-200"
                    : "text-white/[0.7] hover:bg-white/[0.06] hover:text-white"
                )}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("pending");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok || !result.ok) {
        setFieldErrors(result.fields ?? {});
        throw new Error(result.error ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage(
        result.message ?? "Your project brief landed with Tessera Studio and a confirmation email is on its way."
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-white/[0.62]">
          Name
          <input
            className={cn(inputClass, fieldErrors.name && "border-red-400/70")}
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
          {fieldErrors.name ? <span className="text-xs text-red-300">{fieldErrors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm text-white/[0.62]">
          Email
          <input
            className={cn(inputClass, fieldErrors.email && "border-red-400/70")}
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
            type="email"
            autoComplete="email"
          />
          {fieldErrors.email ? <span className="text-xs text-red-300">{fieldErrors.email}</span> : null}
        </label>

        <label className="grid gap-2 text-sm text-white/[0.62]">
          Company
          <input
            className={cn(inputClass, fieldErrors.company && "border-red-400/70")}
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            placeholder="Brand or business"
            autoComplete="organization"
          />
          {fieldErrors.company ? (
            <span className="text-xs text-red-300">{fieldErrors.company}</span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm text-white/[0.62]">
          Service
          <CustomSelect
            value={form.service}
            onChange={(val) => updateField("service", val)}
            options={serviceOptions}
          />
        </label>

        <label className="grid gap-2 text-sm text-white/[0.62] sm:col-span-2">
          Budget range
          <CustomSelect
            value={form.budget}
            onChange={(val) => updateField("budget", val)}
            options={budgetOptions}
          />
        </label>

        <label className="grid gap-2 text-sm text-white/[0.62] sm:col-span-2">
          Project notes
          <textarea
            className={cn(inputClass, "min-h-32 resize-none", fieldErrors.message && "border-red-400/70")}
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us what you want to build, improve or automate."
          />
          {fieldErrors.message ? (
            <span className="text-xs text-red-300">{fieldErrors.message}</span>
          ) : null}
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "pending"}
        className="button-shine mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-ink transition hover:bg-[#f5f1ff] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "pending" ? "Sending brief..." : "Start Your Project ->"}
      </button>

      <p
        aria-live="polite"
        className={cn(
          "mt-4 min-h-5 text-sm",
          status === "success" && "text-emerald-300",
          status === "error" && "text-red-300",
          status === "idle" && "text-white/[0.42]"
        )}
      >
        {message || "Typical response time: within one business day."}
      </p>
    </form>
  );
}
