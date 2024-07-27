import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
    return (
        <section className="bg-red-600 min-h-screen flex items-center justify-center p-4">
            <div className="h-3/4 w-3/4 lg:h-2/3 lg:w-2/3 xl:h-1/2 xl:w-1/2 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-6">
                <img src="./ilustrations/undraw_page_not_found_re_e9o6.svg" alt="" className="w-3/4 h-3/4"/>
                
                <span className="text-md m-4 font-medium text-black uppercase text-center">
                    Página não encontrada
                </span>
                <p className="mt-2 text-sm text-gray-600 text-center">
                    A página informada não existe. Por favor, verifique a URL e tente novamente.
                </p>
            </div>
        </section>
    );
}