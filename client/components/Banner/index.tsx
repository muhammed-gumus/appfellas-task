import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src="/images/banner.png"
        alt="Banner image"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Flight</h1>
        <p className="text-xl mb-8">Discover amazing destinations around the world</p>
        <button className="bg-purple-800 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
