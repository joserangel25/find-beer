import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react'

export const CategoriasContext = createContext();



export default function CategoriaProvider({children}) {

  const [ categorias, setCategorias ] = useState([]);
  const [ ingredientes, setIngredientes ] = useState([]);

  const obtenerCategoria = async () => {
    try {
      const urlCategorias = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
      const urlIngredientes = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
      const [categoriasList, ingriendientesList] = await Promise.all([axios(urlCategorias), axios(urlIngredientes)])
      setCategorias(categoriasList.data.drinks)
      setIngredientes(ingriendientesList.data.drinks)
       // const { data: { drinks } } = await axios(urlCategorias);
      // setCategorias(drinks)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerCategoria()
  }, [])
  

  const value= {
    nombre: 'Jose',
    categorias,
    ingredientes
  }
  return (
    <CategoriasContext.Provider value={value}>
      {children}
    </CategoriasContext.Provider>
  )
}
