import HeroSection from "../../Components/HeroSection";
import Products from "../../Components/Product/Products";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="contain mx-auto">
        <HeroSection />
        <Products></Products>
        <Footer />
      </div>
    </>
  );
};

export default Home;
