import React from "react";

function Services() {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold text-3xl text-red-600 text-center mb-2">
        Nuestros Servicios
      </p>
      <section className="flex flex-wrap justify-center gap-4 p-2">
        <div className="w-64 border rounded-md p-5 flex flex-col gap-2 shadow-lg">
          <p className="font-bold text-xl text-red-600">Cortes de Pelo</p>
          <p>
            Cortes de cabello modernos, realizados por un barbero profesional.
            Trae tu corte deseado y lo hacemos realidad.
          </p>
        </div>
        <div className="w-64 border rounded-md p-5 flex flex-col gap-2 shadow-lg">
          <p className="font-bold text-xl text-red-600">Tintes de Pelo</p>
          <p>
            Aplicacion de tintes de pelo de forma segura, usando los productos
            con la mejor calidad
          </p>
        </div>
        <div className="w-64 border rounded-md p-5 flex flex-col gap-2 shadow-lg">
          <p className="font-bold text-xl text-red-600">Cortes de Barba</p>
          <p>
            Diseños de barba formles para aumentar la personalidad que genera tu
            bello facial
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
