import BannerImage from "../../assets/Banner.png";

const Banner = () => {
  return (
    <div
      className="mt-10 bg-cover bg-center h-[400px]  md:h-[500px] lg:h-[600px] rounded-xl"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="text-white flex flex-col justify-center items-center p-4 sm:p-10 md:p-20 lg:p-40">
        <div className="text-center mb-6 px-4 sm:px-12 md:px-24 lg:px-52">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h2>
          <h4 className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-light">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </h4>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn bg-[#0BE58A] text-black rounded-3xl px-6 py-2 sm:px-8 sm:py-3">
            Explore Now
          </button>
          <button className="btn rounded-3xl px-6 py-2 sm:px-8 sm:py-3">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;