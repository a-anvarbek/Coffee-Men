import styled from "styled-components";
import logo from "../image/logo.png";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  color: #aaa;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
    gap: 30px;
  }
`;

const Img = styled.img`
  width: 92px;
  height: 80px;
  margin-right: 15px;
`;

const Column = styled.div`
  flex: 1;
  min-width: 220px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const P = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const A = styled.a`
  margin-right: 10px;
  color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    color: #00a6ff;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Column>
          <Contact>
            <Img src={logo} alt="Logo" />
            <P>
              Follow us on Social Media <br />
              <br />
              <A href="https://t.me/a_anvarbek">
                <FaTelegram size={16} />
              </A>
              <A href="https://www.instagram.com/_next_page_devs/">
                <FaInstagram size={16} />
              </A>
              <A href="#">
                <FaFacebook size={16} />
              </A>
            </P>
          </Contact>
          <P>
            Phone: <A href="tel:+998900500767">+998 (90) 050 07 67</A> <br />
            <A href="https://t.me/NextPageDev">Our Telegram Channel</A>
          </P>
        </Column>

        <Column>
          <P
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "#fff",
              marginBottom: "15px",
            }}
          >
            About Us
          </P>
          <P>
            Our Story <br />
            Our Services <br />
            Vacancies <br />
            Partner Interviews
          </P>
        </Column>

        <Column>
          <P
            style={{
              fontWeight: "700",
              fontSize: "20px",
              color: "#fff",
              marginBottom: "15px",
            }}
          >
            Support
          </P>
          <P>
            ContactUs <br />
            FAQs <br />
            Where to buy <br />
            Shipping & Returns
          </P>
        </Column>
      </Container>
      <P style={{ padding: "30px 0", width: "100%", textAlign: "center" }}>
        &copy; 2025 a-anvarbek. Cooffee Men
      </P>
    </Wrapper>
  );
};

export default Footer;
