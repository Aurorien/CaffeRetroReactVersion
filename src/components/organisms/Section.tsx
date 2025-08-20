import type { ISectionItem } from "../../shared/types";
import SectionInnerWrapper from "../atoms/SectionInnerWrapper";
import SectionContent from "../molecules/SectionContent";

interface SectionProps {
  item: ISectionItem;
}

function Section({ item }: SectionProps) {
  return (
    <section id={item.id}>
      <SectionInnerWrapper variant={item.variant}>
        <SectionContent
          title={item.title}
          firstParagraph={item.firstParagraph}
          secondParagraph={item.secondParagraph}
          menuItems={item.menuItems}
        />
      </SectionInnerWrapper>
    </section>
  );
}

export default Section;
