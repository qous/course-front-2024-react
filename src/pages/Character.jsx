    import { useParams } from "react-router-dom"
    import { useCharacter } from "../hooks/useCharacter"
    import { useLocation } from "../hooks/useLocation"
    import { Header } from "../components/header/Header"
    import { CharacterInfo } from "../components/info/Info"
    import { Locations } from "../components/locations/locations"

    export const Character = () => {
        const { characterId } = useParams()
        const { data: character, isFetched } = useCharacter(characterId)

        
        const locationUrl = character?.location?.url.split('/').pop()
        const { data: location, isLocationFetched } = useLocation(locationUrl)

        console.log(location)

        return (
            <>
                <Header />
                <div className="content">
                    {isFetched && <CharacterInfo data={character} location={location} />}
                    {/*isLocationFetched && <Locations data={location}/>*/}
                </div>
            </>
        )
    }