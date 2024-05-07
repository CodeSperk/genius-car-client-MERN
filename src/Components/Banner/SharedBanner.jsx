/* eslint-disable react/prop-types */
const SharedBanner = ({img, title, navigationLinks}) => {
  return (
    <header className="h-80 relative">
        
    <img
      className="object-cover object-center dark:bg-gray-500 w-full h-full aspect-square rounded-xl"
      src={img}
      alt="Image"
    />
    <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] flex items-center p-10 md:p-20 rounded-xl">
      <h1 className="text-white">{title}</h1>
    </div>
    <div className="absolute bottom-0 bg-[var(--clr-accent)] w-fit left-1/2 -translate-x-1/2 text-white py-3 px-8 rounded-t-md font-medium">
      {navigationLinks}
    </div>

  </header>
  );
};

export default SharedBanner;