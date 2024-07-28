export type MenuItem = {
    href: string,
    text: string
}
interface MenuProps {
    isOpen: boolean
    items: MenuItem[]
}

export function Menu({ isOpen, items }: Readonly<MenuProps>) {
    return (
        <div className={`fixed top-20 inset-x-0 z-20 w-full px-4 py-4 transition-all duration-300 
            ease-in-out bg-red-600 md:mt-0 md:p-0 md:top-0 md:relative 
            md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex 
            md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 translate-x-full'}`}>
            <div className="flex flex-col items-end md:items-center md:flex-row">
                {items.map((item, index) => (
                    <a href={item.href} key={item.text}
                        className="w-30 m-2 px-4 rounded-full text-center text-white hover:bg-white hover:text-red-600 
                        focus:bg-white focus:text-red-600 active:bg-white active:text-red-600 transition-colors duration-300 transform 
                        md:px-2 md:my-0">
                        {item.text}
                    </a>
                ))}
            </div>
        </div>
    );
}