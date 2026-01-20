import hero from "../assets/hero.png";

const Home = () => {
  return (
    <div className="flex w-[70%] h-[100%] bg-accents shadow-[10px_10px_8px_rgba(0,0,0,0.25)] inset-shadow-[6px_6px_4px_rgba(250,250,250.8)] rounded-xl p-5 overflow-hidden">
      <div className="flex flex-column grow items-center justify-center">
        <h2 className="text-headings">Hi, I’m Jasper</h2>
      </div>
      <div className="relative flex flex-column grow items-center justify-center">
        <img src={hero} className="w-150 min-w-160 relative left-40 top-8" />
      </div>
    </div>
  );
};

export default Home;
