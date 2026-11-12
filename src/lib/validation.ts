import { z } from "zod";
import { siteContent } from "@/siteContent";

// Allowed values come from siteContent.ts, so editing the lists there
// automatically updates what the form (and the server) will accept.
function ids(list: Array<{ id: string }>): [string, ...string[]] {
  return list.map((item) => item.id) as [string, ...string[]];
}

/**
 * Used twice: in the browser for instant feedback, and again on the
 * server in /api/registrations (never trust the browser alone).
 */
export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "შეიყვანე სრული სახელი.").max(80, "სახელი ძალიან გრძელია."),
  email: z.string().trim().email("შეიყვანე ელფოსტის სწორი მისამართი.").max(120),
  phone: z
    .string()
    .trim()
    .min(6, "შეიყვანე ტელეფონის სწორი ნომერი.")
    .max(20, "ტელეფონის ნომერი ძალიან გრძელია.")
    .regex(/^[0-9+\s()-]+$/, "გამოიყენე მხოლოდ ციფრები, ინტერვალი და სიმბოლოები + ( ) -."),
  koreanLevel: z.enum(ids(siteContent.koreanLevels), {
    errorMap: () => ({ message: "აირჩიე კორეულის შენი მიმდინარე დონე." }),
  }),
  lessonType: z.enum(ids(siteContent.lessons), {
    errorMap: () => ({ message: "აირჩიე გაკვეთილის ტიპი." }),
  }),
  preferredDays: z
    .array(z.enum(ids(siteContent.booking.days)))
    .min(1, "აირჩიე მინიმუმ ერთი დღე, რომელიც შეგეფერება."),
  preferredTime: z.enum(ids(siteContent.booking.timeSlots), {
    errorMap: () => ({ message: "აირჩიე სასურველი დროის მონაკვეთი." }),
  }),
  goals: z.string().trim().max(600, "მაქსიმუმ 600 სიმბოლო.").optional(),
  additionalInfo: z.string().trim().max(600, "მაქსიმუმ 600 სიმბოლო.").optional(),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "შეიყვანე სახელი.").max(80),
  email: z.string().trim().email("შეიყვანე ელფოსტის სწორი მისამართი."),
  message: z.string().trim().min(10, "შეტყობინება ძალიან მოკლეა.").max(2000, "შეტყობინება ძალიან გრძელია."),
});
