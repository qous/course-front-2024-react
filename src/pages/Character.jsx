import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter"
import { Card } from "../components/card/Card"

export const Character = () => {
    const { characterId } = useParams()
    const { data: character, isFetched } = useCharacter(characterId)

    return (
        <>
            {isFetched && <Card data={character} />}
        </>
    )
}