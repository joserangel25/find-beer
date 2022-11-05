import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react'

export const BebidasContext = createContext();

export default function BebidasProvider({children}) {

  const [ bebidas, setBebidas ] = useState([]);
  const [ modal, setModal ] = useState(false);

  const [ detailBebida, setDetailBebida ] = useState({})
  const [ loading, setLoading ] = useState(false);
  const [ loadingDetail, setLoadingDetail ] = useState(false);

  const [ favoritos, setFavoritos ] = useState( JSON.parse(localStorage.getItem('bebidas')) || []);

  const [ alerta, setAlerta ] = useState('');

  const obtenerBebidas = async (datos) => {
    setLoading(true)
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
      const { data: { drinks } } = await axios(url);
      setBebidas(drinks)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleClickModal = () => {
    setModal(!modal)
  }

  const getBebidaById = async id => {
    setLoadingDetail(true)
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      const { data: { drinks } } = await axios(url);
      setDetailBebida(drinks[0])

    } catch (error) {
      console.log(error)
    } finally {
      setLoadingDetail(false)
    }
  }

  const actionsToFavoriteLS = (bebida) => {
    if(favoritos.some(bebidaState => bebidaState.idDrink === bebida.idDrink)){
      const newFavoritos = favoritos.filter(bebidaState => bebidaState.idDrink !== bebida.idDrink);
      setFavoritos(newFavoritos)
      setAlerta('quitado de tus favoritos')
    } else {
      setFavoritos([...favoritos, bebida])
      setAlerta('agregado a tus favoritos')
    }

    setTimeout(() => {
      setAlerta('')
    }, 1500);
  }

  

  useEffect(() => {
    localStorage.setItem('bebidas', JSON.stringify(favoritos))   
  }, [favoritos])
  

  const value= {
    nombre: 'Jose',
    bebidas,
    obtenerBebidas,
    modal,
    handleClickModal,
    getBebidaById,
    detailBebida,
    setDetailBebida,
    loading,
    loadingDetail,
    favoritos,
    actionsToFavoriteLS,
    alerta, 
    setAlerta
  }

  return (
    <BebidasContext.Provider value={value}>
      {children}
    </BebidasContext.Provider>
  )
}
