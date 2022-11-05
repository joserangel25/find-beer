import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import BebidasProvider from './context/BebidasProvider'
import CategoriaProvider from './context/CategoriaProvider'

function App() {

  return (
    <>
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Busca y Aprende a hacer tus Bebidas favoritas🍺</h1>
        </header>

        <Container className='mt-5'>
          <Formulario />

          <ListadoBebidas />

          <ModalBebida />
        </Container>

        <footer className="py-3">
          <h2>Hecho con mucha 🍺 por Jose Rángel</h2>
        </footer>
      </BebidasProvider>
    </CategoriaProvider>
    </>
  )
}

export default App
