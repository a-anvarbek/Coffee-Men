import styled from "styled-components";

import logo from "../image/logo.png";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  height: 286px;
  background-color: black;
`;

const Container = styled.div`
  width: calc(100% - 20%);
  height: 286px;
  margin: auto;
  display: flex;
  align-items: center;
  /* background-color: red; */
  color: #aaa;
`;

const Img = styled.img`
  width: 92.39px;
  height: 80px;
  margin-right: 15px;
`;

const Div = styled.div`
  width: 250px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  font-size: 16px;
`;

const A = styled.a`
  margin-right: 10px;
  color: #fff;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Div
          style={{
            marginRight: "150px",
          }}
        >
          <Contact>
            <Img src={logo} alt="" />
            <P>
              Follow us on Social Media
              <br />
              <br />
              <A href="">
                <FaTelegram size={16} />
              </A>
              <A href="">
                <FaInstagram size={16} />
              </A>
              <A href="">
                <FaFacebook size={16} />
              </A>
            </P>
          </Contact>

          <Contact>
            <P
              style={{
                marginTop: "15px",
              }}
            >
              Phone : <A href="">+(50) 7931 724 589</A>
              <br />
              <A href="">info@harvesterco.com</A>
            </P>
          </Contact>

          <P style={{
            marginTop: "50px",
          }}>&copy; 2025 a-anvarbek. Cooffee Men</P>
        </Div>

        <Div>
          <P
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "15px",
              color: "#fff",
            }}
          >
            About Us
          </P>
          <P>
            Our Story
            <br /> Our Services
            <br /> Vacancies
            <br />
            Partner Interviews
          </P>
        </Div>

        <Div>
          <P
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "15px",
              color: "#fff",
            }}
          >
            Support
          </P>
          <P>
            ContactUs
            <br /> FAQs
            <br /> Where to buy
            <br /> Shipping & Returns
          </P>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
