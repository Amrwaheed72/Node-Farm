import { useQuery } from '@tanstack/react-query'
import { apiCall } from '../../services/apiCall'
export function useOverview() {
    const { data, isPending, error } = useQuery({
        queryKey: ['overview'],
        queryFn: apiCall
    })
    return { data, isPending, error }
}