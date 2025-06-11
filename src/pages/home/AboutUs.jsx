import styled from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

import BG1 from "../../image/AboutUs1.jpg";
import BG2 from "../../image/AboutUs2.jpg";
import BG3 from "../../image/AboutUs3.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  padding: 50px;
  color: #fff;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Div1 = styled.div`
  width: 524px;
  height: 621px;
  background-image: url(${BG1});
  background-position: center;
  background-size: cover;
  background-color: #9a8e8e;
  background-blend-mode: multiply;
  padding: 20px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 0;
  }
`;

const Div2 = styled.div`
  width: 524px;
  height: 621px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BGImg1 = styled.div`
  width: 582px;
  height: 290px;
  background-image: url(${BG2});
  background-position: bottom;
  background-repeat: no-repeat;
  background-color: #9a8e8e;
  background-blend-mode: multiply;
  background-size: cover;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 0;
  }
`;

const BGImg2 = styled.div`
  width: 582px;
  height: 293px;
  background-image: url(${BG3});
  background-position: center;
  background-repeat: no-repeat;
  background-color: #9a8e8e;
  background-blend-mode: multiply;
  background-size: cover;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 0;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 460px;
  padding: 35px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
    margin-top: -50px;
  }
`;

const Button = styled.button`
  width: 91px;
  height: 19px;
  background-color: #ffbf00;
  border: none;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
    background-color: white;
    color: #ffbf00;
  }
`;

const ReadBtn = styled.button`
  width: 110px;
  height: 20px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  cursor: pointer;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
  text-decoration: ${({ $textDecoration }) => $textDecoration || ""};
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <Container>
        <Div1>
          <Button onClick={() => navigate("/about-us")}>ABOUT US</Button>

          <Content>
            <P
              $fontSize="18px"
              $fontWeight="700"
              $textDecoration="underline"
              $margin="300px 0 0 0"
            >
              HARVESTER
            </P>

            <P $fontSize="16px" $margin="35px 0">
              Harvester Coffee is a Dubai-based company founded in 2020 that
              sources, supplies, and roasts specialty coffee to provide a
              premium coffee experience to the Middle East and beyond. The
              company prides itself on its exceptional quality and attention to
              detail in selecting and bringing the best quality coffee.
            </P>

            <ReadBtn onClick={() => navigate("/about-us")}>
              Read more <FaLongArrowAltRight />
            </ReadBtn>
          </Content>
        </Div1>

        <Div2>
          <BGImg1>
            <Content>
              <P
                $fontSize="18px"
                $fontWeight="700"
                $textDecoration="underline"
                $margin="90px 0 0 0"
              >
                COFFEE ACADEMY
              </P>

              <P $fontSize="16px" $margin="15px 0">
                The Harvester Coffee Academy provides you with Certified courses
                from the Specialty Coffee Association for those aiming to
                solidify their professional skills and trainings, provided by
                our SCA authorized trainer.
              </P>

              <ReadBtn onClick={() => navigate("/about-us")}>
                Read more <FaLongArrowAltRight />
              </ReadBtn>
            </Content>
          </BGImg1>

          <BGImg2>
            <Content>
              <P
                $fontSize="18px"
                $fontWeight="700"
                $textDecoration="underline"
                $margin="90px 0 0 0"
              >
                Coffee Workshops
              </P>

              <P $fontSize="16px" $margin="15px 0">
                Basic Workshops certified by Harvester Coffee Company, designed
                for passionate people who would love to be introduced to the
                coffee industry; a solid start with a minimum duration for intro
                level.
              </P>

              <ReadBtn onClick={() => navigate("/about-us")}>
                Read more <FaLongArrowAltRight />
              </ReadBtn>
            </Content>
          </BGImg2>
        </Div2>
      </Container>
    </Wrapper>
  );
};

export default AboutUs;
