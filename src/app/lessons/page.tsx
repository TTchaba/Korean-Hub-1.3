import type { Metadata } from "next";
import { LessonCard } from "@/components/LessonCard";
import { siteContent } from "@/siteContent";
import { CTASection, Reveal, SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "გაკვეთილები და ფასები",
  description: "შეადარე Korean Hub-ის ინდივიდუალური და ჯგუფური კორეული გაკვეთილები, ფასები და ის, რასაც თითოეული მოიცავს.",
};

export default function LessonsPage() {
  return (
    <>
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <div className="container-hub">
          <SectionTitle
            title="გაკვეთილები და ფასები"
            description="ორი ფორმატი, ერთი საათი, კვირაში ორჯერ, სრულად ონლაინ. აირჩიე ის, რომელიც შენს სწავლის სტილს მოერგება."
          />
        </div>
      </section>

      <section className="border-b border-ink/10 bg-porcelain-dim py-20 sm:py-28">
        <div className="container-hub grid gap-6 sm:grid-cols-2">
          {siteContent.lessons.map((lesson, index) => (
            <Reveal key={lesson.id} delay={index * 0.1}>
              <LessonCard lesson={lesson} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        headline="არ იცი, რომელი აირჩიო?"
        description="გამოგვიგზავნე რეგისტრაციის მოთხოვნა და Korean Hub პირველ გაკვეთილამდე არჩევანში დაგეხმარება."
        ctaLabel="რეგისტრაციის დაწყება"
        ctaHref="/book"
      />
    </>
  );
}
