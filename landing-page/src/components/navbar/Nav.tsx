import { useState, useEffect } from "react";
import logoNavbar from "./assets/logo-navbar.png";
import { Menu, X } from "lucide-react";

const menuItemsData = [
    { text: "Inicio", href: "#inicio" },
    { text: "Servicios", href: "#servicios" },
    { text: "Contacto", href: "#contacto" },
    { text: "Sobre mi", href: "#sobre-mi" },
];

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Inicio");

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    // Bloquear scroll en móvil al abrir menú
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);

    // Scroll suave y actualización del link activo
    useEffect(() => {
        const handleScroll = () => {
            const middle = window.scrollY + window.innerHeight / 2;

            let currentSection = activeSection; // default
            menuItemsData.forEach((item) => {
                const section = document.querySelector(item.href);
                if (section) {
                    if (middle >= section.offsetTop && middle < section.offsetTop + section.offsetHeight) {
                        currentSection = item.text;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (text, href) => {
        setActiveSection(text);
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        closeMenu();
    };

    return (
        <nav className="fixed left-0 w-full z-50 bg-amber-50">
            <div className="flex items-center justify-between px-6 md:px-8 lg:px-46 md:py-4 p-0">
                <img src={logoNavbar} alt="logo navbar" className="md:h-12 w-auto h-10" />

                {/* Links desktop */}
                <ul className="hidden md:flex gap-18 font-semibold text-base">
                    {menuItemsData.map((item) => (
                        <li
                            key={item.text}
                            className={`cursor-pointer transition ${activeSection === item.text
                                ? "relative text-[#EB7147]"
                                : "text-[#344E41] hover:text-[#EB7147]"
                                }`}
                        >
                            <a onClick={() => handleClick(item.text, item.href)}>{item.text}</a>
                            {activeSection === item.text && (
                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#EB7147]"></span>
                            )}
                        </li>
                    ))}
                </ul>

                {/* btn desktop */}
                <button
                    className="hidden md:block bg-[#344E41] text-white rounded-full font-semibold px-6 py-2 cursor-pointer transition-all duration-300 hover:bg-[#3A5A40] hover:scale-105 shadow-md"
                    onClick={() => {
                        const section = document.querySelector("#contacto");
                        if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                >
                    Contáctame
                </button>

                {/* Hamburguesa movil */}
                <button
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    className="md:hidden p-2 rounded hover:bg-[#e6e0d6] transition relative z-[60]"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
                    onClick={closeMenu}
                ></div>
            )}

            {/* Menu lateral */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#FAF5E9] shadow-lg transform transition-transform z-50 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center gap-6 mt-20 font-semibold text-lg">
                    {menuItemsData.map((item) => (
                        <a
                            key={item.text}
                            className={`cursor-pointer transition ${activeSection === item.text
                                ? "text-[#EB7147]"
                                : "text-[#344E41] hover:text-[#EB7147]"
                                }`}
                            onClick={() => handleClick(item.text, item.href)}
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
