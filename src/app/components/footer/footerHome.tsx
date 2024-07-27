export function FooterHome() {
    const year = new Date().getFullYear()
    return (
        <footer className="bg-red-600 text-white font-semibold flex flex-col items-center justify-center h-24">
            <p>&copy; {year} Cardapiogo.</p>
            <p>Todos os direitos reservados.</p>
        </footer>
    );
}
