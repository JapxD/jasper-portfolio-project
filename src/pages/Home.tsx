import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="flex w-[90%] max-w-[1440px] h-[60%] justify-evenly bg-accents shadow-[10px_10px_8px_rgba(0,0,0,0.25)] inset-shadow-[6px_6px_4px_rgba(250,250,250.8)] rounded-xl overflow-hidden">
      <div className="flex flex-col justify-center items-center grow">
        <div className="flex flex-col gap-3 items-center 2xl:items-start shrink">
          <h2 className="text-headings w-[90%] inline-flex text-3xl 2xl:text-7xl">
            Hi, I’m Jasper
          </h2>
          <h5 className="text-secondary w-[90%] inline-flex text-xl 2xl:text-3xl">
            React Developer
          </h5>
          <p className="text-secondary w-[90%] inline-flex text-sm 2xl:text-l">
            I build responsive and modern web applications using React,
            TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
      <div className="relative flex justify-end shrink overflow-hidden">
        <img
          src={hero}
          className="relative left-60 md:left-20 2xl:left-0 min-w-150 object-contain z-5"
        />
        <svg
          viewBox="0 0 100 100"
          className="text-secondary absolute w-200 h-200 -left-40 md:-left-10 2xl:-left-20 top-30 z-0"
        >
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
