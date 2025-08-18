import "./index.css";
import Section from "./components/organisms/Section";
import { sectionsData } from "./data";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <main>
        {sectionsData.map((item) => (
          <Section item={item} />
        ))}
      </main>
    </>
  );
}

export default App;
