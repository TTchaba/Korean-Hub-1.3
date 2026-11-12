import type { Metadata } from "next";
import { CTASection, Reveal, SectionTitle } from "@/components/ui";
import { siteContent } from "@/siteContent";

const page = siteContent.forStudents;

export const metadata: Metadata = {
  title: page.title,
  description: "ვისთვისაა Korean Hub-ის გაკვეთილები, როგორ მუშაობს ონლაინ გაკვეთილები და რა ხდება რეგისტრაციის შემდეგ.",
};

// The text of this page is edited in siteContent.ts → forStudents.
export default function ForStudentsPage() {
  return (
    <>
      <section className="border-b border-ink/10 py-20 sm:py-28">
        <div className="container-hub">
          <SectionTitle title={page.title} description={page.description} />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-hub grid gap-12 sm:grid-cols-2">
          {page.sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 2) * 0.1}>
              <h2 className="font-display text-2xl">{section.title}</h2>
              <p className="mt-3 max-w-prose text-ink/70">{section.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection headline={page.ctaHeadline} ctaLabel={page.ctaLabel} ctaHref="/book" />
    </>
  );
}
