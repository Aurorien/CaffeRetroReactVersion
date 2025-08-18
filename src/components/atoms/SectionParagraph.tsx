import type { ReactNode } from "react";

interface SectionParagraphProps {
  children: ReactNode;
  variant: string;
  isDesktopOnly?: boolean;
}

function SectionParagraph({
  children,
  variant = "first",
  isDesktopOnly = false,
}: SectionParagraphProps) {
  const baseClass = "section-p";
  const variantClass = variant === "first" ? "first-p" : "second-p";
  const desktopClass = isDesktopOnly ? "desktop-only" : "";

  return (
    <p className={`${baseClass} ${variantClass} ${desktopClass}`.trim()}>
      {children}
    </p>
  );
}

export default SectionParagraph;
