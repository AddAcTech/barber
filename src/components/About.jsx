import React from "react";

function About() {
  return (
    <section className="flex flex-col gap-4 px-20 my-10">
      <div className="md:max-w-[200px] flex flex-col gap-2 mx-auto">
        <p className="font-bold text-3xl text-red-600 text-center">
          Sobre Nosotros
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nihil
          non inventoquod.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="bg-red-600 border-2 border-yellow-300 rounded-full w-40 h-40 text-yellow-300 text-center flex items-center">
          barbero certificado
        </div>
        <div className="bg-red-600 border-2 border-yellow-300 rounded-full w-40 h-40 text-yellow-300 text-center flex items-center">
          Materiales de primera
        </div>
        <div className="bg-red-600 border-2 border-yellow-300 rounded-full w-40 h-40 text-yellow-300 text-center flex items-center">
          La magia del barbero
        </div>
      </div>
    </section>
  );
}

export default About;
