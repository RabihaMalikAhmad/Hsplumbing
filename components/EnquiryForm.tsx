"use client";

import { useState, FormEvent } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please call instead.");
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
      <div className="booking-form enquiry-form">
        <p className="form-status success">Thanks for getting in touch — we'll reply as soon as possible.</p>
      </div>
    );
  }

  return (
    <form className="booking-form enquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="enq-name">Full name</label>
          <input id="enq-name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="enq-email">Email</label>
          <input id="enq-email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="enq-phone">Phone (optional)</label>
          <input id="enq-phone" name="phone" type="tel" placeholder="07xxx xxxxxx" />
        </div>
        <div className="field full">
          <label htmlFor="enq-message">Message</label>
          <textarea id="enq-message" name="message" required placeholder="What can we help with?" />
        </div>
      </div>
      <div className="form-actions">
        <button className="btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      {status === "error" && <p className="form-status error">{errorMsg}</p>}
    </form>
  );
}
