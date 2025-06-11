import { useNavigate } from "react-router";
import { useState } from "react";
import { FiMenu, FiSearch, FiShoppingBag, FiX } from "react-icons/fi";

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
  cursor: pointer;
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 26px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 64px;
  height: 53px;

  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

const Button = styled.button`
  font-size: 16px;
  padding: 5px 10px;
  margin-left: 15px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: all 1s ease;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 3px;
    background-color: white;
    transition: transform 0.4s ease;
    transform-origin: center;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
    background-color: #f6bd12;
  }
  &:hover {
    color: #f6bd12;
    transition: all 0.4s ease;
  }
`;

const DivBtn = styled.div`
  width: 100%;  
  display: flex;
  /* gap: 20px; */

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? "flex" : "none")};
    background-color: transparent;
    padding: 10px 0;
    margin-top: 10px;
  }
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Img onClick={() => navigate("/")} src={logo} alt="logo" />

        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuToggle>

        <DivBtn open={menuOpen}>
          <Button onClick={() => navigate("/products")}>Products</Button>
          <Button onClick={() => navigate("/products-detail")}>
            Product Detail
          </Button>
          <Button onClick={() => navigate("/about-us")}>About Us</Button>
        </DivBtn>

        <Div>
          <Icon>
            <FiSearch size={16} />
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
