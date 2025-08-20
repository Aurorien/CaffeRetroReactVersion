import Link from "./components/atoms/Link";
import type { ILink } from "./shared/types";

interface HeaderProps {
  links: ILink[];
}

function Header({ links }: HeaderProps) {
  return (
    <header>
      <nav>
        <ul className="nav-ul">
          {links.map((link) => (
            <li>
              <Link link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
