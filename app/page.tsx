import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </div>
  );
}
