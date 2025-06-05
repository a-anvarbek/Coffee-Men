import { BrowserRouter as Router, Routes, Route } from "react-router";
import ROUTES from "./routes";

// Import Pages
import Home from "../home/Home";
import About from "../aboutUS/About";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
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
        {/* <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<Signup />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} /> */}
      </Routes>
  );
};

export default MainRoutes;
