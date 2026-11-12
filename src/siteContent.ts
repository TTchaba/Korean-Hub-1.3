/**
 * ALL EDITABLE WEBSITE TEXT LIVES IN THIS FILE (the website is in Georgian).
 *
 *   site / brand ........ name, URL, short description
 *   navigation .......... menu links and the registration button label
 *   teachers ............ teacher name, photo, bio, qualifications
 *   lessons ............. lesson titles, descriptions and PRICES
 *   koreanLevels ........ options in the "Korean level" dropdown
 *   contact / socialMedia  email, phone, social links
 *   faq / testimonials .. FAQ answers and student quotes
 *   homepage ............ hero text, "why" cards, "how it works" steps
 *   forStudents ......... text of the "For Students" page
 *   booking ............. day/time options, Google Form fallback
 *   seo ................. page title and description for search engines
 *
 * Prices are informational only — the website takes no payments.
 * A price of 0 is shown on the site as "[ფასი]".
 * Anything written like [ეს] is a placeholder waiting for real content.
 * The brand name "Korean Hub" is intentionally kept in English.
 */

export const siteContent = {
  site: {
    name: "Korean Hub",
    tagline: "ისწავლე კორეული ნამდვილ მასწავლებელთან და არა აპლიკაციით.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    // Shown in the footer. Replace with the registered business name.
    legalName: "[იურიდიული დასახელება]",
  },

  brand: {
    name: "Korean Hub",
    logoText: "한국허브",
    description:
      "კორეული ენის პატარა სტუდია ერთი მასწავლებლით, ინდივიდუალური და ჯგუფური ცოცხალი ონლაინ გაკვეთილები.",
  },

  navigation: {
    links: [
      { href: "/", label: "მთავარი" },
      { href: "/lessons", label: "გაკვეთილები" },
      { href: "/teacher", label: "მასწავლებელი" },
      { href: "/for-students", label: "სტუდენტებისთვის" },
      { href: "/contact", label: "კონტაქტი" },
    ],
    ctaLabel: "რეგისტრაცია",
  },

  // A list so more teachers can be added later. For now the site shows
  // the FIRST teacher only.
  teachers: [
    {
      id: "teacher-1",
      name: "ელენე ჭაბაშვილი",
      role: "[მასწავლებლის როლი — მაგ. კორეული ენის მასწავლებელი]",
      photo: "/images/teacher-placeholder.svg",
      shortBio: "დამფუძნებელი და კორეული ენის მასწავლებელი",
      fullBio: [
        "[მასწავლებლის სრული ბიოგრაფია, პირველი აბზაცი. ჩაწერე რეალური გამოცდილება, როგორ დაიწყო კორეულის სწავლება და რა არის მისთვის მნიშვნელოვანი გაკვეთილზე.]",
        "[მეორე აბზაცი. ჩაწერე სწავლების სტილი, სხვადასხვა დონის მოსწავლეებთან მუშაობის გამოცდილება ან სპეციალიზაცია.]",
      ],
      experienceYears: 0,
      qualifications: ["[კვალიფიკაცია 1]", "[კვალიფიკაცია 2]", "[კვალიფიკაცია 3]"],
      teachingPhilosophy:
        "[სწავლების ფილოსოფია — მოკლე აბზაცი იმის შესახებ, როგორ არის აგებული გაკვეთილები და რას უნდა ელოდოს სტუდენტი.]",
      languagesSpoken: ["[ენა 1]", "[ენა 2]"],
    },
  ],

  // `price` is shown for information only. 0 displays as "[ფასი]".
  lessons: [
    {
      id: "individual",
      title: "ინდივიდუალური კორეული",
      shortDescription: "პირისპირ გაკვეთილები, მორგებული შენს ტემპსა და მიზნებზე.",
      description:
        "[გაკვეთილის აღწერა — ჩაწერე, რას მოიცავს ინდივიდუალური გაკვეთილი, რა მასალებით მუშაობთ და ვის ერგება.]",
      duration: "1 საათი",
      frequency: "კვირაში 2-ჯერ",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[რას მოიცავს 1 — მაგ. პირადი სასწავლო გეგმა]",
        "[რას მოიცავს 2 — მაგ. სასწავლო მასალები]",
        "[რას მოიცავს 3 — მაგ. საშინაო დავალება და უკუკავშირი]",
      ],
      isGroup: false,
    },
    {
      id: "group",
      title: "ჯგუფური კორეული",
      shortDescription: "ისწავლე მცირე ჯგუფში, მსგავსი დონის სტუდენტებთან ერთად.",
      description:
        "[გაკვეთილის აღწერა — ჩაწერე ჯგუფის ზომა, დონეების შესაბამისობა და გაკვეთილის სტილი.]",
      duration: "1 საათი",
      frequency: "კვირაში 2-ჯერ",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[რას მოიცავს 1 — მაგ. მცირე ჯგუფი, მაქსიმუმ N სტუდენტი]",
        "[რას მოიცავს 2 — მაგ. საერთო სასწავლო მასალები]",
        "[რას მოიცავს 3 — მაგ. სასაუბრო პრაქტიკა ჯგუფელებთან]",
      ],
      isGroup: true,
    },
  ],

  koreanLevels: [
    { id: "beginner", label: "დამწყები — ახლა ვიწყებ" },
    { id: "elementary", label: "საბაზისო — საფუძვლები ვიცი" },
    { id: "intermediate", label: "საშუალო — შემიძლია საუბარი" },
    { id: "advanced", label: "მაღალი — თავისუფალ საუბარს ვხვეწ" },
    { id: "unsure", label: "არ ვიცი — რჩევა მჭირდება" },
  ],

  contact: {
    email: "[ელფოსტა]",
    phone: "[ტელეფონი]",
    // Shown on the thank-you screen after someone registers.
    responseWindow: "1–2 სამუშაო დღის განმავლობაში",
  },

  socialMedia: {
    instagram: "[INSTAGRAM-ის ბმული]",
    facebook: "[FACEBOOK-ის ბმული]",
  },

  faq: [
    {
      id: "faq-1",
      question: "რეგისტრაციისთვის ანგარიშის შექმნა მჭირდება?",
      answer:
        "არა. ირჩევ გაკვეთილს, ავსებ მოკლე ფორმას და აგზავნი — არც ანგარიშია საჭირო, არც პაროლი.",
    },
    {
      id: "faq-2",
      question: "როდის დამიდასტურდება გაკვეთილების გრაფიკი?",
      answer:
        "რეგისტრაცია მოთხოვნის გაგზავნაა. Korean Hub პირადად დაგიკავშირდება ტელეფონით ან ელფოსტით და შეგითანხმდება შენთვის მოსახერხებელ გრაფიკზე. ეს პროცესი ავტომატური არ არის — შენთან ადამიანი დაკავშირდება.",
    },
    {
      id: "faq-3",
      question: "იხდება თუ არა რამე ამ ვებგვერდზე?",
      answer:
        "არა. ამ ვებგვერდზე გადახდა არ ხდება. რეგისტრაცია მხოლოდ შენს მონაცემებს გზავნის, რათა Korean Hub-მა დაგიკავშირდეს.",
    },
    {
      id: "faq-4",
      question: "შემიძლია მოგვიანებით ინდივიდუალურიდან ჯგუფურზე გადასვლა?",
      answer:
        "დიახ — უბრალოდ დაგვიკავშირდი და Korean Hub დაგეხმარება იმ ფორმატის არჩევაში, რომელიც შენთვის უკეთესია.",
    },
    {
      id: "faq-5",
      question: "[ხშირად დასმული კითხვა]",
      answer: "[პასუხი]",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "[სტუდენტის სახელი]",
      level: "დამწყები",
      quote: "[სატესტო ციტატა — ჩაანაცვლე რეალური სტუდენტის შეფასებით.]",
    },
    {
      id: "t2",
      name: "[სტუდენტის სახელი]",
      level: "საშუალო დონე",
      quote: "[სატესტო ციტატა — ჩაანაცვლე რეალური სტუდენტის შეფასებით.]",
    },
    {
      id: "t3",
      name: "[სტუდენტის სახელი]",
      level: "ჯგუფის სტუდენტი",
      quote: "[სატესტო ციტატა — ჩაანაცვლე რეალური სტუდენტის შეფასებით.]",
    },
  ],

  homepage: {
    heroHeadline: "ისწავლე კორეული სწორად.",
    heroSubheadline:
      "ცოცხალი ონლაინ გაკვეთილები ერთგულ მასწავლებელთან ინდივიდუალურად ან მცირე ჯგუფში, შენს სწავლის სტილზე მორგებული.",
    heroPrimaryCta: "დარეგისტრირდი",
    heroSecondaryCta: "როგორ მუშაობს",
    finalCtaHeadline: "მზად ხარ კორეულის შესასწავლად?",
    finalCtaDescription:
      "გამოგვიგზავნე რეგისტრაცია — Korean Hub დაგიკავშირდება დეტალების შესათანხმებლად.",
    finalCtaLabel: "დარეგისტრირდი",

    whyKoreanHub: {
      title: "რატომ Korean Hub",
      description:
        "პატარა, მიზანმიმართული სტუდია — აგებული ცოცხალ საუბარზე და არა კურსების ბიბლიოთეკაზე.",
      reasons: [
        {
          icon: "teacher",
          title: "ერთი მასწავლებელი",
          description:
            "მასწავლებლები არ იცვლებიან — დროთა განმავლობაში ნამდვილ სასწავლო ურთიერთობას აყალიბებ.",
        },
        {
          icon: "schedule",
          title: "შენთვის მოსახერხებელი გრაფიკი",
          description:
            "გაკვეთილების დროს შენთან პირადად ვთანხმდებით და არა სისტემა გიწესებს.",
        },
        {
          icon: "speaking",
          title: "საუბარზე აგებული",
          description:
            "გაკვეთილები ცოცხალია და სასაუბრო, არა ჩაწერილი ვიდეოები, რომლებსაც მარტო უყურებ.",
        },
        {
          icon: "simple",
          title: "მარტივი დასაწყისი",
          description: "შეავსე ერთი მოკლე ფორმა — არც ანგარიში გჭირდება, არც პაროლი.",
        },
      ],
    },

    howItWorks: {
      title: "როგორ მუშაობს",
      description:
        "რეგისტრაცია რამდენიმე წამს გრძელდება. გაკვეთილების დროს შენთან პირადად ვათანხმებთ და არა ალგორითმი გვიწესებს.",
      steps: [
        { title: "აირჩიე გაკვეთილი", description: "აირჩიე ინდივიდუალური ან ჯგუფური კორეული." },
        { title: "დარეგისტრირდი", description: "მოგვიყევი შენს შესახებ და შენს მიზნებზე." },
        { title: "ჩვენ დაგიკავშირდებით", description: "Korean Hub დაგირეკავს ან მოგწერს ელფოსტაზე." },
        { title: "დაადასტურე გრაფიკი", description: "ერთად შევთანხმდებით გაკვეთილების დღეებსა და საათებზე." },
        { title: "დაიწყე სწავლა", description: "დაიწყე ცოცხალი ონლაინ გაკვეთილები." },
      ],
    },
  },

  // Text of the "For Students" page
  forStudents: {
    title: "სტუდენტებისთვის",
    description: "ყველაფერი, რაც რეგისტრაციამდე უნდა იცოდე — ანგარიში საჭირო არ არის.",
    sections: [
      {
        title: "ვისთვისაა ეს გაკვეთილები",
        body: "გაკვეთილები განკუთვნილია მათთვის, ვისაც სურს კორეულის სწავლა ცოცხალ საუბარზე დაყრდნობით — ნულიდან იწყებ თუ უკვე შეგიძლია საუბარი და გინდა წინსვლა. რეგისტრაციის შემდეგ მასწავლებელი დაგეხმარება შენი დონის განსაზღვრაში.",
      },
      {
        title: "როგორ მიმდინარეობს გაკვეთილები",
        body: "გაკვეთილები ცოცხალია და ონლაინ — ერთი საათი, კვირაში ორჯერ, როგორც ინდივიდუალური, ისე ჯგუფური ფორმატისთვის. ვიდეოზარით ერთვები შენთან შეთანხმებულ დროს. წინასწარ ჩაწერილი ვიდეოები ან დამოუკიდებლად გასავლელი მოდულები არ არსებობს.",
      },
      {
        title: "რას უნდა ელოდო",
        body: "გაკვეთილი საუბარზეა ორიენტირებული. მასწავლებელი ტემპსა და მასალას შენს დონესა და მიზნებზე არგებს — მაგალითად, ყოველდღიურ საუბარზე ან მოგზაურობისთვის მზადებაზე.",
      },
      {
        title: "როგორ მუშაობს ონლაინ გაკვეთილი",
        body: "დაგჭირდება სტაბილური ინტერნეტი და მოწყობილობა კამერითა და მიკროფონით. გრაფიკის დადასტურების შემდეგ მასწავლებელი გამოგიგზავნის ვიდეოზარის ბმულს და საჭირო მასალებს.",
      },
      {
        title: "რეგისტრაციის პროცესი",
        body: "რეგისტრაცია პირდაპირ ამ ვებგვერდზე ხდება — აირჩიე გაკვეთილის ტიპი, მიუთითე სასურველი დღეები და დრო და შეავსე მოკლე ფორმა შენი მონაცემებითა და მიზნებით. ეს მოთხოვნაა და არა მყისიერი დაჯავშნა; ანგარიშის შექმნა ან პაროლი საჭირო არ არის.",
      },
      {
        title: "გრაფიკის დადასტურება",
        body: "რეგისტრაციის შემდეგ Korean Hub პირადად დაგიკავშირდება ტელეფონით ან ელფოსტით, რათა განიხილოს შენი მიზნები და შეგითანხმდეს გაკვეთილების კონკრეტულ დღეებსა და საათებზე. ეს ეტაპი ავტომატური არ არის.",
      },
      {
        title: "რა ხდება რეგისტრაციის შემდეგ",
        body: "მოთხოვნის გაგზავნის შემდეგ ეკრანზე დადასტურებას ნახავ, ხოლო Korean Hub მალე დაგიკავშირდება. არც პანელია, არც ანგარიში — ყველაფერი პირდაპირი კონტაქტით ხდება.",
      },
    ],
    ctaHeadline: "მზად ხარ დასაწყებად?",
    ctaLabel: "მოითხოვე გაკვეთილი",
  },

  booking: {
    // The native registration form is the normal flow. Only if you set
    // useGoogleForm to true AND fill in googleFormUrl will /book send
    // visitors to that Google Form instead.
    useGoogleForm: false,
    googleFormUrl: "",

    // Options in the "preferred days" and "preferred time" part of the form.
    days: [
      { id: "mon", label: "ორშ" },
      { id: "tue", label: "სამ" },
      { id: "wed", label: "ოთხ" },
      { id: "thu", label: "ხუთ" },
      { id: "fri", label: "პარ" },
      { id: "sat", label: "შაბ" },
      { id: "sun", label: "კვი" },
    ],
    timeSlots: [
      { id: "morning", label: "დილა" },
      { id: "afternoon", label: "შუადღე" },
      { id: "evening", label: "საღამო" },
    ],
    // Small note shown under the schedule options.
    scheduleNote:
      "ეს მხოლოდ შენი სურვილებია — საბოლოო დროზე Korean Hub დაგიკავშირდება და შეგითანხმდება.",
  },

  seo: {
    defaultTitle: "Korean Hub — ისწავლე კორეული ონლაინ",
    titleTemplate: "%s | Korean Hub",
    defaultDescription:
      "Korean Hub გთავაზობს ცოცხალ ონლაინ ინდივიდუალურ და ჯგუფურ გაკვეთილებს კორეულ ენაში მასწავლებელთან. დარეგისტრირდი ონლაინ — გრაფიკს პირადად დაგიდასტურებთ.",
    ogImage: "/images/og-default.svg",
  },
};

// ── Helpers (no need to edit below this line) ───────────────────────

export type Lesson = (typeof siteContent.lessons)[number];

/** The teacher shown on the site (the first one in the list). */
export function getPrimaryTeacher() {
  const teacher = siteContent.teachers[0];
  if (!teacher) throw new Error("siteContent.teachers must contain at least one teacher.");
  return teacher;
}

/** Finds a lesson by its id, e.g. "individual". Returns undefined if not found. */
export function findLessonById(lessonId: string): Lesson | undefined {
  return siteContent.lessons.find((lesson) => lesson.id === lessonId);
}
