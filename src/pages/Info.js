import { GiPartyPopper } from 'react-icons/gi';

export const Info = () => {
  return (
    <div className="h-screen bg-[#F9F7F2]">
      <div className="w-auto h-200 bg-[url('../public/images/lineas.svg')] bg-no-repeat bg-top flex self-center items-center justify-center">
        <div>
          <picture className="absolute bottom-0 -right-5 z-9 animate-pulse">
            <img src="./images/hojas.svg" alt="hojas" />
          </picture>

          <div className="p-10 rounded-full shadow-lg w-40 h-40 bg-[#ffffff] flex items-center justify-center mt-10">
            <GiPartyPopper size={70} color="#81948B" />
          </div>

          <div className="flex">
            <div>
              <h1 className="text-3xl font-bold underline"></h1>
            </div>
            <div>
              <h1 className="text-3xl font-bold underline">
                Hello world!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
