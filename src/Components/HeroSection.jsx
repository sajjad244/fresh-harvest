import vegetable from "../../src/assets/vegetable.jpg";
import banner from "../../src/assets/bannerGirl.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-8 pt-24 lg:pt-32 pb-24 lg:pb-32 relative z-10">
        {/* Left Text Content */}
        <div className="flex-1 space-y-6 text-left">
          <p className="text-sm md:text-base text-green-700 bg-green-200 inline-block p-1 font-medium">
            Welcome to Fresh Harvest
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Fresh Fruits <br className="hidden md:block" /> and Vegetables
          </h1>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables.
          </p>

          <button className="btn bg-orange-500 text-white hover:bg-orange-600">
            Shop Now
          </button>

          {/* Offer Card */}
          <div className="mt-6 flex items-center gap-3 p-3 rounded-md shadow bg-white w-fit">
            <img
              src={vegetable}
              alt="Salad"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="space-y-0.5">
              <p className="text-xs text-green-500 font-semibold">
                Special Offer
              </p>
              <h4 className="text-sm font-semibold">Fresh Salad</h4>
              <p className="text-xs">
                Up to <span className="text-green-600 font-bold">70% off</span>
              </p>
              <p className="text-[10px] mt-1 px-2 py-0.5 bg-green-100 text-green-800 rounded w-fit">
                CODE: FRESH25
              </p>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
