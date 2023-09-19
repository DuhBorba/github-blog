import React from 'react'
import { SearchHeader, SearchInputStyled } from './styles'

export const SearchInput = () => {
  return (
    <>
      <SearchHeader>
        <p>Publicações</p>
        <p>6 publicações</p>
      </SearchHeader>

      <SearchInputStyled type="text" placeholder='Buscar conteúdo' />
    </>
  )
}
