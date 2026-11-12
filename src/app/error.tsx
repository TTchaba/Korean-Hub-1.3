"use client";

import { ErrorState } from "@/components/ui";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <ErrorState
      title="რაღაც შეცდომა მოხდა"
      description={
        <>
          მოულოდნელი შეცდომა დაფიქსირდა.{" "}
          <button type="button" onClick={reset} className="underline">
            სცადე თავიდან
          </button>
        </>
      }
    />
  );
}
