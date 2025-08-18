import type { ReactNode } from "react";

interface SectionInnerWrapper {
  variant: string;
  children: ReactNode;
}

const SectionInnerWrapper = ({ children, variant }: SectionInnerWrapper) => (
  <div className={`wrapper ${variant}`.trim()}>{children}</div>
);

export default SectionInnerWrapper;
