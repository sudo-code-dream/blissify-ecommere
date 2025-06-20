export type NavbarItem = {
  name: string;
  href: string;
};

export const NAVBAR_ITEMS: NavbarItem[] = [
  { name: "Feedback", href: "/feedback" },
  { name: "Sell on Blissify", href: "/seller/apply" },
  { name: "Track My Order", href: "/track-order" },
  { name: "Customer Care", href: "/support" },
  { name: "Login", href: "/auth/sign-in" },
  { name: "SignUp", href: "/auth/sign-up" },
];
