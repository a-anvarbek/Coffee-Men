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
  font-family: "Glacial Indifference", sans-serif;
  color: #f6bd12;
  font-size: 166px;
  font-weight: 500;
  width: calc(100% - 20%);
  margin: auto;

  transition: all 0.4s ease;
  cursor: default;
  text-shadow: 2px 2px 8px #f5c73d, 0.3;

  &:hover {
    background-image: linear-gradient(90deg, #f3cd5b, #f1bb1b, #f0ca59);
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: textShine 2s linear infinite;
    text-shadow: 2px 2px 10px #f3cd5b;
  }

  @media (max-width: 768px) {
    font-size: 55px;
    text-align: center;
  }
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Title>HARVESTER COFFEE CO.</Title>
      </Wrapper>

       <Products />

      <AboutUs />

      {/* <ProductDetail /> */}

      {/* <ContactUs /> */}
    </>
  );
};

export default Home;
