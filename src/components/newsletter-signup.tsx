"use client";

import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";

export function NewsletterSignup() {
  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
      }}
      aria-describedby="newsletter-status"
      className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end"
    >
      <TextField
        id="newsletter-email"
        label="Email address"
        type="email"
        autoComplete="email"
        disabled
        hint="Signup is closed. This field does not store an address."
      />
      <Button type="submit" disabled>
        Subscribe
      </Button>
      <p id="newsletter-status" className="text-sm text-ink sm:col-span-2">
        Newsletter signup opens when a consent record and email provider are in place.
      </p>
    </form>
  );
}
