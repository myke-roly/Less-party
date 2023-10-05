import { FaArrowCircleRight } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import { Divider } from '../components/Divider';
export const Detail = () => {
  const handleOpenCalendarClick = () => { };

  return (
    <div className="h-screen">
      <picture className="absolute -bottom-10 -left-5 z-9 animate-pulse w-32 md:w-72 rotate-180">
        <img src="./images/hojas.svg" alt="hojas" />
      </picture>

      <div className="w-full bg-[url('../public/images/lineas.svg')] bg-no-repeat bg-top bg-cover flex self-center items-center justify-center">
        <div className="p-5 md:p-10 pt-8 md:pt-14 rounded-full shadow-lg w-20 h-20 md:w-40 md:h-40 bg-[#ffffff] flex items-center justify-center my-10">
          <GiCakeSlice size={70} color="#81948B" className="animate-bounce" />
        </div>
      </div>

      <div className="lg:px-0 px-5">
        <div className="lg:w-96 m-auto">
          <h2 className="text-[#81948B] text-5xl lg:text-8xl font-Cookie">Fiesta</h2>
        </div>

        <div className="my-5 lg:my-10 lg:flex justify-center items-center">
          <div className="lg:w-1/3">
            <p className="text-[#C6D7CF] text-2xl lg:text-3xl">Día</p>
            <p className="text-[#81948B] text-xl lg:text-1xl lg:my-5 mb-5">Sábado 28 de Octubre - 21hs</p>
            {/* <SecondaryButton title="Agendar" onClick={handleOpenCalendarClick} /> */}
          </div>

          <div className="hidden lg:block m-auto w-40 h-0.5 lg:w-0.5 lg:h-60 bg-[#BFA880] my-8 lg:mx-20 opacity-50"></div>
          <Divider className='lg:hidden' />

          <div className="lg:w-1/3">
            <p className="text-[#C6D7CF] text-2xl lg:text-3xl">Lugar</p>
            <p className="text-[#81948B] text-xl lg:text-1xl lg:my-5 mb-5">Jorge Luis Borges 3271, Libertad</p>
            <SecondaryButton
              title="Como llegar"
              link="https://www.google.com/maps/dir//Jorge+Luis+Borges+3271,+B1716+Libertad,+Provincia+de+Buenos+Aires/@-34.7088928,-58.6623178,15z/data=!4m18!1m8!3m7!1s0x95bcc13528da6967:0x4735874852e43f6b!2sJorge+Luis+Borges+3271,+B1716+Libertad,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.7109641!4d-58.6463953!16s%2Fg%2F11lt6lqy7q!4m8!1m0!1m5!1m1!1s0x95bcc13528da6967:0x4735874852e43f6b!2m2!1d-58.6463953!2d-34.7109641!3e3?entry=ttu"
              onClick={handleOpenCalendarClick}
            />
          </div>
        </div>

        <Divider className='lg:hidden' />

        <PrimaryButton
          title="Confirmar asistencia"
          iconRight={() => <FaArrowCircleRight color="#ffffff" />}
          link="https://api.whatsapp.com/send?phone=5491125019374&text=Hola Les! confirmo mi asistencia. Soy: *"
        />
      </div>
    </div>
  );
};
