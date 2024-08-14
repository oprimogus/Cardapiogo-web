"use client";
import Google from "@/components/button/google"
import { FooterHome } from "@/components/footer/footerHome"
import { HeaderHome } from "@/components/header/headerHome"
import { cardapiogoService } from "@/services/cardapiogo-api"
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { z } from "zod"

const signUpSchema = z.object({
	email: z.string()
		.min(1, 'E-mail é obrigatório.')
		.email('E-mail inválido.'),
	password: z.string(),
	passwordConfirm: z.string(),
	profile: z.object({
		name: z.string()
			.min(1, 'Nome é obrigatório.'),
		lastName: z.string()
			.min(1, 'Sobrenome é obrigatório.'),
		document: z.string()
			.min(1, 'CPF é obrigatório.'),
		phone: z.string()
			.min(1, 'Celular é obrigatório.'),
	})
}).refine((data) => data.password === data.passwordConfirm, {
	message: 'As senhas estão diferentes.',
	path: ['passwordConfirm']
} )

type SignUpSchema = z.infer<typeof signUpSchema>

export default function SignUpPage() {
	const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema)
	})

	const makeSignUp = useMutation({
		mutationFn: (params: SignUpSchema) => {
			return cardapiogoService.signUp(params);
		},
		onSuccess: (data) => {
			console.log("deu bom no signUp");
		},
		onError: (error) => {
			console.log("deu ruim no signUp");
			console.log(JSON.stringify(error));
		},
	});

	function handleSignUp(params: SignUpSchema) {
		makeSignUp.mutateAsync(params)
	}

	return (
		<main>
			<HeaderHome />
			<section className="bg-white py-24">
				<div className="container flex flex-col items-center justify-center min-h-screen mx-auto sm:flex-row">
					<div className="w-full max-w-md flex flex-col items-center">
						<img
							className="w-1/4 h-1/4"
							src="./cardapiogo/cardapiogo-red.svg"
							alt=""
						/>
						<h1 className="mt-3 text-2xl font-semibold text-gray-800 text-center sm:text-3xl">
							Crie sua conta
						</h1>
					</div>

					<form
						onSubmit={handleSubmit(handleSignUp)}
						className="w-full max-w-md flex flex-col px-4">
						<div className="flex flex-col gap-1 py-2">
							<label htmlFor="name" className="text-sm font-semibold text-gray-700">Nome</label>
							<input
								type="text"
								className="block w-full px-2 py-2 text-gray-700 bg-white border-2 rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
								placeholder="Seu primeiro nome"
								{...register("profile.name")}
							/>
							{errors.profile?.name && 
								<span className="text-red-500 px-2">{errors.profile.name.message}</span>}
						</div>
						<div className="flex flex-col gap-1 py-2">
							<label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Sobrenome</label>
							<input
								type="text"
								className="block w-full px-2 py-2 text-gray-700 bg-white border-2 rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
								placeholder="Seu sobrenome"
								{...register("profile.lastName")}
							/>
							{errors.profile?.lastName && 
								<span className="text-red-500 px-2">{errors.profile.lastName?.message}</span>}
						</div>
						<div className="flex flex-col gap-1 py-2">
							<label htmlFor="document" className="text-sm font-semibold text-gray-700">CPF</label>
							<input
								type="text"
								className="block w-full px-2 py-2 text-gray-700 bg-white border-2 rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
								placeholder="CPF"
								{...register("profile.document")}
							/>
							{errors.profile?.document && 
								<span className="text-red-500 px-2">{errors.profile.document?.message}</span>}
						</div>
						<div className="flex flex-col gap-1 py-2">
							<label htmlFor="phone" className="text-sm font-semibold text-gray-700">Celular</label>
							<input
								type="text"
								className="block w-full px-2 py-2 text-gray-700 bg-white border-2 rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
								placeholder="Celular"
								{...register("profile.phone")}
							/>
							{errors.profile?.phone && 
								<span className="text-red-500 px-2">{errors.profile.phone?.message}</span>}
						</div>
						<div className="flex flex-col gap-1 py-2">
							<label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail</label>
							<input
								type="text"
								className="block w-full px-2 py-2 text-gray-700 bg-white border-2 rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
								placeholder="Email"
								{...register("email")}
							/>
							{errors.email && 
								<span className="text-red-500 px-2">{errors.email?.message}</span>}
						</div>
						<div className="flex flex-col gap-1 py-2">
							<label htmlFor="password" className="text-sm font-semibold text-gray-700">Senha</label>
							<input
								type="password"
								className="block w-full px-2 py-2 text-gray-700 bg-white border-2 rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
								placeholder="Senha"
								{...register("password")}
							/>
							{errors.password && 
								<span className="text-red-500 px-2">{errors.password?.message}</span>}
						</div>
						<div className="flex flex-col gap-1 py-2">
							<label htmlFor="password" className="text-sm font-semibold text-gray-700">Confirma sua senha</label>
							<input
								type="password"
								className="block w-full px-2 py-2 text-gray-700 bg-white border-2 rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring-opacity-40"
								placeholder="Confirme sua senha"
								{...register("passwordConfirm")}
							/>
							{errors.passwordConfirm && 
								<span className="text-red-500 px-2">{errors.passwordConfirm?.message}</span>}
						</div>

						{/* <input
							type="text"
							className="block mt-4 w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Sobrenome"
							{...register("profile.lastName")}
						/>
						<input
							type="text"
							className="block mt-4 w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="CPF"
							{...register("profile.document")}
						/>
						<input
							type="text"
							className="block mt-4 w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Celular"
							{...register("profile.phone")}
						/>
						<input
							type="email"
							className="block mt-4 w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Email"
							{...register("email")}
						/>
						<input
							type="password"
							className="block mt-4 w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Senha"
							{...register("password")}
						/>
						<input
							type="passwordConfirm"
							className="block mt-4 w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
							placeholder="Confirme sua senha"
							{...register("passwordConfirm")}
						/> */}
						<button
							type="submit"
							className="w-full mt-4 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-700"
						>
							Criar conta
						</button>
						<p className="mt-4 text-center text-gray-600">
							ou criar sua conta usando:
						</p>
						<Google />
					</form>
				</div>
			</section>
			<FooterHome />
		</main>
	);
}
