import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

export default function Bebida({bebida}) {
  const { handleClickModal, getBebidaById } = useBebidas()
  return (
    <Col md={6} lg={3}>
      <Card className='mb-4'>
        <Card.Img 
          vatiant='top'
          src={bebida.strDrinkThumb}
          alt={`Imagen de la bebida ${bebida.strDrink}`}
        />

        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button 
            variant='warning' 
            className='w-100 text-uppercase mt-2'
            onClick={() => {
              handleClickModal()
              getBebidaById(bebida.idDrink)
            }}
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
