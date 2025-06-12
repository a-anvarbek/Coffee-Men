import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

const Container = styled.div`
  background-color: #000;
  width: 265px;
  height: 417px;
  border-radius: 20px;
  position: relative;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 20px 20px 0 0;
`;

const Div = styled.div`
  position: absolute;
  width: 124px;
  height: 28px;
  top: 19px;
  color: #fff;
  padding: 5px 10px;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || "8px"};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
  margin-bottom: 5px;
  width: 100%;
`;

const Case = styled.div`
  width: 100%;
  padding: 22px;
  display: flex;
`;

const DivL = styled.div`
  width: 171px;
  margin-right: 10px;
`;

const DivR = styled.div`
  width: calc(100% - 181px);
  display: flex;
  align-items: end;
`;

const Button = styled.button`
  width: 53px;
  height: 16px;
  font-size: 12px;
  background-color: #ffbf00;
  border: none;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const LeftBtn = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  text-align: right;
  border: none;
  margin-bottom: 3px;
  cursor: pointer;
`;

const Menu = (props, showInfo) => {
  return (
    <Container>
      <Img src={props.img} alt="" />
      {showInfo && (
        <Div>
          <P>Varietal: Green Tip Gesha SCA Score: 89</P>
        </Div>
      )}

      <Case>
        <DivL>
          <P $fontSize="14px" $fontWeight="700">
            Colombia - Gesha Dream
          </P>

          <P $fontSize="12px">
            Process: Carbonic Maceration Floral aroma, blueberry tea 250gr
            <br />
            <Button>From</Button>
            Dhs. 95.00 AED
          </P>

          <P $margin="20px 0 0 0" $fontSize="14px">
            View Product
          </P>
        </DivL>

        <DivR>
          <LeftBtn>
            <FaLongArrowAltRight size={16} />
          </LeftBtn>
        </DivR>
      </Case>
    </Container>
  );
};

export default Menu;
