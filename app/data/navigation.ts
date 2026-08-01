const GYMMANAGER_URL = process.env.NEXT_PUBLIC_GYMMANAGER_URL!;

type NavItem = {
  id: string;
  translationKey: string;
  href: string;
  variant: "default" | "external" | "signup";
};

export type NavProps = {
  navItems: NavItem[];
  scrolled: boolean;
};

export const navigation: NavItem[] = [
  {
    id: "about",
    translationKey: "nav.about",
    href: "/about",
    variant: "default",
  },
  {
    id: "sports_dance_club",
    translationKey: "nav.sports_dance_club",
    href: "/sports-dance-club",
    variant: "default",
  },
  {
    id: "offer",
    translationKey: "nav.offer",
    href: "/offer",
    variant: "default",
  },
  {
    id: "schedule",
    translationKey: "nav.schedule",
    href: "/schedule",
    variant: "default",
  },
  {
    id: "pricing",
    translationKey: "nav.pricing",
    href: "/pricing",
    variant: "default",
  },
  {
    id: "faq",
    translationKey: "nav.faq",
    href: "/faq",
    variant: "default",
  },
  {
    id: "contact",
    translationKey: "nav.contact",
    href: "/contact",
    variant: "default",
  },
  {
    id: "client_panel",
    translationKey: "nav.client_panel",
    href: GYMMANAGER_URL,
    variant: "external",
  },
  {
    id: "signup",
    translationKey: "nav.sign_up_now",
    href: "/sign-up",
    variant: "signup",
  },
];
