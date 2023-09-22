import React from 'react'
import { SearchHeader, SearchInputStyled } from './styles'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchInputProps {
  quantityPost: number
  getPosts: (query?: string) => Promise<void>
}

export const SearchInput = ({ quantityPost, getPosts }: SearchInputProps) => {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchHeader>
        <p>Publicações</p>
        {quantityPost <= 1 ? (
          <p>{quantityPost} publicação</p>
        ) : (
          <p>{quantityPost} publicações</p>
        )}
      </SearchHeader>

      <SearchInputStyled
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </form>
  )
}
