"use client";
import Google from "@/components/button/google";
import SpinLoader from "@/components/loader/spinLoader";
import { useAuthContext } from "@/context";
import { useForm } from "react-hook-form";
import { FooterHome } from "../../components/footer/footerHome";
import { HeaderHome } from "../../components/header/headerHome";

export default function SignInPage() {
	const { signIn } = useAuthContext();
	const { register, handleSubmit } = useForm();

	async function handleSignIn(data: any) {
		signIn.mutateAsync(data);
	}

	return (
		<main>
			<HeaderHome />
			<section className="bg-white">
				<div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
					<form
						onSubmit={handleSubmit(handleSignIn)}
						className="w-full max-w-md flex flex-col items-center"
					>
						<img
							className="w-1/4 h-1/4"
							src="./cardapiogo/cardapiogo-red.svg"
							alt=""
						/>
						<h1 className="mt-3 text-2xl font-semibold text-gray-800 text-center sm:text-3xl">
							Acesse sua conta
						</h1>
						<div className="flex items-center mt-8">
							<input
								type="email"
								className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Email"
								{...register("email")}
							/>
						</div>
						<div className="flex items-center mt-4">
							<input
								type="password"
								className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Senha"
								{...register("password")}
							/>
						</div>
						<div className="mt-6">
							<button
								type="submit"
								className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg"
							>
								{!signIn.isPending && "Entrar"}
								{signIn.isPending && <SpinLoader />}
							</button>
							<p className="mt-4 text-center text-gray-600">
								ou entrar usando sua conta
							</p>
							<Google />
							<div className="mt-6 text-center ">
								<a
									href="/sign-up"
									className="text-sm text-red-500 hover:underline"
								>
									Não possui uma conta ainda? Faça seu cadastro
								</a>
							</div>
						</div>
					</form>
				</div>
			</section>
			<FooterHome />
		</main>
	);
}
