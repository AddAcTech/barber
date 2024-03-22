import React from "react";

function WhyUs() {
  return (
    <div>
      <section className="flex flex-col md:flex-row md:justify-center md:items-center mt-4">
        <div>
          <div className="bg-[#202020] w-[400px] h-[400px] mx-auto rounded-md"></div>
        </div>
        <div className="flex flex-col p-14 pt-6 md:pt-14 gap-1 max-w-96 self-center md:self-start">
          <p className="text-red-600 font-bold text-3xl text-center md:text-start">
            Porque escogernos
          </p>
          <div className="flex flex-col gap-4">
            <div className="border p-2 rounded-md">
              <div className="bg-red-600 border-2 border-yellow-300 rounded-full w-10 h-10 text-yellow-300 text-center flex items-center"></div>
              <p className="text-red-600 font-bold text-xl">Causa 1</p>
              <p>texto pequeño para ocupar el espacio normal</p>
            </div>
            <div className="border p-2 rounded-md">
              <div className="bg-red-600 border-2 border-yellow-300 rounded-full w-10 h-10 text-yellow-300 text-center flex items-center"></div>
              <p className="text-red-600 font-bold text-xl">Causa 1</p>
              <p>
                amabilidad siempre a la orden del dia, ademas de tener
                instalaciones minimalistas y musica
              </p>
            </div>
            <div className="border p-2 rounded-md">
              <div className="bg-red-600 border-2 border-yellow-300 rounded-full w-10 h-10 text-yellow-300 text-center flex items-center"></div>
              <p className="text-red-600 font-bold text-xl">Causa 1</p>
              <p>Texto semi largo para la terera causa de elegirnos</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyUs;
