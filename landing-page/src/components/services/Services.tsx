import apple from "./assets/service-apple.png"
import diagram from "./assets/service-diagram.png"
import headphones from "./assets/service-headphones.png"

export const Services = () => {
    const serviceItems = [
        {
            title: "Plan de Alimentación",
            text: "El asesoramiento nutricional ofrece orientación personalizada para ayudarle a elegir alimentos más saludables, crear hábitos sostenibles y alcanzar sus objetivos de bienestar.",
            img: apple,
        },
        {
            title: "Control de Peso",
            text: "Programas enfocados en la pérdida o el mantenimiento sostenible del peso a través de una alimentación equilibrada y ejercicio físico.",
            img: diagram,
        },
        {
            title: "Educación Nutricional",
            text: "Impulsa tu rendimiento con planes de nutrición deportiva personalizados, diseñados para satisfacer",
            img: headphones,
        },
    ];

    return (
        <section className="pt-6 md:p-6 bg-gradient-to-br from-[#FAF5E9] via-[#FAF5E9] to-[#ffffff] animate-fadeIn">
            <div className="text-center mb-12">
                <h2 className="text-xl md:text-3xl font-semibold text-orange-500 font-playfair mb-4">
                    Servicios
                </h2>
                <h1 className="font-playfair md:text-3xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1C3C31] drop-shadow-lg max-w-3xl mx-auto">
                    El Apoyo Esencial de un <br /> Nutricionista
                </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {serviceItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex-1 flex flex-col items-center text-center"
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="md:h-32 h-15 mx-auto"
                        />
                        <div className="p-6">
                            <h3 className="font-playfair text-2xl sm:text-3xl font-extrabold text-[#1C3C31] drop-shadow-lg mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[#344E41] md:max-w-md md:mx-auto text-sm md:text-base">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};
