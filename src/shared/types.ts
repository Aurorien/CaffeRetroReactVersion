export interface IMenuItem {
  id: string;
  name: string;
  value: string;
}

export interface ISectionItem {
  id: string;
  variant: string;
  title: string;
  href: string;
  firstParagraph: string;
  secondParagraph: string;
  menuItems: IMenuItem[];
}

export interface ILink {
  title: string;
  href: string;
}
