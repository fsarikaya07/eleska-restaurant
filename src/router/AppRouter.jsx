import { BrowserRouter } from "react-router-dom";

import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      
    </BrowserRouter>
  );
};

export default AppRouter;
