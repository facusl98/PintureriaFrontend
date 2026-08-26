import './Hero.css'
import heroBg from '../assets/bg_hero.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className="
  relative
  py-32
  text-center
  border-t
  border-black
  overflow-hidden
">

  {/* FONDO */}

  <div
    className="
      absolute
      inset-0
      bg-cover
      bg-center
    "
    style={{
      backgroundImage: `url(${heroBg})`,
    }}
  />

  {/* OVERLAY + BLUR */}

  <div className="
    absolute
    inset-0
    bg-black/40
    backdrop-blur-[2px]
  " />

  {/* CONTENIDO */}

  <div className="
    relative
    z-10
    text-white
  ">

    <h1 className="
      text-6xl
      font-bold
      mb-6
      text-shadow-blue
      italic
    ">
      TODO PARA PINTAR TU HOGAR
    </h1>

    <p className="
      text-xl
      mb-8
      italic
      text-shadow-blue
    ">
      PINTURAS Y HERRAMIENTAS PROFESIONALES
    </p>

    <button className=" bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors ">
       <Link to="/promociones" className="hover:text-red-700 transition-colors" >
       VER PROMOCIONES </Link> </button>
  </div>

</section>
  )
}

export default Hero