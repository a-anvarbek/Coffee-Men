import { useState } from "react";
import styled from "styled-components";

import Menu from "../../components/Menu";

import BG from "../../image/Menu.png";

const Wrapper = styled.div`
  width: 100%;
  padding: 50px;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
`;

const P = styled.p`
  font-size: ${({ $fontSize }) => $fontSize || ""};
  font-weight: ${({ $fontWeight }) => $fontWeight || ""};
  margin: ${({ $margin }) => $margin || ""};
  display: flex;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #dedede;
  padding: 20px 0;
  cursor: pointer;

  &:first-child {
    border-bottom: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  width: 44px;
  height: 31px;
  display: flex;
  text-align: left;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;

const DivB = styled.div`
  padding-bottom: 25px;
  width: 956px;
  word-spacing: 3px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 100px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const DivL = styled.div`
  width: 213px;
`;

const DivR = styled.div`
  width: calc(100% - 253px);
  display: flex;
  justify-content: space-between;
 
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Description = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const Information = [
    {
      title: "DESCRIPTION",
      info: [
        "Colombia Gesha Dream is a high-quality coffee that is highly sought after by coffee enthusiasts. It is a single-origin coffee that is grown and harvested in the Gesha region of Colombia, which is known for producing some of the best coffee beans in the world.",
        <br />,
        <br />,
        "Gesha Dream coffee beans are grown at high altitudes, which results in a complex and unique flavor profile. The coffee has a floral aroma with notes of jasmine and bergamot, and a sweet, fruity taste with hints of tropical fruits like mango and papaya.",
        <br />,
        <br />,
        "The coffee is processed using a natural method, which involves drying the coffee cherries in the sun before removing the pulp. This method allows the flavors of the coffee to fully develop and creates a smooth, clean finish.",
      ],
    },

    {
      title: "COFFEE INFO",
      info: [
        "Our coffee beans are ethically sourced from small-scale farmers around the world, including regions in Colombia, Ethiopia, Brazil, and Kenya. Each batch is hand-selected and roasted in small quantities to ensure peak freshness and flavor.",
        <br />,
        <br />,
        "We offer a range of roast profiles — from light and floral to dark and bold — to suit every coffee lover’s preference. All our beans are 100% Arabica and come with full traceability back to the farm of origin.",
        <br />,
        <br />,
        "Our packaging is nitrogen-flushed and resealable to keep your coffee fresh for longer.",
      ],
    },

    {
      title: "WHOLESALE",
      info: [
        "Interested in serving our coffee at your café, restaurant, or office? We offer competitive wholesale pricing and flexible delivery options tailored to your business needs.",
        <br />,
        <br />,
        "With our wholesale program, you’ll get:",
        <br />,
        <br />,
        "Freshly roasted beans in bulk",
        <br />,
        <br />,
        "Equipment recommendations & training",
        <br />,
        <br />,
        "Priority support and fast shipping",
        <br />,
        <br />,
        "Whether you're a small shop or a large chain, we're ready to help fuel your business with premium coffee.",
      ],
    },

    {
      title: "DElivery & returns",
      info: [
        "We offer fast and secure delivery worldwide. Orders are processed within 1–2 business days and typically arrive in 3–7 days depending on your location.",
        <br />,
        <br />,
        "All coffee is roasted to order to ensure maximum freshness.",
        <br />,
        <br />,
        "Returns & Refunds:",
        <br />,
        <br />,
        "Unopened coffee bags can be returned within 14 days of delivery.",
        <br />,
        <br />,
        "If you receive a damaged or incorrect order, contact our support team for a quick resolution.",
        <br />,
        <br />,
        "We want you to love your coffee — if you're not satisfied, we’ll make it right.",
      ],
    },
  ];

  return (
    <Wrapper>
      <Container>
        {Information.map((info, index) => (
          <div key={index}>
            <Div onClick={() => toggleSection(index)}>
              <P $fontSize="18px" $fontWeight="700">
                {info.title}
              </P>
              <Button>{expandedSections[index] ? "-" : "+"}</Button>
            </Div>

            {expandedSections[index] && (
              <DivB>
                <P $fontSize="18px">{info.info}</P>
              </DivB>
            )}
          </div>
        ))}

        <Box>
          <DivL>
            <P $fontSize="36px" $fontWeight="700">
              YOU MIGHT ALSO LIKE
            </P>

            <P $fontSize="18px" $margin="20px 0">
              Here are some other items we think you may like.
            </P>
          </DivL>

          <DivR>
            <Menu img={BG} showInfo={false} />
            <Menu img={BG} showInfo={false} />
            <Menu img={BG} showInfo={false} />
          </DivR>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Description;
