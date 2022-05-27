import { useState } from 'react'

import { Header } from './components/Header'
import { SideBar } from './components/SideBar'
import { Content } from './components/Content'

import './styles/global.scss'

export interface GenreResponseProps {
  id: number
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'
  title: string
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  )

  return (
    <Header>
      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenre={setSelectedGenre}
        setSelectedGenreId={setSelectedGenreId}
      />
      <Content genre={selectedGenre.title} selectedGenreId={selectedGenreId} />
    </Header>
  )
}
