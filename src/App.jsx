import './App.css'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Creations from './pages/Creations/Creations'
import HomePage from './pages/Home/HomePage'
import Container from './components/Container/Container.jsx'

function App() {

  return (
    <div>
      <Container>
        <HomePage />
        <Creations />
        <About />
      </Container>
      <Contacts />
    </div>
  )
}

export default App
