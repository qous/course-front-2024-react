import { Header } from "../components/header/Header.jsx"
import { Card } from "../components/card/Card.jsx"
import { Paginator } from "../components/Shared/Paginator/Paginator.jsx"
import { useCharacters } from "../hooks/useAllCharacters.js"
import { useState } from "react"
import "../App.css"

export const Home = () => {
  const [page, setPage] = useState(1)
  const { data: charactersData, isFetched} = useCharacters({ page: page })

  return (
    <>
      <Header />
      <div className="wrapper">
        {isFetched ? (
          charactersData?.results.map(el => (
            <Card key={el.id} data={el} />
          ))
        ) : (
          <p>Fetching...</p>
        )}
      </div>
      <Paginator
        pages={charactersData?.info?.pages}
        pressHandler={setPage}
        prev={charactersData?.info?.prev}
        next={charactersData?.info?.next}
        {...{page}}
      />
    </>
  )
}
