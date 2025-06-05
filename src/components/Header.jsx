import styled from "styled-components";

import logo from "../image/logo.png";

const Wrapper = styled.div`
  width: 100%;
  background-color: red;
  padding: 50px 0;
`;

const Container = styled.div`
    width: calc(100% - 20%);
    background-color: green;
    margin: auto;
    height: 60px;
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width: 64px;
    height: 53px;
`

const P = styled.p`
    
`

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Img src={logo} alt="" />
        <P>Product</P>
      </Container>
    </Wrapper>
  );
};

export default Header;
