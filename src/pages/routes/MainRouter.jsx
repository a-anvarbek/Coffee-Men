import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages
import Home from "../home/Home";
import HomeProducts from "../products/HomeProducts";
import HomeProductDetail from "../productDetail/HomeProductDetail";
import About from "../aboutUS/About";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCTS} element={<HomeProducts />} />
      <Route path={ROUTES.PRODUCT_DETAIL} element={<HomeProductDetail />} />
      <Route path={ROUTES.ABOUT_US} element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
