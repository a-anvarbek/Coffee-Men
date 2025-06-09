import styled from "styled-components";
import Menu from "./Menu";

const Wrapper = styled.div`
  width: 100%;
  height: 560px;
  background-color: #000;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Title = styled.p`
  color: #ffbf00;
  font-size: 48px;
  width: calc(100% - 20%);
  margin: auto;
  font-weight: 700;
`;

const Div = styled.div`
  width: 576px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const P = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: left;
  margin-top: 20px;
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
