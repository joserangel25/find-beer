import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'

import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'

export default function Formulario() {

  const [ busqueda, setBusqueda ] = useState({
    nombre: '',
    categoria: ''
  });

  const [alerta, setAlerta ] = useState('');

  const { categorias } = useCategorias();
  const { obtenerBebidas } = useBebidas()

  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(Object.values(busqueda).includes('')){
      setAlerta('Todos los campos son obligatorios')
      return
    }

    setAlerta('');
    obtenerBebidas(busqueda)

  }

  const handleChangeInputs = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Form
      onSubmit={handleSubmit}
    >
      {
        alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>
      }
      
        <div className='d-flex justify-content-end'>
        <Link to='/favoritos' className='text-danger fw-bold text-decoration-none '>
            Favoritos ❤/
        </Link>
        </div>

      <Row className='mt-3'>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre de la Bebida</Form.Label>
            <Form.Control 
              id='nombre'
              name='nombre'
              type='text'
              placeholder='Ej: Tequila'
              value={busqueda.nombre}
              onChange={handleChangeInputs}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
        <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoría de la Bebida</Form.Label>
            <Form.Select
              id='categoria'
              name='categoria'
              value={busqueda.categoria}
              onChange={handleChangeInputs}
            >
              <option value=''>--Selecciona Categoria</option>
              {
                categorias.map((categoria, ind) => (
                  <option key={ind} value={categoria.strCategory}>{categoria.strCategory}</option>
                ))
              }
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={3}>
              <Button
                type='submit'
                variant='danger'
                className='text-uppercase w-100'
              >Buscar Bebidas</Button>
        </Col>
      </Row>
    </Form>
  )
}
