import styled from "styled-components";

import BG1 from "../../image/ProductDetail1.jpg";
import BG2 from "../../image/ProductDetail2.png";
import BG3 from "../../image/ProductDetail3.jpg";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DitTop = styled.div`
  width: 339px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "inherit"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "inherit"};
  margin: ${({ $margin }) => $margin || "0"};
  word-spacing: 4px;
  text-align: center;
`;

const DivBottom = styled.div`
  width: 378px;
  height: 332px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
  transition: filter 0.4s ease;

  &:hover {
    filter: brightness(1);
  }
`;

const ProductDetail = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          <DitTop>
            <P $fontSize="28px" $fontWeight="700">
              QUALITY
            </P>
            <P $fontSize="18px" $margin="20px 0">
              As Harvester, We are committed to selecting and bringing the
              coffee of the best quality...
            </P>
          </DitTop>

          <DitTop>
            <P $fontSize="28px" $fontWeight="700">
              Transparency
            </P>
            <P $fontSize="18px" $margin="20px 0">
              What we and our customers appreciate a lot about speciality
              coffee...
            </P>
          </DitTop>

          <DitTop>
            <P $fontSize="28px" $fontWeight="700">
              Honesty
            </P>
            <P $fontSize="18px" $margin="20px 0">
              Assigning quality scores professionally after blind cupping...
            </P>
          </DitTop>
        </Div>

        <Div>
          <DivBottom>
            <Img src={BG1} alt="Flavor wheel chart" />
          </DivBottom>
          <DivBottom>
            <Img src={BG2} alt="Specialty Coffee Association logo" />
          </DivBottom>
          <DivBottom>
            <Img src={BG3} alt="Coffee bean packages" />
          </DivBottom>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default ProductDetail;
