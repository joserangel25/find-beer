import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react'

export const CategoriasContext = createContext();



export default function CategoriaProvider({children}) {

  const [ categorias, setCategorias ] = useState([]);

  const obtenerCategoria = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const { data: { drinks } } = await axios(url);
      setCategorias(drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerCategoria()
  }, [])
  

  const value= {
    nombre: 'Jose',
    categorias
  }
  return (
    <CategoriasContext.Provider value={value}>
      {children}
    </CategoriasContext.Provider>
  )
}
