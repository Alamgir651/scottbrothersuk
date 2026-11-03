"use client";

import { useState } from "react";

export type Field = { label: string; name: string; placeholder: string; type?: "text" | "tel" | "email"; multiline?: boolean };

// Contact form with the live site's fields. Demo only: nothing is sent yet.
export default function SimpleForm({ fields, tone = "light" }: { fields: Field[]; tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);
  const dark = tone === "dark";
  const input = `mt-2 block w-full rounded-sm border px-4 py-3 focus:border-amber focus:outline-none ${
    dark ? "border-white/25 bg-white/5 text-white placeholder:text-white/40" : "border-ink/20 bg-white placeholder:text-ink/40"
  }`;

  if (sent) {
    return (
      <div role="status" className={`rounded-sm border-2 border-amber p-8 ${dark ? "text-white" : ""}`}>
        <p className="display text-3xl">Thank you!</p>
        <p className="mt-3 text-lg">We will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send to an API route (e.g. Resend) when this goes live
        setSent(true);
      }}
      className="grid gap-5 sm:grid-cols-2"
    >
      {fields.map((f) => (
        <label key={f.name} className={`text-sm font-semibold ${dark ? "text-white/85" : ""} ${f.multiline || f.type === "email" ? "sm:col-span-2" : ""}`}>
          {f.label}
          {f.multiline ? (
            <textarea required name={f.name} rows={5} placeholder={f.placeholder} className={input} />
          ) : (
            <input required name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} className={input} />
          )}
        </label>
      ))}
      <div className="sm:col-span-2">
        <button type="submit" className="wide rounded-full bg-amber px-8 py-3.5 font-bold text-night transition-colors hover:bg-amber-soft">
          Submit
        </button>
      </div>
    </form>
  );
}
