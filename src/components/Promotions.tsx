import Footer from "./Footer"
import porciento from '../assets/30porciento.jpg'
import cuotas from '../assets/3cuotas.jpg'
import banner from '../assets/banner.jpg'

function Promociones() {
  return (
    <>
    
    <section className="p-12 bg-[#ebebeb]
        text-black">
      <h1 className="
          flex
          justify-center
          text-4xl
          font-bold
          mb-8
          italic
          ">
            NUESTRAS PROMOCIONES</h1>

      {/* MAIN + ASIDE */}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        {/* MAIN */}

        <div className="lg:col-span-3">
          <img
            src={porciento}
            alt="Promoción principal"
            className="
              w-full
              h-[400px]
              object-cover
              rounded-xl
            "
          />
        </div>

        {/* ASIDE */}

        <div>
          <img
            src={cuotas}
            alt="Promoción secundaria"
            className="
              w-full
              h-[400px]
              object-cover
              rounded-xl
            "
          />
        </div>

      </div>

      {/* BANNER */}

      <div className="mt-4">
        <img
          src={banner}
          alt="Banner"
          className="
            w-full
            h-[180px]
            object-cover
            rounded-xl
          "
        />
      </div>

    </section>
    <Footer />
  </>
  )
}

export default Promociones