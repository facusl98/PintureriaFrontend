import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Brands from '../components/Brands'
import Envio from "../components/Envios"

function Home() {
  return (
    <>
    <Navbar />
    <div className="h-[35px] bg-blue-900">
      <ul className="  flex -1
        pt-2
        font-bold
        justify-evenly
        items-center
        text-white
        ">
        <li>PINTURERÍA</li>
        <li>DECORACIÓN</li>
      </ul>
    </div>
    <div className="h-[1px] bg-white"></div>
    <div className="h-[35px] bg-red-700"></div>
    <Hero />
    <Envio />
    <Brands />
    <Footer />
    </>
  )
}

export default Home