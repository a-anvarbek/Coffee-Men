import { useState } from "react";
import styled from "styled-components";

import BG from "../../image/Menu.png";

const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
  height: ${({ $height }) => $height || "160px"};
  background-color: #000;
`;

const Section = styled.div`
  width: 100%;
  padding: 50px;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const Div = styled.div`
  width: ${({ $width }) => $width || "590px"};
  height: 490px;
  margin-top: 50px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
  display: flex;
`;

const Box = styled.div`
  width: 330px;
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #dedede;
  margin: 10px 0;
`;

const RoundBtn = styled.button`
  width: 15px;
  height: 15px;
  display: flex;
  text-align: center;
  border-radius: 50%;
  border: none;
  justify-content: center;
  background-color: #ffbf00;
  margin: 0 20px;
`;

const Button = styled.button`
  width: 175px;
  height: 40px;
  border: ${({ $border }) => $border || "none"};
  font-size: 18px;
  color: ${({ $color }) => $color || ""};
  background-color: ${({ $backgroundColor }) => $backgroundColor || ""};
  margin-top: 15px;
`;

const HomeProductDetail = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Wrapper />

      <Section>
        <Container>
          <Div>
            <Img src={BG} alt="" />
          </Div>

          <Div $width="480px">
            <Box>
              <P $fontSize="28px" $fontWeight="700">
                Colombia - Gesha Dream 250gr
              </P>

              <P $fontSize="24px" $margin="15px 0">
                Regular priceDhs. 95.00 AED
              </P>

              <P $fontSize="18px">
                Profile: Floral aroma, blueberry tea <br />
                Varietal: Green Tip Gesha <br />
                Process: Carbonic Maceration <br />
                Alt.: 1500masl <br />
                Roast Profile: Espresso <br />
                SCA Score: 89 <br />
                Farm: El Vergel State - Tolima
              </P>
            </Box>

            <Line />

            <Box>
              <P $fontSize="16px">
                QTY:
                <RoundBtn onClick={() => setCount(count + 1)}>+</RoundBtn>
                <span>{count}</span>
                <RoundBtn onClick={() => setCount(count - 1)}>-</RoundBtn>
              </P>

              <Button $border="2px soli">
              Add to Cart
              </Button>

              <Button $backgroundColor="#000" $color="#fff">
                Buy it Now!
              </Button>
            </Box>
          </Div>
        </Container>
      </Section>

      <Wrapper $height="75px" />
    </>
  );
};

export default HomeProductDetail;
