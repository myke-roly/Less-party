import React, { useState, useEffect } from 'react';

export function Counter() {
  const fechaObjetivo = new Date('2023-10-28T21:00:00').getTime();

  const [cuentaRegresiva, setCuentaRegresiva] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaObjetivo - ahora;

      if (diferencia <= 0) {
        clearInterval(intervalo);
        setCuentaRegresiva({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      } else {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        setCuentaRegresiva({ dias, horas, minutos, segundos });
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <ul className="flex justify-evenly items-center gap-5 my-4">
      <li className="text-[#868686] text-3xl lg:text-4xl">
        {cuentaRegresiva.dias} <p className="text-sm">días</p>
      </li>
      <li className="text-[#868686] text-3xl lg:text-4xl">
        {cuentaRegresiva.horas} <p className="text-sm">horas</p>
      </li>
      <li className="text-[#868686] text-3xl lg:text-4xl">
        {cuentaRegresiva.minutos} <p className="text-sm">min</p>
      </li>
      <li className="text-[#868686] text-3xl lg:text-4xl">
        {cuentaRegresiva.segundos} <p className="text-sm">seg</p>
      </li>
    </ul>
  );
}
