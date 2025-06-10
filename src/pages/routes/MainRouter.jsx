import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages
import Home from "../home/Home";
import About from "../aboutUS/About";
import HomeProducts from "../products/HomeProducts";
import HomeProductDetail from "../productDetail/HomeProductDetail";
// import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import NotFound from "./pages/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT_US} element={<About />} />
      <Route path={ROUTES.PRODUCTS} element={<HomeProducts />} />
      <Route path={ROUTES.PRODUCT_DETAIL} element={<HomeProductDetail />} />
    </Routes>
  );
};

export default MainRoutes;
