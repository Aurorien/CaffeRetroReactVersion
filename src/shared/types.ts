import type { UUID } from "crypto";

export interface MenuItem {
  id: UUID;
  name: string;
  value: string;
}

export interface SectionItem {
  id: string;
  variant: string;
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  menuItems: MenuItem[];
}
