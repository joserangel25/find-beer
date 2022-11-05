import { useEffect } from 'react'
import { Alert, Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner'

import Corazon from './Corazon'
import Alerta from './Alerta'

export default function ModalBebida() {

  const { 
          modal, 
          handleClickModal, 
          detailBebida, 
          setDetailBebida, 
          loading, 
          favoritos, 
          addToFavoriteLS,
          alerta } = useBebidas()

  const isFavorite = () => {
    return favoritos.some(bebida => bebida.idDrink === detailBebida.idDrink)
   }

  useEffect(() => {
    if(!modal){
      setDetailBebida({})
    }
    
  }, [modal])
  
  const mostrarIngredientes = () => {
    let ingredientes = []

    for(let i = 1; i < 16; i++){
      if(detailBebida[`strIngredient${i}`]){
        ingredientes.push(
          <li key={`strIngredient${i}`}>{detailBebida[`strIngredient${i}`]} - {detailBebida[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes
  }

  return (
    <Modal show={modal} onHide={handleClickModal}>
      {
        loading ?
        <Modal.Body className='row justify-content-center'>
          <Spinner />
        </Modal.Body>
        :
        <>
          
          <Image 
            src={detailBebida.strDrinkThumb}
            alt={`Imagen de la bebida ${detailBebida.strDrink}`}
            style={{height: '330px', objectFit: 'cover'}}
            // rounded={true}
          />
            {
              alerta && <Alerta />
            }
          <Modal.Header>
            <Modal.Title className='mx-auto text-cetner'>
              {detailBebida.strDrink}
            </Modal.Title>

            <Corazon 
              favorito={isFavorite} 
              addToFavoriteLS={addToFavoriteLS} 
              bebida={detailBebida}
            />

          </Modal.Header>

          <Modal.Body>
            <p>{detailBebida.strInstructions}</p>
           <div className='px-3'>
              <h5>Ingredientes y cantidad</h5>
              {
                mostrarIngredientes()
              }
            </div>
          </Modal.Body>
        </>
      }
    </Modal>
  )
}
