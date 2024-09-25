import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const bannerImageProps = {
    src: "/images/banner.png",
    alt: "Luxury Aircraft",
    objectFit: "cover",
    className: "rounded-full shadow-lg w-full h-full",
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-black w-full px-4 md:px-24 mt-8 md:mt-24">
      <div className="md:hidden w-full max-w-[300px] h-[200px] mb-8">
        <Image
          {...bannerImageProps}
          width={300}
          height={200}
        />
      </div>
      <div className="flex flex-col space-y-4 max-w-xl text-center md:text-left">
        <h1 className="flex flex-col gap-1 text-2xl md:text-5xl font-extrabold">
          It's Time to Fly with{" "}
          <span className="bg-gradient-to-r from-purple-800 to-purple-400 text-transparent bg-clip-text">
            PLANE SCAPE
          </span>
        </h1>
        <p className="text-sm md:text-lg opacity-80">
          Ready to take off with the plane of your dreams? Click the button
          below to explore the best aircraft and start planning your perfect
          flight!
        </p>
        <div className="flex justify-center md:justify-start">
          <Link href="/FlightsPage">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-purple-700 hover:text-white transition duration-300 w-fit shadow-md">
              Let's Fly
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block w-[500px] h-[350px]">
        <Image
          {...bannerImageProps}
          width={500}
          height={350}
        />
      </div>
    </div>
  );
};

export default Banner;
