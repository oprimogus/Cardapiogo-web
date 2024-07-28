export function SignIn() {
    return (
        <section className="bg-white">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form className="w-full max-w-md flex flex-col items-center">
                    <img className="w-1/4 h-1/4" src="./cardapiogo/cardapiogo-red.svg" alt="" />
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 text-center sm:text-3xl">Acesse sua conta</h1>
                    <div className="flex items-center mt-8">
                        <input type="email" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email" />
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Senha" />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg">
                            Entrar
                        </button>
                        <p className="mt-4 text-center text-gray-600">ou entrar usando sua conta</p>
                        <a href="/sign-in/google" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50">
                            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                            <span className="mx-2">Google</span>
                        </a>
                        <div className="mt-6 text-center ">
                            <a href="/sign-up" className="text-sm text-red-500 hover:underline">
                                Não possui uma conta ainda? Faça seu cadastro
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
