import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa"

function Contact() {

  return (

    <section className="
      bg-zinc-900
      text-white
      py-20
      px-6
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">

        {/* TITULO */}

        <div className="text-center mb-16">

          <h2 className="
            text-4xl
            md:text-5xl
            font-black
            italic
            mb-4
          ">
            CONTACTO
          </h2>

          <p className="
            text-zinc-300
            text-lg
          ">
            Estamos para ayudarte y asesorarte
          </p>

        </div>

        {/* CONTENIDO */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-14
        ">

          {/* INFORMACION */}

          <div className="space-y-8">

            <div className="
              flex
              items-center
              gap-4
            ">

              <FaMapMarkerAlt className="
                text-red-600
                text-3xl
              " />

              <div>
                <h3 className="font-bold text-xl">
                  Dirección
                </h3>

                <p className="text-zinc-300">
                  Av. Principal 123 - Olavarría
                </p>
              </div>

            </div>

            <div className="
              flex
              items-center
              gap-4
            ">

              <FaPhoneAlt className="
                text-red-600
                text-3xl
              " />

              <div>
                <h3 className="font-bold text-xl">
                  Teléfono
                </h3>

                <p className="text-zinc-300">
                  +54 2284 123456
                </p>
              </div>

            </div>

            <div className="
              flex
              items-center
              gap-4
            ">

              <FaEnvelope className="
                text-red-600
                text-3xl
              " />

              <div>
                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-zinc-300">
                  contacto@pintureriadelsur.com
                </p>
              </div>

            </div>

            {/* REDES */}

            <div className="pt-6">

              <h3 className="
                text-2xl
                font-bold
                mb-4
              ">
                Seguinos
              </h3>

              <div className="
                flex
                gap-6
              ">

                <FaWhatsapp className="
                  text-4xl
                  hover:text-green-500
                  transition-colors
                  cursor-pointer
                " />

                <FaInstagram className="
                  text-4xl
                  hover:text-pink-500
                  transition-colors
                  cursor-pointer
                " />

                <FaFacebook className="
                  text-4xl
                  hover:text-blue-500
                  transition-colors
                  cursor-pointer
                " />

              </div>

            </div>

          </div>

          {/* FORMULARIO */}

          <form className="
            bg-zinc-800
            p-8
            rounded-2xl
            shadow-2xl
            space-y-6
          ">

            <div>

              <label className="
                block
                mb-2
                font-semibold
              ">
                Nombre
              </label>

              <input
                type="text"
                className="
                  w-full
                  bg-zinc-700
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-red-600
                "
              />

            </div>

            <div>

              <label className="
                block
                mb-2
                font-semibold
              ">
                Email
              </label>

              <input
                type="email"
                className="
                  w-full
                  bg-zinc-700
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:ring-2
                  focus:ring-red-600
                "
              />

            </div>

            <div>

              <label className="
                block
                mb-2
                font-semibold
              ">
                Mensaje
              </label>

              <textarea
                rows={5}
                className="
                  w-full
                  bg-zinc-700
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  resize-none
                  focus:ring-2
                  focus:ring-red-600
                "
              />

            </div>

            <button className="
              w-full
              bg-red-700
              hover:bg-red-800
              transition-colors
              py-4
              rounded-xl
              font-bold
              text-lg
            ">
              Enviar mensaje
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact