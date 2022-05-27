import { Button } from '../components/Button'
import { useEffect, useState } from 'react'
import { GenreResponseProps } from '../App'

import { api } from '../services/api'
import '../styles/sidebar.scss'

interface SideBarProps {
  selectedGenreId: number
  setSelectedGenre: React.Dispatch<React.SetStateAction<GenreResponseProps>>
  setSelectedGenreId: React.Dispatch<React.SetStateAction<number>>
}

export function SideBar({
  selectedGenreId,
  setSelectedGenre,
  setSelectedGenreId,
}: SideBarProps) {
  // Complete aqui

  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data)
    })
  }, [])

  useEffect(() => {
    api
      .get<GenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => {
        setSelectedGenre(response.data)
      })
  }, [selectedGenreId])

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
