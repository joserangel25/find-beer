
import { Row } from 'react-bootstrap'
import Bebida from './Bebida';

export default function ListadoBebidas({bebidas}) {

  return (
    <Row className='mt-5'>
      {
        bebidas.map(bebida => (
          <Bebida key={bebida.idDrink} bebida={bebida} />
        ))
      }
    </Row>
  )
}
