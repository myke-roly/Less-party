import { GiLargeDress, GiBowTie } from 'react-icons/gi';
import { FaMusic, FaGift, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { SecondaryButton } from '../components/Button';

export const Notes = () => {
  return (
    <div className="h-screen">
      <div className="w-full bg-[url('../public/images/lineas.svg')] bg-no-repeat bg-top bg-cover flex self-center items-center justify-center scale-x-[-1]">
        <div className="p-5 md:p-10 pt-8 md:pt-14 rounded-full shadow-lg w-20 h-20 md:w-40 md:h-40 bg-[#ffffff] flex items-center justify-center my-10 scale-x-[-1]">
          <FaGift size={70} color="#81948B" className="animate-bounce" />
        </div>
      </div>

      <div className="lg:mt-10 lg:mb-16">
        <h2 className="[#BFA880] text-lg lg:text-2xl text-[#81948B]">Regalos</h2>
        <div className="flex justify-center mx-2 lg:my-10">
          <FaQuoteLeft size={10} color="#BFA880" />
          <p className="text-sm lg:mx-5 my-2 text-[#C6D7CF]">
            Tu compañía es un regalo en sí misma, pero si deseas traer algún obsequio, será recibido con amor y
            gratitud.
          </p>
          <FaQuoteRight size={10} color="#BFA880" />
        </div>
      </div>

      <div className="w-1/3 h-0.5 bg-[#BFA88055] mx-auto my-5 md:my-14"></div>

      <ul className="px-3 flex lg:flex-row flex-col items-center justify-center gap-5 lg:gap-10 lg:w-2/3 m-auto relative">
        <picture className="absolute -top-20 left-0 animate-pulse md:left-20 -z-1 w-20 lg:w-32">
          <img src="./images/hojas.svg" alt="hojas" />
        </picture>

        <li className="w-full sm:w-1/2 lg:w-1/3 text-center bg-[#ffffff] py-2 lg:py-10 px-4 rounded-md relative shadow-md">
          <div className="lg:block flex justify-center gap-2 items-center my-2 lg:my-0">
            <h3 className="text-[#BFA880] text-lg lg:text-2xl">Música</h3>
            <div className="flex justify-center lg:my-5 w-10 lg:w-full">
              <FaMusic size={40} color="#81948B" className="rotate-45" />
              <FaMusic size={40} color="#81948B" />
            </div>
          </div>
          <p className="text-[#81948B] text-sm">Cúal es la canción que no puede faltar en la PlayList de la fiesta?</p>
          <SecondaryButton title="Sugerir canción" fullWidth />
        </li>

        <li className="w-full sm:w-1/2 lg:w-1/3 text-center bg-[#ffffff] py-2 lg:py-10 px-4 rounded-md relative shadow-md">
          <div className="lg:block flex justify-center gap-2 items-center my-2 lg:my-0">
            <h3 className="text-[#BFA880] text-lg lg:text-2xl">Dress Code</h3>
            <div className="flex justify-center lg:my-5 w-10 lg:w-full">
              <GiBowTie size={40} color="#81948B" className="rotate-45" />
              <GiLargeDress size={40} color="#81948B" />
            </div>
          </div>
          <p className="text-[#81948B] text-sm">Acá te dejamos algunas sugerencias de vestuario.</p>
          <SecondaryButton title="Ver más" fullWidth />
        </li>
      </ul>
    </div>
  );
};
