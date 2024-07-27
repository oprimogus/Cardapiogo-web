import { FooterHome } from "./components/footer/footerHome";
import { HeaderHome } from "./components/header/headerHome"
import { SectionWithImage } from "./components/section/sectionWithImage";

export default function Home() {
  // Crie uma lista de elementos h1
  const headings = Array.from({ length: 10 }, (_, i) => (
    <h1 key={i}>Hello World!</h1>
  ));

  return (
    <main>
      <HeaderHome />
      <SectionWithImage/>
      <FooterHome />
    </main>
  );
}
