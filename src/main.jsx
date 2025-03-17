import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Container from './components/Container/Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header>
      <Container>
        <App />
      </Container>
    </Header>
  </StrictMode>,
)
