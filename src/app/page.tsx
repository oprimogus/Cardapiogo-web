import { FooterHome } from "../components/footer/footerHome";
import { HeaderHome } from "../components/header/headerHome";
import { SectionWithImage, SectionWithImageItem } from "../components/section/sectionWithImage";

export default function App() {

	const items: SectionWithImageItem[] = [
		{
			textTop: 'Delivery Rápido e Fácil',
			subtitleTop: 'Peça suas comidas favoritas de restaurantes locais e receba em casa de \nforma rápida e segura.',
			imagePath: './ilustrations/undraw_delivery_address_re_cjca.svg',
			subtitleBottom: 'Variedade de opções para todos os gostos e necessidades, entregue\ndiretamente na sua porta.'
		},
		{
			textTop: 'Experiências Gastronômicas Perto de Você',
			subtitleTop: 'Explore e reserve mesas nos melhores restaurantes da sua região para uma experiência gastronômica inesquecível.',
			imagePath: './ilustrations/undraw_eating_together_re_ux62.svg',
			subtitleBottom: 'Encontre o ambiente perfeito para cada ocasião, desde jantares românticos até encontros com amigos.'
		},
		{
			textTop: 'Compras Fáceis e Convenientes',
			subtitleTop: 'Descubra lojas locais que oferecem uma ampla variedade de produtos e serviços, prontos para você buscar ou receber em casa.',
			imagePath: './ilustrations/undraw_shopping_app_flsj.svg',
			subtitleBottom: 'Desde farmácias e mercados até serviços especializados, encontre tudo o que precisa em um só lugar.'
		},
	]
	
	return (
		<main>
			<HeaderHome />
			<SectionWithImage items={items} />
			<FooterHome />
		</main>
	);
}
