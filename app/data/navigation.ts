const GYMMANAGER_URL = process.env.NEXT_PUBLIC_GYMMANAGER_URL!;

type BaseNavItem = {
  id: string;
  translationKey: string;
};

type SignupNavItem = BaseNavItem & {
  type: "signup";
  href: string;
};

type PageNavItem = BaseNavItem & {
  type: "page";
  href: string;
};

type ExternalNavItem = BaseNavItem & {
  type: "external";
  href: string;
};

export type SectionNavItem = BaseNavItem & {
  type: "section";
  children: PageNavItem[];
};

export type NavItem =
  | SignupNavItem
  | PageNavItem
  | ExternalNavItem
  | SectionNavItem;

export const navigation: NavItem[] = [
  {
    id: "about",
    translationKey: "nav.about",
    type: "section",
    children: [
      {
        id: "about_school",
        translationKey: "nav.about_school",
        type: "page",
        href: "/about/school",
      },
      {
        id: "about_instructors",
        translationKey: "nav.about_instructors",
        type: "page",
        href: "/about/instructors",
      },
      {
        id: "skt",
        translationKey: "nav.about_skt",
        type: "page",
        href: "/about/sports-dance-club",
      },
    ],
  },
  {
    id: "offer",
    translationKey: "nav.offer",
    type: "section",
    children: [
      {
        id: "offer_kids",
        translationKey: "nav.offer_kids",
        type: "page",
        href: "/offer/kids",
      },
      {
        id: "offer_youth",
        translationKey: "nav.offer_youth",
        type: "page",
        href: "/offer/youth",
      },
      {
        id: "offer_adults",
        translationKey: "nav.offer_adults",
        type: "page",
        href: "/offer/adults",
      },
    ],
  },
  {
    id: "offer_schedule",
    translationKey: "nav.offer_schedule",
    type: "page",
    href: "/offer/schedule",
  },
  {
    id: "faq",
    translationKey: "nav.faq",
    type: "page",
    href: "/faq",
  },
  {
    id: "client_panel",
    translationKey: "nav.client_panel",
    type: "external",
    href: GYMMANAGER_URL,
  },
  {
    id: "contact",
    translationKey: "nav.contact",
    type: "page",
    href: "/contact",
  },
  {
    id: "signup",
    translationKey: "nav.sign_up_now",
    type: "signup",
    href: "/sign-up",
  },
];
