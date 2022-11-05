import { useContext } from 'react'
import { CategoriasContext } from '../context/CategoriaProvider'

export default function useCategorias() {
  return useContext(CategoriasContext)
}
