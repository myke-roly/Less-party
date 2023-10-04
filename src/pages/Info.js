import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';

export const Info = () => {
  return (
    <div className="h-screen">
      <picture className="absolute bottom-0 -right-5 z-9 animate-pulse w-32 md:w-72 ">
        <img src="./images/hojas.svg" alt="hojas" />
      </picture>

      <div className="w-full bg-[url('../public/images/lineas.svg')] bg-no-repeat bg-top bg-cover flex self-center items-center justify-center">
        <div className="p-5 md:p-10 pt-8 md:pt-14 rounded-full shadow-lg w-20 h-20 md:w-40 md:h-40 bg-[#ffffff] flex items-center justify-center my-10">
          <GiPartyPopper size={70} color="#81948B" className='animate-bounce' />
        </div>
      </div>

      <div className="flex justify-center items-center md:mt-14 px-4">
        <div>
          <div className="flex md:my-10">
            <p className="text-sm md:text-lg font-youngSerif text-[#81938A]">
              <div className='flex justify-center'><FaQuoteLeft size={25} color="#BFA880" /></div>
              <p className='my-3'>
                He aprendiddo que estar con quienes yo quiero es suficiente para ser feliz.<br />
                Por eso deseo compartir contigo este momento tan especial para mi.<br />
                El tiempo pasara y estas palabras se borraran pero el recuerdo de este día nunca se olvidara.
              </p>
              <div className='flex justify-center'><FaQuoteRight size={25} color='#BFA880' /></div>
            </p>
          </div>

          <div className="w-1/3 h-0.5 bg-[#BFA880] mx-auto my-7 md:my-14"></div>

          <div className='md:mt-14 px-4'>
            <p className="text-[#C6D7CF]">
              Con la bendición de Dios y la presencia de mis padres
              <br />
              <p className="text-xl md:text-2xl text-[#81948B] my-3 md:my-5">Norma y Christian</p>
            </p>
            <p className="text-[#C6D7CF]">
              Y con el apoyo de mis queridos abuelos
              <br />
              <p className="text-xl md:text-2xl text-[#81948B] my-3 md:my-5">Benita, Elena, Humberto</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
