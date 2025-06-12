import styled from "styled-components";
import Menu from "./Menu";

const Wrapper = styled.div`
  width: 100%;
  height: 560px;
  background-color: #000;
  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
  }
`;

const Title = styled.p`
  color: #ffbf00;
  font-size: 48px;
  width: calc(100% - 20%);
  margin: auto;
  font-weight: 700;

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
    font-size: 40px;
  }
`;

const Div = styled.div`
  width: 576px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: calc(100% - 20%);
  }
`;

const P = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: left;
  margin-top: 20px;
  transition: all 0.4s ease;
  cursor: default;
  text-shadow: 2px 2px 8px #fffaeb, 0.3;

  &:hover {
    background-image: linear-gradient(90deg, #f5f5f5, #b0afaf, #ffffff);
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: textShine 2s linear infinite;
    text-shadow: 2px 2px 10px #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;

const HomeProducts = () => {
  return (
    <>
      <Wrapper>
        <Div>
          <Title>OUR PRODUCTS</Title>
          <P>
            We source coffee from across the globe from our trusted network of
            suppliers to bring you a selection of high-quality coffees, each
            with own distinct flavour profile and story.
          </P>
        </Div>
      </Wrapper>

      <Menu />
    </>
  );
};

export default HomeProducts;
