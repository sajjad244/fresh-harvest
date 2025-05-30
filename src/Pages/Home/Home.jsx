import HeroSection from "../../Components/HeroSection";
import Products from "../../Components/Product/Products";

const Home = () => {
  return (
    <div className="contain mx-auto">
      <HeroSection />
      <Products></Products>
    </div>
  );
};

export default Home;
