import { useEffect, useState } from "react";
import dish1 from "./assets/dish1.png";
import dish2 from "./assets/dish2.png";
import dish3 from "./assets/dish3.png";
import dish4 from "./assets/dish4.png";
import leaf2 from "./assets/leaf2.png";

const Hero = () => {
  const allPlates = [dish1, dish2, dish3, dish4];
  const [currentCentralDishIndex, setCurrentCentralDishIndex] = useState(0);

  useEffect(() => {
    const dishChangeInterval = setInterval(() => {
      setCurrentCentralDishIndex(
        (prevIndex) => (prevIndex + 1) % allPlates.length
      );
    }, 5000);
    return () => clearInterval(dishChangeInterval);
  }, [allPlates.length]);

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center overflow-hidden  animate-fadeIn">
      {/* Decorative floating leaves */}
      <img src={leaf2} alt="" className="absolute top-1/4 left-5 w-16 md:w-24 opacity-60 animate-float blur-[2px] pointer-events-none" />
      <img src={leaf2} alt="" className="absolute bottom-1/3 right-10 w-16 md:w-24 opacity-40 animate-float blur-[6px] pointer-events-none" />
      <img src={leaf2} alt="" className="absolute top-10 right-1/2 w-20 md:w-32 opacity-60 animate-float blur-[8px] pointer-events-none" />
      <img src={leaf2} alt="" className="absolute bottom-5 left-1/4 w-20 md:w-32 opacity-50 animate-float blur-[2px] pointer-events-none" />
      <img src={leaf2} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 w-16 md:w-24 opacity-55 animate-float blur-[6px] pointer-events-none" />

      {/* SVG Branches */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30" viewBox="0 0 100 100">
        <path d="M-10,30 Q30,10 50,50 T110,70" fill="none" stroke="#b7e4c7" strokeWidth="0.5" />
        <path d="M0,70 Q40,90 70,60 T120,40" fill="none" stroke="#b7e4c7" strokeWidth="0.5" />
        <path d="M20,-10 Q50,20 80,10 T110,0" fill="none" stroke="#b7e4c7" strokeWidth="0.5" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-0 opacity-30 rotate-180" viewBox="0 0 100 100">
        <path d="M-10,30 Q30,10 50,50 T110,70" fill="none" stroke="#b7e4c7" strokeWidth="0.5" />
        <path d="M0,70 Q40,90 70,60 T120,40" fill="none" stroke="#b7e4c7" strokeWidth="0.5" />
      </svg>

      {/* Overlay for subtle effect */}
      <div className="absolute inset-0  pointer-events-none z-0" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 relative z-10 py-15 md:py-0">
        {/* Left Column: Text */}
        <div className="flex-1 text-center md:text-left z-20 animate-slideInLeft">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1C3C31] drop-shadow-lg">
            Dieta Personalizada <br />
            Planes y <br /><span className="bg-gradient-to-r from-[#4e6b61] to-[#1C3C31] bg-clip-text text-transparent">Consejos Nutricionales</span>
          </h1>
          <div className="lg:w-[480px] xl:w-[720px] h-[2px] bg-gradient-to-r from-[#344E41] to-[#2f4d3c] my-6 mx-auto md:mx-0 rounded-full shadow-md"></div>
          <p className="font-inter text-[#344E41] md:text-lg max-w-prose mb-8 mx-auto md:mx-0">
            Asesorías nutricionales y entrenamiento personalizados para que alcances tu mejor versión.
          </p>
          <button className="bg-[#344E41] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-[#3A5A40] hover:scale-105 transition-all duration-300 text-lg tracking-wide " onClick={() => {
            const section = document.querySelector("#contacto");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            Empieza Ahora
          </button>
        </div>

        {/* Right Column: Plates */}
        <div className="flex-1 flex items-center justify-center mt-12 md:mt-0 relative z-20 animate-slideInRight">
          <div className="
            relative
            w-[220px] h-[220px]
            sm:w-[280px] sm:h-[280px]
            md:w-[340px] md:h-[340px]
            lg:w-[400px] lg:h-[400px]
            transition-all duration-300
          ">
            {/* Decorative Circles */}
            <div className="absolute inset-0 border-2 border-dashed border-[#b7e4c7] rounded-full " />
            <div className="absolute inset-0 border border-dashed border-[#95d5b2] rounded-full opacity-40 scale-110" />

            {/* Central Plate */}
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 md:p-12">
              {allPlates.map((plato, index) => (
                <img
                  key={`central-${index}`}
                  src={plato}
                  alt={`Plato central ${index + 1}`}
                  className={`absolute w-full h-full object-contain drop-shadow-2xl transition-all duration-1000 ease-in-out
                    ${index === currentCentralDishIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
                  style={{ filter: index === currentCentralDishIndex ? "drop-shadow(0 8px 12px #b7e4c7aa)" : undefined }}
                />
              ))}
            </div>

            {/* Side Plates (corners, smaller on mobile) */}
            <div className="absolute -top-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group">
              <img src={allPlates[0]} alt="Plato superior izquierda" className="w-full h-full object-contain rounded-full shadow-md bg-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg" />
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group">
              <img src={allPlates[1]} alt="Plato superior derecha" className="w-full h-full object-contain rounded-full shadow-md bg-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group">
              <img src={allPlates[2]} alt="Plato inferior izquierda" className="w-full h-full object-contain rounded-full shadow-md bg-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group">
              <img src={allPlates[3]} alt="Plato inferior derecha" className="w-full h-full object-contain rounded-full shadow-md bg-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;