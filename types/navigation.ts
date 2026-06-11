export type ActiveSection =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact";

export interface NavigationLink {
  label: string;
  section: ActiveSection;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    label: "Home",
    section: "home",
  },
  {
    label: "About",
    section: "about",
  },
  {
    label: "Skills",
    section: "skills",
  },
  {
    label: "Experience",
    section: "experience",
  },
  {
    label: "Projects",
    section: "projects",
  },
  {
    label: "Contact",
    section: "contact",
  },
];