import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, InputGroup, Form, Row, Col, Alert } from 'react-bootstrap'

import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'

export default function Formulario() {

  const [ busqueda, setBusqueda ] = useState({
    ingrediente: '',
    categoria: ''
  });

  const [alerta, setAlerta ] = useState('');

  const { categorias, ingredientes } = useCategorias();
  const { obtenerBebidas, obtenerBebidasByIngrediente, checkFiltro, setCheckFiltro } = useBebidas()


  const handleSubmit = (e) => {
    e.preventDefault()

    if(Object.values(busqueda).every(word => word === '')){
      setAlerta('Por lo menos debes escoger un Ingrediente o una Categoría')
      return
    }
    if(!checkFiltro){
      setAlerta('Debes seleccionar el tipo de filtro')
      return
    }
      
    setAlerta('')

    if(checkFiltro === 'ingrediente'){
      obtenerBebidasByIngrediente(busqueda.ingrediente)
    } else {
      obtenerBebidas(busqueda.categoria) 
    }



    // if(Object.values(busqueda).some(word => word !== '')){
    //   setAlerta('');
    //   if(busqueda.ingrediente){
    //     obtenerBebidasByIngrediente(busqueda.ingrediente)
    //   } else {
    //     obtenerBebidas(busqueda.categoria) 
    //   }
    // } else {      
    //   setAlerta('Por lo menos debes escoger un Ingrediente o una Categoría')
    // }

    // setBusqueda({
    //   ingrediente: '',
    //   categoria: ''
    // })

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
      
        <div className='d-flex justify-content-between'>
          <p className='fst-italic fs-6 text-danger'>
            *Filtre por un <span className='fw-bold'>Ingrediente</span> o por una 
            <span className='fw-bold'> Categoria</span>
          </p>
          <Link to='/favoritos' className='text-danger fw-bold text-decoration-none'>
              Favoritos ❤/
          </Link>
        </div>

      <Row>
        <div  
          onChange={(e) => setCheckFiltro(e.target.value)}
          className='d-flex'
        >
          <Col md={6}>
            <Form.Group className=' form-check'>
            <Form.Check 
              type="radio"
              name='filtro'
              id='ingrediente'
              value='ingrediente'
            />
            <Form.Label 
              htmlFor='ingrediente'
              className='form-check-label'
            >
              Selecciona un ingrediente
            </Form.Label>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className='form-check'>
            <Form.Check 
              type="radio"
              id='categoria'
              name='filtro'
              value='categoria'      
            />
            <Form.Label 
              htmlFor='categoria'
              className='form-check-label'
            >
              Selecciona una Categoria
            </Form.Label>
          </Form.Group>
          </Col>
        </div>
      </Row>

      <Row className=''>
        <Col md={6}>
          <Form.Select
            id='ingrediente'
            name='ingrediente'
            value={busqueda.ingrediente}
            onChange={handleChangeInputs}
            disabled={checkFiltro === 'categoria'}
          >
            <option value=''>--Ingrediente</option>
            {
              ingredientes.map((ingredient, ind) => (
                <option key={ind} value={ingredient.strIngredient1}>{ingredient.strIngredient1}</option>
              ))
            }
          </Form.Select>
        </Col>

        <Col md={6}>
          <Form.Select
            id='categoria'
            name='categoria'
            value={busqueda.categoria}
            onChange={handleChangeInputs}
            disabled={checkFiltro === 'ingrediente'}

          >
            <option value=''>--Selecciona Categoria</option>
            {
              categorias.map((categoria, ind) => (
                <option key={ind} value={categoria.strCategory}>{categoria.strCategory}</option>
              ))
            }
          </Form.Select>
        </Col>
      </Row>

      <Row className='justify-content-center mt-4'>
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
