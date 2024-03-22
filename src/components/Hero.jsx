import React from "react";

function Hero() {
  return (
    <div>
      <section className="flex flex-col-reverse md:flex-row md:justify-center items-center">
        <div className="md:border flex flex-col p-14 pt-6 md:pt-14 gap-1 max-w-96 shadow-lg">
          <p className="text-red-600 font-bold text-3xl flex flex-col items-center justify-center">
            Nuestros cortes de pelo revitalizan tu apariencia!
          </p>
          <p>
            Aumenta tu personalidad e impacto visual con los mejores cortes de
            cabello.
          </p>
        </div>
        <div>
          <div className="bg-[#202020] w-[400px] h-[400px] mx-auto rounded-md"></div>
        </div>
      </section>
      <div className="h-25"></div>
    </div>
  );
}

export default Hero;
