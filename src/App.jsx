import styled from 'styled-components'
import './App.css'

import Home from './pages/home/Home'
import { useState } from 'react'
import MainRoutes from './pages/routes/MainRouter'
import Header from './components/Header'

const Wrapper = styled.div`
  
`

function App() {
  const {isAuthenticated, useRole} = useState
  return (
    <Wrapper>
      <Header />
      <MainRoutes />
    </Wrapper>
  )
}

export default App
