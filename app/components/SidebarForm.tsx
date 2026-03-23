"use client";

import { useRef, useState, useEffect } from "react";
import Button from "./Button";

type FormState = "idle" | "submitting" | "success" | "failed";

export default function SidebarForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>("idle");

  // Watch data-state attribute set by form-relay.js
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const observer = new MutationObserver(() => {
      const attr = form.getAttribute("data-state") as FormState | null;
      if (attr === "submitting" || attr === "success" || attr === "failed") {
        setState(attr);
      }
    });

    observer.observe(form, {
      attributes: true,
      attributeFilter: ["data-state"],
    });

    return () => observer.disconnect();
  }, []);

  const inputClass =
    "w-full px-4 py-2 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow";

  return (
    <div className="bg-surface-alt rounded-2xl p-6 lg:p-8 border border-border shadow-sm">
      <h3 className="text-h3 text-secondary mb-2">Request Service</h3>
      <p className="text-body text-muted text-sm mb-6">
        Fill out the form below and we will get back to you as soon as possible.
      </p>

      {/* ── Success state ── */}
      {state === "success" && (
        <div className="text-center py-8 space-y-3">
          <div className="text-4xl">✅</div>
          <p className="font-semibold text-secondary text-lg">
            Thank you! We&apos;ll be in touch soon.
          </p>
          <p className="text-sm text-muted">
            Your request has been received. A member of our team will contact you shortly.
          </p>
        </div>
      )}

      {/* ── Error banner (form stays visible for retry) ── */}
      {state === "failed" && (
        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or call us at{" "}
          <a href="tel:613-577-2726" className="font-semibold underline">
            (613) 577-2726
          </a>
          .
        </div>
      )}

      {/* ── Form (hidden only on success) ── */}
      {state !== "success" && (
        <form
          ref={formRef}
          data-form-name="sidebar"
          className="space-y-4"
          /* No onSubmit — form-relay.js handles the submit event */
        >
          <div>
            <label htmlFor="sf-name" className="block text-sm font-medium text-secondary mb-1">
              Name
            </label>
            <input
              type="text"
              id="sf-name"
              name="name"
              placeholder="Your Name"
              className={inputClass}
              disabled={state === "submitting"}
              required
            />
          </div>

          <div>
            <label htmlFor="sf-phone" className="block text-sm font-medium text-secondary mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="sf-phone"
              name="phone"
              placeholder="Your Phone Number"
              className={inputClass}
              disabled={state === "submitting"}
              required
            />
          </div>

          <div>
            <label htmlFor="sf-email" className="block text-sm font-medium text-secondary mb-1">
              Email
            </label>
            <input
              type="email"
              id="sf-email"
              name="email"
              placeholder="Your Email Address"
              className={inputClass}
              disabled={state === "submitting"}
            />
          </div>

          <div>
            <label htmlFor="sf-service" className="block text-sm font-medium text-secondary mb-1">
              Service Required
            </label>
            <select
              id="sf-service"
              name="service"
              className={inputClass}
              disabled={state === "submitting"}
            >
              <option>Air Conditioning</option>
              <option>Heating</option>
              <option>Indoor Air Quality</option>
              <option>Heat Pumps</option>
              <option>Water Heaters</option>
              <option>Other / Maintenance</option>
            </select>
          </div>

          <div>
            <label htmlFor="sf-message" className="block text-sm font-medium text-secondary mb-1">
              Message
            </label>
            <textarea
              id="sf-message"
              name="message"
              rows={4}
              placeholder="How can we help?"
              className={`${inputClass} resize-none`}
              disabled={state === "submitting"}
            />
          </div>

          <Button
            variant="primary"
            className={`w-full ${state === "submitting" ? "opacity-60 cursor-not-allowed" : ""}`}
            size="md"
          >
            {state === "submitting" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Sending…
              </span>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
