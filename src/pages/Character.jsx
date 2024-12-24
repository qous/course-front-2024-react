    import { useParams } from "react-router-dom"
    import { useCharacter } from "../hooks/useCharacter"
    import { useLocation } from "../hooks/useLocation"
    import { Header } from "../components/header/Header"
    import { CharacterInfo } from "../components/info/Info"
    import { Locations } from "../components/locations/locations"

    export const Character = () => {
        const { characterId } = useParams()
        const { data: character, isFetched } = useCharacter(characterId)

        
        const locationUrl = character?.location?.url
        const locationId = locationUrl ? locationUrl.split('/').pop() : null
        const { data: location, isLocationFetched } = useLocation(locationId)

        console.log(location)

        return (
            <>
                <Header />
                <div className="content">
                    {isFetched && <CharacterInfo data={character} />}
                    {/*isLocationFetched && <Locations data={location}/>*/}
                </div>
            </>
        )
    }
