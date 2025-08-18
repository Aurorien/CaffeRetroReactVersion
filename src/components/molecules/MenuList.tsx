import type { MenuItem } from "../../shared/types";

interface MenuListProps {
  items: MenuItem[];
}

function MenuList({ items }: MenuListProps) {
  return (
    <ul className={`section-ul`}>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
