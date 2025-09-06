import { useState, useEffect } from "react";
import logoNavbar from "./assets/logo-navbar.png";
import { Menu, X } from "lucide-react";

const menuItems = [
    { text: 'Inicio', href: '#inicio', active: true },
    { text: 'Servicios', href: '#servicios', active: false },
    { text: 'Contacto', href: '#contacto', active: false },
    { text: 'Sobre mi', href: '#sobre-mi', active: false },
];

export default function Nav() {
 
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    // Bloquear scroll en móvil al abrir menú
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    return (
        <nav className="fixed left-0 w-full z-50 bg-amber-50">
            <div className="flex items-center justify-between px-6 md:px-8 lg:px-46 md:py-4 p-0">
                <img src={logoNavbar} alt="logo navbar" className="md:h-12 w-auto h-10" />

                {/* Links desktop: Oculto por defecto, visible desde 'md' hacia arriba */}
                <ul className="hidden md:flex gap-18 font-semibold text-base">
                    {menuItems.map((item) => (
                        <li
                            key={item.text}
                            className={`cursor-pointer transition ${item.active
                                ? "relative text-[#EB7147]"
                                : "text-[#344E41] hover:text-[#EB7147]"
                                }`}
                        >
                            <a href={item.href}>{item.text}</a>
                            {item.active && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#EB7147]"></span>
                            )}
                        </li>
                    ))}
                </ul>

                {/* btn desktop: Oculto por defecto, visible desde 'md' hacia arriba */}
                <button className="hidden md:block bg-[#344E41] text-white rounded-full font-semibold px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-[#3A5A40] hover:scale-105 shadow-md">
                    Contáctame
                </button>

                {/* Hamburguesa movil: Visible por defecto, oculta desde 'md' hacia arriba */}
                <button
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    className="md:hidden p-2 rounded hover:bg-[#e6e0d6] transition relative z-[60]"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Overlay y Menú lateral dependen de 'menuOpen' */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 z-40 md:hidden" // Lo ocultamos en desktop
                    onClick={closeMenu}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#FAF5E9] shadow-lg transform transition-transform z-50 md:hidden ${ // Lo ocultamos en desktop
                    menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center gap-6 mt-20 font-semibold text-lg">
                    {/* 4. Usamos .map() también para los links del menú móvil */}
                    {menuItems.map((item) => (
                        <a
                            key={item.text}
                            href={item.href}
                            className={
                                item.active
                                    ? "text-[#EB7147]"
                                    : "text-[#344E41] hover:text-[#EB7147]"
                            }
                            onClick={closeMenu}
                        >
                            {item.text}
                        </a>
                    ))}

                    <button
                        onClick={closeMenu}
                        className="bg-[#344E41] text-white rounded-full font-semibold px-6 py-2 mt-4 cursor-pointer transition-all duration-300 hover:bg-[#3A5A40] hover:scale-105 shadow-md"
                    >
                        Contáctame
                    </button>
                </div>
            </div>
        </nav>
    );
}