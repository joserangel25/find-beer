import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import useBebidas from '../hooks/useBebidas';


export default function Corazon({favorito, bebida}) {

  const { actionsToFavoriteLS } = useBebidas();

  const handleClick = () => {
    // console.log('clic en fav')
    actionsToFavoriteLS(bebida)
  }

  
  return (
    <>
      {
        favorito() ?
        <FcLike
          size={30}
          style={{cursor: 'pointer'}} 
          onClick={handleClick}
        />
        : 
        <FcLikePlaceholder 
          size={30}
          style={{cursor: 'pointer'}} 
          onClick={handleClick}
        />
      }
    </>
  )
}
