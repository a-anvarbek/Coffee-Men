import styled from "styled-components";
import Harvester from "./Harvester";

const Wrapper = styled.div`
  width: 100%;
  height: 556px;
  padding: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 553px;
  margin: auto;
`;

const Title = styled.p`
  color: #ffbf00;
  font-size: 48px;
  width: calc(100% - 20%);
  margin: auto;
  font-weight: 700;
`;

const P = styled.p`
  color: #fff;
  font-size: 18px;
  text-align: left;
  margin-top: 20px;
`;

const About = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Title>ABOUT US</Title>
          <P>
            Harvester Coffee is a Dubai-based company founded in 2020 that
            sources, supplies, and roasts speciality coffee to provide a premium
            coffee experience to the Middle East and beyond. The company prides
            itself on its exceptional quality and attention to detail in
            selecting and bringing the best quality coffee. They are committed
            to promoting fair coffee harvesting practices and engaging the
            coffee community to contribute to the coffee value chain. With
            connections to farms around the world, they have a huge capacity to
            meet market demand and are working towards a greater impact.
          </P>
        </Container>
      </Wrapper>

      <Harvester />
    </>
  );
};

export default About;
