import "./index.css";
import Section from "./components/organisms/Section";
import { sectionsData } from "../public/data";
import Header from "./Header";
import type { ILink } from "./shared/types";

function App() {
  const links: ILink[] = sectionsData.map((section) => ({
    title: section.title,
    href: section.href,
  }));

  return (
    <>
      <Header links={links} />
      <main>
        {sectionsData.map((item) => (
          <Section item={item} key={item.id} />
        ))}
      </main>
    </>
  );
}

export default App;
