import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Formulario from '../components/Formulario';

import ListadoBebidas from '../components/ListadoBebidas'
import Cargando from '../components/Spinner';
import useBebidas from '../hooks/useBebidas'

export default function Home() {

  const { loading, bebidas } = useBebidas();

  return (
    <>
      <Formulario />

      {
        loading ?
        <div className='row justify-content-center py-5'>
          <Cargando />
        </div>
        :
        <ListadoBebidas bebidas={bebidas}/>
      }
    </>
  )
}