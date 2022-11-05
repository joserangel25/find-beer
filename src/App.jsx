import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BebidasProvider from './context/BebidasProvider'
import CategoriaProvider from './context/CategoriaProvider'
import ModalBebida from './components/ModalBebida'

import Favoritos from './pages/Favoritos'
import Home from './pages/Home'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
    <CategoriaProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Busca y Aprende a hacer tus Bebidas favoritas</h1>
        </header>

        <Container className='mt-5'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/favoritos' element={<Favoritos />} />
            </Routes>
          </BrowserRouter>
        </Container>
        <ModalBebida />

        <footer className="py-3">
          <h3>Hecho con mucha 🍺 por  
            <a href='https://github.com/joserangel25/' target='_blank'
               className='text-decoration-none text-white'
            >
             {' '}Jose Rángel</a>
          </h3>
        </footer>
      </BebidasProvider>
    </CategoriaProvider>
    </>
  )
}

export default App
