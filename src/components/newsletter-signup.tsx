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
        hint="Sign-up is closed. This field does not store an address."
      />
      <Button type="submit" disabled>
        Subscribe
      </Button>
      <p id="newsletter-status" className="text-sm text-ink sm:col-span-2">
        Sign-up opens when AJF can record that you agreed, and when an email provider is
        in place.
      </p>
    </form>
  );
}
