import { Fragment } from 'react'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { MovieCard } from './MovieCard'

import '../styles/content.scss'

interface MovieProps {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

interface ContentProps {
  selectedGenreId: number
  genre: string
}

export function Content({ selectedGenreId, genre }: ContentProps) {
  // Complete aqui

  const [movies, setMovies] = useState<MovieProps[]>([])

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => {
        setMovies(response.data)
      })
  }, [selectedGenreId])

  return (
    <Fragment>
      <div className='container'>
        <header>
          <span className='category'>
            Categoria:<span> {genre}</span>
          </span>
        </header>

        <main>
          <div className='movies-list'>
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
    </Fragment>
  )
}
