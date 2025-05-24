import './App.css'
import Header from './components/Header/Header'
import ModalPhone from './components/ModalPhone/ModalPhone'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import Creations from './pages/Creations/Creations'
import HomePage from './pages/Home/HomePage'
// import Container from './components/Container/Container.jsx'

function App() {

  return (
    <div>
      {/* <Container> */}
      <Header />
      {/* <ModalPhone /> */}
      <HomePage />
      <Creations />
      <About />
      {/* </Container> */}
      <Contacts />
    </div>
  )
}

export default App
