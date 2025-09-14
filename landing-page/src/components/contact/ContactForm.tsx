import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { PhoneIcon, MailIcon, MapIcon } from "lucide-react";

export default function ContactForm() {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_ID= import.meta.env.VITE_PUBLIC_ID;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_ID,
            }).then(
                (result) => {
                    console.log("Correo enviado ✅", result.text);
                    alert("Tu mensaje ha sido enviado con éxito 🚀");
                    setFormData({ name: "", email: "", subject: "", message: "" });
                },
                (error) => {
                    console.error("Error ❌", error.text);
                    alert("Hubo un problema al enviar el mensaje. Intenta más tarde.");
                }
            );
    };

    return (
        <section id="contacto" className="relative px-4 py-16 md:py-24 bg-gradient-to-br from-brand-bg via-white to-brand-bg overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Contenedor principal que une ambos paneles */}
                <div className="bg-white shadow-2xl rounded-2xl md:flex overflow-hidden">

                    {/* === Columna Izquierda - Información de Contacto (Panel Verde) === */}
                    <div className="w-full md:w-2/5 bg-gradient-to-br from-[#1C3C31] to-[#2D4A3F] text-white p-10 md:p-14 relative overflow-hidden animate-slideInLeft rounded-2xl md:rounded-l-2xl md:rounded-r-none">
                        <div className="z-10 relative">
                            {/* Título */}
                            <h2 className="font-playfair text-3xl font-bold mb-3">
                                Información de Contacto
                            </h2>
                            <p className="font-inter text-gray-300 mb-8">
                                Estoy aquí para ayudarte. Contáctame por cualquiera de los siguientes medios:
                            </p>
                            <div className="lg:w-[320px] xl:w-[320px] h-[2px] bg-gradient-to-r from-[#EB7147] to-[#EB7147] my-6 mx-auto md:mx-0 rounded-full shadow-md"></div>
                            {/* Detalles de contacto con iconos */}
                            <div className="space-y-6 ">
                                <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-green-50 hover:scale-105">
                                    <div className="flex items-center justify-center w-10 h-10 bg-[#1C3C31] text-white rounded-full shadow-md">
                                        <PhoneIcon size={20} />
                                    </div>
                                    <a
                                        href="https://wa.me/34678878899"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-inter font-medium text-lg text-brand-dark hover:text-green-600 transition-colors"
                                    >
                                        +34 697 90 62 55
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105">
                                    <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-md">
                                        <MailIcon size={20} />
                                    </div>
                                    <a
                                        href="mailto:contacto@nutricion.com"
                                        className="font-inter font-medium text-lg text-brand-dark hover:text-blue-600 transition-colors"
                                    >
                                        contacto@nutricion.com
                                    </a>
                                </div>

                                {/* Ubicación */}
                                <div className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50 hover:scale-105">
                                    <div className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full shadow-md">
                                        <MapIcon size={20} />
                                    </div>
                                    <span className="font-inter font-medium text-lg text-brand-dark">
                                        Barcelona, Barcelona
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Círculo decorativo en la esquina inferior */}
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 md:w-56 md:h-56 border-4 border-orange-500/20 rounded-full opacity-30 hidden md:block"></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 md:w-40 md:h-40 border-2 border-orange-500/20 rounded-full opacity-20 hidden md:block"></div>                    </div>

                    {/* === Columna Derecha - Formulario === */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 animate-slideInRight">
                        <h2 className="text-3xl md:text-4xl font-extrabold font-playfair text-[#1C3C31] mb-3">
                            Ponte en Contacto
                        </h2>
                        <p className="text-[#1C3C31] mb-10">
                            Completa el formulario y te responderemos lo antes posible.
                        </p>

                        <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                            {/* Nombre y Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full border-b-2 border-gray-300 px-1 py-2"
                                        placeholder=" "
                                    />
                                    <label htmlFor="name" className="absolute left-1 -top-5 text-sm text-gray-500">
                                        Tu Nombre
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full border-b-2 border-gray-300 px-1 py-2"
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className="absolute left-1 -top-5 text-sm text-gray-500">
                                        Tu Correo
                                    </label>
                                </div>
                            </div>

                            {/* Asunto */}
                            <div className="relative mt-6">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full border-b-2 border-gray-300 px-1 py-2"
                                    placeholder=" "
                                />
                                <label htmlFor="subject" className="absolute left-1 -top-5 text-sm text-gray-500">
                                    Asunto
                                </label>
                            </div>

                            {/* Mensaje */}
                            <div className="relative mt-6">
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full border-b-2 border-gray-300 px-1 py-2"
                                    placeholder=" "
                                />
                                <label htmlFor="message" className="absolute left-1 -top-5 text-sm text-gray-500">
                                    Escribe aquí tu mensaje...
                                </label>
                            </div>

                            {/* Botón */}
                            <div className="text-left">
                                <button
                                    type="submit"
                                    className="bg-[#344E41] hover:bg-[#3A5A40] text-white py-3 px-8 rounded-full shadow-md transition"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}