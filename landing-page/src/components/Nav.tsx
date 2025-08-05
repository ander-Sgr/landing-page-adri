
export default function Nav() {
    return (
        <div className=" flex justify-between">
            <h1 className=" text-[#344E41] font-bold text-3xl">LOGO</h1>
            <ul className=" flex gap-20 items-center">
                <li className=" text-[#344E41] cursor-pointer border-b-2 border-transparent hover:border-[#3A5A40] px-5 transition font-semibold">Inicio</li>
                <li className=" text-[#344E41] cursor-pointer border-b-2 border-transparent hover:border-[#3A5A40] px-5 transition font-semibold">Servicios</li>
                <li className=" text-[#344E41] cursor-pointer border-b-2 border-transparent hover:border-[#3A5A40] px-5 transition font-semibold">Contacto</li>
                <li className=" text-[#344E41] cursor-pointer border-b-2 border-transparent hover:border-[#3A5A40] px-5 transition font-semibold">Sobre mi</li>
            </ul>
            <button className=" bg-[#344E41] text-white rounded-2xl font-semibold px-5 cursor-pointer transition-all duration-300 ease-in-out
             hover:bg-[#3A5A40] hover:scale-105 hover:shadow-lg">Reservar Asesoría</button>
        </div>
    )
}
