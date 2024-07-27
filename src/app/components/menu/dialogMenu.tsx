export type DialogMenuItem = {
    href: string,
    text: string
}
interface DialogMenuProps {
    isOpen: boolean
    items: DialogMenuItem[]
}

export function DialogMenu({ isOpen, items }: Readonly<DialogMenuProps>) {
    return (
        <div className={`fixed top-12 inset-0 z-10 transition-transform duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className={`fixed inset-y-0 right-0 w-1/2 h-full bg-red-600 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <nav className="flex flex-col items-center p-4 text-white border-white">
                    {items.map((item, index) => (
                        <a href={item.href} key={item.text}
                            className="w-full rounded-full break-words text-center m-2 hover:bg-white hover:text-red-600 
                            focus:bg-white focus:text-red-600 active:bg-white active:text-red-600 transition duration-300">
                            {item.text}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}