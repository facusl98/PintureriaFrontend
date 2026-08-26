import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">



      {/* Contenido principal */}
      <div className="
        max-w-7xl
        mx-auto
        px-8
        py-16
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-12
      ">

        {/* Marca */}
        <div>

          <h2 className="
            text-3xl
            font-bold
            text-blue-950
            mb-5
            italic
            tracking-wide
            [text-shadow:0_0_10px_rgba(23,37,84,0.4)]
          ">
            PINTURERÍA DEL SUR
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Pinturas, herramientas y accesorios
            profesionales para renovar tus espacios.
          </p>

          {/* Redes */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/pintureriasdelsursrl" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="text-5xl"/>
            </a>
            <a href="https://www.instagram.com/pinturerias_del_sur/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-5xl"/>
            </a>
            <a href="https://twitter.com/pinturerias_del_sur" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-5xl"/>
            </a>


          </div>

        </div>

        {/* Productos */}
        <div>

          <h3 className="
            text-white
            text-xl
            font-semibold
            mb-5
          ">
            Productos
          </h3>

          <ul className="space-y-4">

            <li className="
              hover:text-red-800
              transition-colors
              cursor-pointer
            ">
              Pintura Interior
            </li>

            <li className="
              hover:text-red-800
              transition-colors
              cursor-pointer
            ">
              Pintura Exterior
            </li>

            <li className="
              hover:text-red-800
              transition-colors
              cursor-pointer
            ">
              Rodillos
            </li>

            <li className="
              hover:text-red-800
              transition-colors
              cursor-pointer
            ">
              Impermeabilizantes
            </li>

            <li className="
              hover:text-red-800
              transition-colors
              cursor-pointer
            ">
              Herramientas
            </li>

          </ul>

        </div>

        {/* Marcas */}
        <div>

          <h3 className="
            text-white
            text-xl
            font-semibold
            mb-5
          ">
            Marcas
          </h3>

          <ul className="space-y-4">

            <li className="hover:text-blue-900 transition-colors cursor-pointer">
              Sinteplast
            </li>

            <li className="hover:text-blue-900 transition-colors cursor-pointer">
              Alba
            </li>

            <li className="hover:text-blue-900 transition-colors cursor-pointer">
              Sherwin Williams
            </li>

            <li className="hover:text-blue-900 transition-colors cursor-pointer">
              Petrilac
            </li>

            <li className="hover:text-blue-900 transition-colors cursor-pointer">
              Plavicon
            </li>

          </ul>

        </div>

        {/* Contacto */}
        <div>

          <h3 className="
            text-white
            text-xl
            font-semibold
            mb-5
          ">
            Contacto
          </h3>

          <div className="space-y-5 text-zinc-400">

            <div>
              <p className="text-zinc-200 font-medium mb-1">
                Dirección
              </p>

              <p>
                Azul, Buenos Aires
              </p>
            </div>

            <div>
              <p className="text-zinc-200 font-medium mb-1">
                Teléfono
              </p>

              <p>
                +54 249 XXX XXXX
              </p>
            </div>

            <div>
              <p className="text-zinc-200 font-medium mb-1">
                Horarios
              </p>

              <p>
                Lun a Vie · 08:00 - 18:00
              </p>

              <p>
                Sáb · 08:00 - 13:00
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Parte inferior */}
      <div className="
        border-t
        border-zinc-900
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-8
          py-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          text-zinc-500
          text-sm
        ">

          <p>
            © 2026 Pintureria Del Sur - Todos los derechos reservados
          </p>

          <div className="flex gap-6">

            <p className="hover:text-red-900 cursor-pointer transition-colors">
              Privacidad
            </p>

            <p className="hover:text-red-900 cursor-pointer transition-colors">
              Términos
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer