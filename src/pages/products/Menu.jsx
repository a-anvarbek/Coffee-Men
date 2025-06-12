import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

import MenuComponent from "../../components/Menu";
import BG from "../../image/Menu.png";
import BG1 from "../../image/ProductsMenu1.png";
import BG2 from "../../image/ProductsMenu2.png";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 50px;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
`;

const P = styled.p`
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #fff;
  width: ${({ $width }) => $width || ""};
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  border: none;
  margin-left: 20px;
  justify-content: space-between;
  cursor: pointer;
`;

const Box = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          <P>Filter:</P>
          <Button $width="110px">
            Availability <FaChevronDown />
          </Button>
          <Button $width="70px">
            Price <FaChevronDown />
          </Button>
        </Div>

        <Box>
          <MenuComponent img={BG} showInfo={false} />
          <MenuComponent img={BG} showInfo={false} />
          <MenuComponent img={BG} showInfo={false} />
          <MenuComponent img={BG} showInfo={false} />
        </Box>

        <Box>
          <MenuComponent img={BG2} showInfo={false} />
          <MenuComponent img={BG1} showInfo={false} />
          <MenuComponent img={BG1} showInfo={false} />
          <MenuComponent img={BG1} showInfo={false} />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Menu;
