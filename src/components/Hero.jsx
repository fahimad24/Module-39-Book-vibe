import { useContext } from "react";
import { ContextApi } from "../provider/contextApi";

const Hero = () => {
  const { books } = useContext(ContextApi);
  return (
    <section className=" flex  p-20 px-26 items-center bg-neutral-100 rounded-2xl">
      <div className="flex-1">
        <h1 className="text-6xl leading-24 font-bold mb-16 playfair">
          Books to freshen up your bookshelf
        </h1>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded">
          Explore Books
        </button>
      </div>
      <div className="flex-1 flex justify-end items-center py-12">
        <img src={books[0]?.image} alt={books[0]?.title} />
      </div>
    </section>
  );
};

export default Hero;
