import { GiLargeDress, GiBowTie } from 'react-icons/gi';
import { FaMusic, FaGift, FaQuoteLeft, FaQuoteRight, FaArrowCircleRight } from 'react-icons/fa';
import { SecondaryButton } from '../components/Button';
import { useState } from 'react';
import { Modal } from '../components/Modal';
import { Divider } from '../components/Divider';

export const Notes = () => {
  const [dressModal, setDressModal] = useState(false);
  const [musicModal, setMusicModal] = useState(false);

  return (
    <div className="h-screen relative">
      <div className="w-full bg-[url('../public/images/lineas.svg')] bg-no-repeat bg-top bg-cover flex self-center items-center justify-center scale-x-[-1]">
        <div className="p-5 md:p-10 pt-8 md:pt-14 rounded-full shadow-lg w-20 h-20 md:w-40 md:h-40 bg-[#ffffff] flex items-center justify-center my-10 scale-x-[-1]">
          <FaGift size={70} color="#81948B" className="animate-bounce" />
        </div>
      </div>

      <Modal isOpen={dressModal} onClose={() => setDressModal(false)} title="DRESS CODE">
        <div className="flex justify-center">
          <picture className="w-40 h-40 my-5">
            <img src="./images/elegante-sport.jpeg" alt="elegate sport" className="rounded-sm" />
          </picture>
        </div>
        <p className="text-[#81948B] text-sm">
          Estás invitado a nuestra fiesta especial! Para darle un toque único y relajado, te pedimos que te vistas de
          manera "ELEGANTE SPORT"
        </p>
      </Modal>

      <Modal isOpen={musicModal} onClose={() => setMusicModal(false)} title="Agrega tu canción favorita">
        <div className='lg:mt-10'>
          <iframe
            title="spotify playlist"
            src="https://open.spotify.com/embed/playlist/3yhRHPNS5l3OGvlW4X2FBG?utm_source=generator"
            width="100%"
            height="152"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-[#81948B] text-sm my-2">
          Unite y agrega esa canción que no puede faltar en la PlayList de la fiesta...
        </p>
        <SecondaryButton
          fullWidth
          title="Agregar"
          link="https://spotify.link/hTaxkBVGDDb"
          iconRight={() => <FaArrowCircleRight />}
        />
      </Modal>

      <div className="lg:mt-10 lg:mb-16">
        <h2 className="[#BFA880] text-lg lg:text-2xl text-[#81948B]">Regalos</h2>
        <div className="flex justify-center mx-2 lg:my-10">
          <FaQuoteLeft size={10} color="#BFA880" />
          <p className="text-sm lg:mx-5 my-1 text-[#C6D7CF]">
            Tu compañía es un regalo en sí misma, pero si deseas traer algún obsequio, será recibido con amor y
            gratitud.
          </p>
          <FaQuoteRight size={10} color="#BFA880" />
        </div>
      </div>

      <Divider />

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
          <SecondaryButton onClick={() => setMusicModal(true)} title="Sugerir canción" fullWidth />
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
          <SecondaryButton onClick={() => setDressModal(true)} title="Ver más" fullWidth />
        </li>
      </ul>
    </div>
  );
};
