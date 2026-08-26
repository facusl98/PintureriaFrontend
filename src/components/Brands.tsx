import { useState } from "react";
import { brands } from "../data/Brands";

function Brands() {
  const [showAll, setShowAll] = useState(false);

  const brandsToShow = showAll ? brands : brands.slice(0, 10);

  return (
    <section
      className="
        bg-white
        text-black
        py-10
        px-8
      "
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
            flex
            justify-center
            text-4xl
            font-bold
            italic
            mb-12
          "
        >
          NUESTRAS MARCAS
        </h2>

        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            ${showAll ? "max-h-[2000px]" : "max-h-[500px]"}
          `}
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-12
              justify-items-center
              items-center
            "
          >
            {brandsToShow.map((brand) => (
              <img
                key={brand.id}
                src={brand.logo}
                alt={brand.nombre}
                className="
                  h-28
                  md:h-20
                  w-auto
                  object-contain
                "
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              bg-blue-900
              text-white
              px-8
              py-3
              rounded-lg
              hover:bg-blue-800
              transition-colors
              font-semibold
            "
          >
            {showAll ? "Ver menos" : "Ver todas las marcas"}
          </button>
        </div>

      </div>
    </section>
  );
}

export default Brands;