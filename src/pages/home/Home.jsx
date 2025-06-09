import styled from "styled-components";

import Products from "./Products";
import AboutUs from "./AboutUs";
import ProductDetail from "./ProductDetail";
import ContactUs from "./ContactUs";

import BG from "../../image/Home.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BG});
  background-color: #666464;
  background-blend-mode: multiply;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: #ffbf00;
  font-size: 166px;
  width: calc(100% - 20%);
  margin: auto;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Title>HARVESTER COFFEE CO.</Title>
      </Wrapper>

      <Products />

      <AboutUs />

      <ProductDetail />

      <ContactUs />
    </>
  );
};

export default Home;
