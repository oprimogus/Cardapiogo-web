import { FooterHome } from "./components/footer/footerHome";
import { HeaderHome } from "./components/header/headerHome";
import { SectionWithImage } from "./components/section/sectionWithImage";

export default function Home() {
	return (
		<main>
			<HeaderHome />
			<SectionWithImage />
			<FooterHome />
		</main>
	);
}
