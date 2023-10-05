import { FaQuoteLeft, FaQuoteRight, FaHeart } from 'react-icons/fa';
import { Counter } from '../components/Counter';

export const Main = () => {
  return (
    <div className="h-screen flex lg:px-0 px-5">
      <div className="hidden lg:block w-2/5 lg:w-3/5 sm:w-4/5 bg-black">
        <picture className="">
          <img src="./images/fondo1.png" className="w-full h-full object-cover" alt="profile" />
        </picture>
      </div>
      <div className="absolute bottom-0 lg:-bottom-32 left-0 right-0">
        <img src="./images/ondas.svg" className="" alt="onda" />
      </div>

      <div className="absolute bottom-0 left-1/2 w-60 h-60 lg:w-72 lg:h-72 z-10 -translate-x-1/2 bg-[url('../public/images/circuloContador.svg')] bg-no-repeat bg-contain">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <p className="text-center text-[#BFA880] text-1xl">Faltan:</p>
          <Counter />
          <FaHeart className="animate-bounce" color="#81938A" size={35} />
        </div>
      </div>

      <div className="lg:w-3/5 w-full lg:self-center mt-16 lg:mt-0">
        <div className="flex justify-center items-center mb-5">
          <div className="w-10 lg:w-20 h-0.5 bg-[#BFA880]"></div>
          <p className="mx-5 text-2xl text-[#81938A]">28.10.2023</p>
          <div className="w-10 lg:w-20 h-0.5 bg-[#BFA880]"></div>
        </div>

        <div className=''>
          <h1 className="text-9xl text-[#81938A] font-Cookie">Leslie</h1>
          <h2 className="text-5xl my-8 text-[#BFA880] font-Cookie">Mis dulce 16!</h2>
        </div>

        <div className="w-2/3 lg:w-1/3 h-0.5 bg-[#BFA880] mx-auto my-10"></div>

        <div className="flex justify-center">
          <FaQuoteLeft color="#BFA880" />
          <p className="text-1xl mx-5 lg:mx-8 font-youngSerif text-[#81938A]">
            Vení, te esperamos para pasar un momento inolvidable!!
          </p>
          <FaQuoteRight color='#BFA880' />
        </div>
      </div>
    </div>
  );
};
