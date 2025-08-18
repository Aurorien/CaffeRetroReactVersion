export interface MenuItem {
  id: string;
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
