import { useState } from "react";
import { BrowserRouter } from "react-router";
import styled from "styled-components";

import MainRoutes from "./pages/routes/MainRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const Wrapper = styled.div``;

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
