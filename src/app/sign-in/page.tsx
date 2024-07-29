import { FooterHome } from "@/components/footer/footerHome";
import { SignIn } from "@/components/forms/sign-in";
import { HeaderHome } from "@/components/header/headerHome";

export default function SignInPage() {
	return (
		<main>
			<HeaderHome />
			<SignIn />
			<FooterHome />
		</main>
	);
}
