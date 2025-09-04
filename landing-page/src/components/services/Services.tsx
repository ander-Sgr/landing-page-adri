export const Services = () => {
    const serviceItems = [
        {
            title: "Plan de Alimentación",
            text: "Diseño de menús equilibrados adaptados a tus necesidades.",
            img: "https://picsum.photos/300/200?random=1",
        },
        {
            title: "Control de Peso",
            text: "Seguimiento personalizado para alcanzar y mantener tu peso ideal.",
            img: "https://picsum.photos/300/200?random=2",
        },
        {
            title: "Educación Nutricional",
            text: "Aprende a tomar mejores decisiones alimenticias día a día.",
            img: "https://picsum.photos/300/200?random=3",
        },
    ];

    return (
        <section className="p-6">
            <div className="text-center mb-8">
                <h2 className="text-lg font-semibold">Servicios</h2>
                <h1 className="text-2xl font-bold">El Apoyo Esencial de un Nutricionista</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                {serviceItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex-1 rounded-2xl shadow-md overflow-hidden"
                    >
                        <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
