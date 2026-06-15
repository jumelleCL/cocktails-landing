import Cocktails from "./components/Cocktails";
import Hero from "./components/Hero";
import About from "./components/About";
import Art from "./components/Art";

export default function Home() {
  return (
    <div>
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </div>
  );
}
