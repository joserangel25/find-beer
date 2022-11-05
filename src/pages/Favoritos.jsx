import { Link } from 'react-router-dom';
import ListadoBebidas from '../components/ListadoBebidas';
import useBebidas from '../hooks/useBebidas'

function Favoritos() {

  const { favoritos } = useBebidas();

  if(!favoritos.length){
    return (
      <>
        <Link to='/' className='text-danger fw-bold text-decoration-none'>Volver al Home 🏚/</Link>
        <h2 className='my-3 text-center text-danger'>No tienes bebidas Favoritas aún</h2>
      </>
    )
  } else {
      return (
      <>
        <Link to='/' className='text-danger fw-bold text-decoration-none'>Volver al Home 🏚/</Link>
        <h2 className='my-3 text-center text-danger'>Tus Bebidas Favoritas</h2>
        <ListadoBebidas bebidas={favoritos} />
      </>

    )
  }
}

export default Favoritos
