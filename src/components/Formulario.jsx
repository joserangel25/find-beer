import { useState } from 'react';
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
      <Row>
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

      <Row className='justify-content-center'>
        <Col md={3}>
              <Button
              type='submit'
                variant='danger'
                className='text-uppercase w-100'
              >Buscar Bebidas</Button>
        </Col>

        <Col md={3}>
              <Button
                type='button'
                variant='warning'
                className='text-uppercase w-100'
              >Favoritas</Button>
        </Col>
      </Row>
    </Form>
  )
}
