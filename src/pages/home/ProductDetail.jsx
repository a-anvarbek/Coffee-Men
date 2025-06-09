import styled from "styled-components";

import BG1 from "../../image/ProductDetail1.jpg"
import BG2 from "../../image/ProductDetail2.png"
import BG3 from "../../image/ProductDetail3.jpg"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DitTop = styled.div`
  width: 339px;
  height: 282px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
  word-spacing: 4px;
`;

const DivBottom = styled.div`
    width: 378px;
    height: 332px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`

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
              coffee of the best quality. We carefully select lots that conform
              to the standards of speciality coffee, meaning that only the
              mature cherries are handpicked and that the lots are completely
              traceable.
            </P>
          </DitTop>

          <DitTop>
            <P $fontSize="28px" $fontWeight="700">
              Transparency
            </P>

            <P $fontSize="18px" $margin="20px 0">
              What we and our customers appreciate a lot about speciality coffee
              are its full traceability and the short supply chain. We are
              committed to providing you with the most comprehensive information
              on what is in your cup: in fact, we publish all the details we
              ourselves have on each lot.
            </P>
          </DitTop>

          <DitTop>
            <P $fontSize="28px" $fontWeight="700">
              Honesty
            </P>

            <P $fontSize="18px" $margin="20px 0">
              Assigning quality scores professionally after blind cupping the
              lots. Freshly processed beans at the origin are quite different
              from beans landed several months later at the destination:
              conditions of transportation and time inevitably intervene.
            </P>
          </DitTop>
        </Div>

        <Div>
            <DivBottom>
                <Img src={BG1} alt="" />
            </DivBottom>

            <DivBottom>
                <Img src={BG2} alt="" />
            </DivBottom>
            
            <DivBottom>
                <Img src={BG3} alt="" />
            </DivBottom>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default ProductDetail;
