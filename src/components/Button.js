export const PrimaryButton = ({ title, onClick, link, iconRight, fullWidth }) => {
  const widthButton = fullWidth ? 'w-full' : 'lg:w-72 w-full';

  return (
    <button
      onClick={onClick}
      className={`${widthButton} bg-[#BFA880] text-[#ffffff] rounded-md py-3 mt-5 hover:scale-105 transition-all duration-200 ease-in-out`}
    >
      {link ? (
        <a href={link} className="flex items-center text-md justify-center gap-5" rel="noreferrer" target="_blank">
          {title} {iconRight && <span>{iconRight()}</span>}
        </a>
      ) : (
        <span className="flex items-center text-md justify-center gap-5">
          {title} {iconRight && <span>{iconRight()}</span>}
        </span>
      )}
    </button>
  );
};

export const SecondaryButton = ({ title, onClick, link, iconRight, fullWidth }) => {
  const widthButton = fullWidth ? 'w-full' : 'lg:w-72 w-full';

  return (
    <button
      onClick={onClick}
      className={`${widthButton} bg-[#ffffff] text-[#BFA880] border-[#BFA880] rounded-md border py-2 mt-5 hover:scale-105 transition-all duration-200 ease-in-out`}
    >
      {link ? (
        <a href={link} className="flex items-center text-md justify-center gap-5" rel="noreferrer" target="_blank">
          {title} {iconRight && <span>{iconRight()}</span>}
        </a>
      ) : (
        <span className="flex items-center text-md justify-center gap-5">
          {title} {iconRight && <span>{iconRight()}</span>}
        </span>
      )}
    </button>
  );
};
