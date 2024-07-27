export function SectionWithImage() {
    return (
        <div className="py-8">
            <section className="px-6 py-12 mx-auto flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center md:text-left">
                    <span className="text-red-600">Delivery Rápido e Fácil</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-700 text-center md:text-left">
                    Peça suas comidas favoritas de restaurantes locais e receba em casa de forma rápida e segura.
                </p>
                <img src="./ilustrations/undraw_delivery_address_re_cjca.svg" alt="" className=" w-1/2 h-1/2 m-4" />
                <p className="mt-2 text-md text-gray-600 text-center md:text-left">
                    Variedade de opções para todos os gostos e necessidades, entregue diretamente na sua porta.
                </p>
            </section>
            <section className="px-6 py-12 mx-auto flex flex-col items-center justify-center bg-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center md:text-left">
                    <span className="text-red-600">Experiências Gastronômicas</span> Perto de Você
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-700 text-center md:text-left">
                    Explore e reserve mesas nos melhores restaurantes da sua região para uma experiência gastronômica inesquecível.
                </p>
                <img src="./ilustrations/undraw_eating_together_re_ux62.svg" alt="" className=" w-1/2 h-1/2 m-4" />
                <p className="mt-2 text-md text-gray-600 text-center md:text-left">
                    Encontre o ambiente perfeito para cada ocasião, desde jantares românticos até encontros com amigos.
                </p>
                <img src="./ilustrations/undraw_partying_re_at7f.svg" alt="" className=" w-1/2 h-1/2 m-4" />
            </section>
            <section className="px-6 py-12 mx-auto flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center md:text-left">
                    <span className="text-red-600">Compras Fáceis e Convenientes</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-700 text-center md:text-left">
                    Descubra lojas locais que oferecem uma ampla variedade de produtos e serviços, prontos para você buscar ou receber em casa.
                </p>
                <img src="./ilustrations/undraw_shopping_app_flsj.svg" alt="" className=" w-1/2 h-1/2 m-4" />
                <p className="mt-2 text-md text-gray-600 text-center md:text-left">
                    Desde farmácias e mercados até serviços especializados, encontre tudo o que precisa em um só lugar.
                </p>
            </section>
        </div>
    );
}
