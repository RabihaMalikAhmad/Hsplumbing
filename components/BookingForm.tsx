"use client";

import { useState, FormEvent } from "react";

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [warnings, setWarnings] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    setWarnings([]);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      jobType: data.get("jobType"),
      preferredAt: data.get("preferredAt"),
      description: data.get("description"),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.error || "Something went wrong. Please call instead.");
      }
      if (Array.isArray(body.warnings) && body.warnings.length > 0) {
        setWarnings(body.warnings);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="booking-form">
        <p className="form-status success">
          Thanks — your booking request has been sent. Harpreet will confirm by phone or text shortly.
        </p>
        {warnings.length > 0 && (
          <p className="form-status warning">
            {warnings.join(" ")} Please also call{" "}
            <a href="tel:07857873515" className="btn-secondary">
              07857 873515
            </a>{" "}
            to be safe.
          </p>
        )}
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" required placeholder="07xxx xxxxxx" />
        </div>
        <div className="field">
          <label htmlFor="email">Email (optional)</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="jobType">Job type</label>
          <select id="jobType" name="jobType" required defaultValue="">
            <option value="" disabled>
              Select a job type
            </option>
            <option value="General plumbing">General plumbing</option>
            <option value="Emergency callout">Emergency callout</option>
            <option value="Boiler service/repair">Boiler service/repair</option>
            <option value="Bathroom fitting">Bathroom fitting</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="preferredAt">Preferred date &amp; time</label>
          <input id="preferredAt" name="preferredAt" type="datetime-local" required />
        </div>
        <div className="field full">
          <label htmlFor="description">Brief description of the job</label>
          <textarea
            id="description"
            name="description"
            placeholder="e.g. Kitchen tap dripping, boiler not firing up, etc."
          />
        </div>
      </div>
      <div className="form-actions">
        <button className="btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Request booking"}
        </button>
      </div>
      {status === "error" && <p className="form-status error">{errorMsg}</p>}
      <p className="form-note">
        This sends a booking request straight to Harpreet — he'll confirm your slot by phone or text. For anything
        urgent, please call <a href="tel:07857873515" className="btn-secondary">07857 873515</a> directly.
      </p>
    </form>
  );
}
