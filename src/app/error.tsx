"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16" role="alert">
      <h1 className="font-serif text-4xl text-forest">This page could not be displayed</h1>
      <p className="mt-4 text-lg text-ink">
        Something went wrong while this page was loading. Try again. If it still fails,
        the page may be unavailable.
      </p>
      <div className="mt-6">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
}
