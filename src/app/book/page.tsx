import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { siteContent } from "@/siteContent";

export const metadata: Metadata = {
  title: "რეგისტრაცია",
  description: "გამოგზავნე რეგისტრაციის მოთხოვნა ინდივიდუალური ან ჯგუფური კორეული გაკვეთილისთვის.",
};

export default function BookPage() {
  const { useGoogleForm, googleFormUrl } = siteContent.booking;

  // Optional fallback: only when switched on AND a URL is filled in (siteContent.ts → booking).
  if (useGoogleForm && googleFormUrl) {
    redirect(googleFormUrl);
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="container-hub max-w-4xl">
        {/* Suspense is required by Next.js because BookingForm reads the ?lesson= address parameter. */}
        <Suspense fallback={null}>
          <BookingForm />
        </Suspense>
      </div>
    </section>
  );
}
