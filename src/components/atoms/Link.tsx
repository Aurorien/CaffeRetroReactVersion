import type { ILink } from "../../shared/types";

interface LinkProps {
  link: ILink;
}

function Link({ link }: LinkProps) {
  return <a href={link.href}>{link.title}</a>;
}

export default Link;
