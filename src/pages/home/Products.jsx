import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

import Menu from "../../components/Menu";
import BG from "../../image/Menu.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
`;

const MenuBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Div = styled.div`
  width: ${({ $width }) => $width || ""};
  height: ${({ $height }) => $height || ""};
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
`;

const Button = styled.button`
  width: 131px;
  height: 30px;
  font-size: 18px;
  background-color: #fff;
  border: none;
  margin-top: 18px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: underline;
`;

const Products = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Div $width="195px" $height="108px">
            <P $fontSize="36px" $fontWeight="700">
              BEST SELLERS
            </P>
          </Div>

          <Div $width="700px">
            <P $fontSize="18px">
              Choose from our variety of coffees, roasted for both filter and
              espresso. We put the quality score right on the front label, so
              that you can see it and make an informed choice.
            </P>

            <Button onClick={() => navigate("/products")}>
              Shop Now <FaLongArrowAltRight size={18} />
            </Button>
          </Div>
        </Content>

        <MenuBox>
          <Menu img={BG} showInfo={true} />
          <Menu img={BG} showInfo={true} />
          <Menu img={BG} showInfo={true} />
        </MenuBox>
      </Container>
    </Wrapper>
  );
};

export default Products;
