import styled from "styled-components";

import BG from "../../image/Harvester.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const DivL = styled.div`
  width: 480px;
  height: 600px;
`;

const DivR = styled.div`
  width: 569px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  width: 300px;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
`;

const Span = styled.span`
  font-weight: 700;
`;

const Harvester = () => {
  return (
    <Wrapper>
      <Container>
        <DivL>
          <Img src={BG} alt="" />
        </DivL>
        <DivR>
          <Div>
            <P $fontSize="38px" $fontWeight="700">
              HARVESTER COFFEE CO.
            </P>
          </Div>

          <P $fontSize="18px" $margin="30px 0">
            Welcome to <Span>Harvester Coffee co</Span>, the premier coffee
            roastery in the heart of the city. As soon as you walk through the
            door, you'll be greeted with the delicious aroma of freshly roasted
            coffee beans.
            <br />
            <br />
            Our experienced roasters are experts at selecting the finest coffee
            beans from around the world and bringing out their unique flavors
            and aromas through our signature roasting process. We take pride in
            sourcing our beans directly from the farmers, ensuring that we are
            always using the freshest and most ethically sourced beans
            available.
            <br />
            <br />
            At <Span>Harvester Coffee co</Span>, we believe that coffee is not
            just a drink, it's an experience. That's why we offer a variety of
            brewing methods, including pour-over, French press, and espresso, to
            ensure that each cup is crafted to perfection.
            <br />
            <br />
            Whether you're a coffee connoisseur or just starting to explore the
            world of specialty coffee, our knowledgeable staff is here to guide
            you on your coffee journey. So come on in, relax, and enjoy a cup of
            our expertly crafted coffee today!
          </P>
        </DivR>
      </Container>
    </Wrapper>
  );
};

export default Harvester;
