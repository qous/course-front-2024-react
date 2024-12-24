import { characters } from "../api/api"
import { useQuery } from "@tanstack/react-query"

export const useLocation = (locationUrl) => {
    return useQuery({
        queryFn: () => characters.getLocation(locationUrl),
        queryKey: ['location', locationUrl],
        enabled: !!locationUrl,
        select: data => data.data
    })
}
