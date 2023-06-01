import CarouselSlider from "./components/Slider";
import Footer from "./components/bottomContainer/Footer";
import HomePart from "./components/detail/HomePart";

import Product2 from "./components/homePage/Product2";
import Products from "./components/homePage/Products";
import Steps from "./components/homePage/Steps";
import Orbit from "./components/orbit/Orbit";
import MultiStepForm from "./components/stepper/MultiStepForm";
import Home from "./pages/Home";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="app overflow-x-hidden">
      <AppRouter />
      <hr />
      <Steps />
      {/* <CarouselSlider/> */}
      {/* <Products/>  */}
      <Product2 />
      <Orbit radius={400} />
      {/* <HomePart/> */}
      <Home />
      <MultiStepForm />
      <Footer />
    </div>
  );
}

export default App;
