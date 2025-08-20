import type { IMenuItem } from "../../shared/types";
import SectionParagraph from "../atoms/SectionParagraph";
import MenuList from "./MenuList";

interface SectionContentProps {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  menuItems: IMenuItem[];
}

const SectionContent = ({
  title,
  firstParagraph,
  secondParagraph,
  menuItems,
}: SectionContentProps) => (
  <>
    <h1>{title}</h1>
    <SectionParagraph variant="first">{firstParagraph}</SectionParagraph>
    <SectionParagraph variant="second" isDesktopOnly>
      {secondParagraph}
    </SectionParagraph>
    <MenuList items={menuItems} />
  </>
);

export default SectionContent;
