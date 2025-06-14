import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";
import BG from "../../image/ContactUs.jpg";

const WrapperTop = styled.div`
  width: 100%;
  height: 500px;
  padding: 50px;
  background-color: #000;
  color: #fff;

  @media (max-width: 768px) {
    background-image: url(${BG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    padding: 30px 20px;
    height: auto;
  }
`;

const WrapperBottom = styled.div`
  width: 100%;
  height: 400px;
  padding: 50px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 30px 20px;
  }
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
  height: 500px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const DivL = styled.div`
  width: 520px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DivR = styled.div`
  width: 440px;
  height: 402px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
  word-spacing: 4px;
`;

const Button = styled.button`
  width: 157px;
  height: 34px;
  background-color: #ffbf00;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  font-weight: 700;
  margin-top: 132px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
    background-color: white;
    color: #ffbf00;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ContainerBottom = styled.div`
  width: 466px;
  margin: auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 70%;
  height: 50px;
  border-radius: 30px 0 0 30px;
  border: 1px solid #bcbcbc;
  text-align: center;
  font-size: 18px;
  color: #afafaf;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const SearchButton = styled.button`
  width: 121px;
  height: 50px;
  border-radius: 0 30px 30px 0;
  border: none;
  background-color: #ffbf00;
  font-size: 18px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactUs = () => {
  return (
    <>
      <WrapperTop>
        <Container>
          <DivL>
            <P $fontSize="30px" $fontWeight="700">
              WHOLESALE COFFEE
            </P>

            <P $fontSize="18px" $margin="35px 0">
              We are a full-service speciality coffee roaster. We go beyond
              indicating the location of the production: we also tell you
              everything we know about the producer - the farm, the cooperative,
              or the processing station. In addition, we always indicate the
              period of the harvest, so that you are sure that you buy the
              coffee coming from the freshest and in-season crop. We put the
              quality score right on the front label, so that you can see it and
              make an informed choice.
            </P>

            <Button>
              CONTACT US <FaLongArrowAltRight />
            </Button>
          </DivL>
          <DivR>
            <Img src={BG} alt="Contact us" />
          </DivR>
        </Container>
      </WrapperTop>

      <WrapperBottom>
        <ContainerBottom>
          <P $fontSize="36px" $fontWeight="700">
            Subscribe to our newsletter.
          </P>

          <P $fontSize="18px" $margin="25px 35px">
            Get e-mail updates about our latest coffee and special offers.
          </P>

          <Div>
            <Input type="text" placeholder="Enter your email address" />
            <SearchButton>Subscribe</SearchButton>
          </Div>
        </ContainerBottom>
      </WrapperBottom>
    </>
  );
};

export default ContactUs;
