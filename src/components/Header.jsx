import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

import logo from "../image/logo.png";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 50px 0;
  height: 160px;
  position: absolute;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  margin: auto;
  height: 60px;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 64px;
  height: 53px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  margin-left: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
`;

const DivBtn = styled.div`
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  text-align: right;
`;

const Icon = styled.button`
  width: 26px;
  height: 26px;
  border: none;
  margin-left: 15px;
  background-color: #000;
  color: #fff;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Img src={logo} alt="" />

        <DivBtn>
          <Button onClick={() => navigate("/about-us")}>Products</Button>
          <Button onClick={() => navigate("/about-us")}>Product Detail</Button>
          <Button onClick={() => navigate("/about-us")}>Contact Us</Button>
          <Button onClick={() => navigate("/about-us")}>About Us</Button>
        </DivBtn>

        <Div>
          <Icon>
            <FiSearch size={16}/>
          </Icon>
          <Icon>
            <FiShoppingBag size={16} />
          </Icon>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default Header;
