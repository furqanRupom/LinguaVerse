import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"
import { useAxiosSecure } from "./useAxiosSecure"

export const useSelectedClasses = ()=>{
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const {data:selectedClasses=[],refetch} = useQuery({
        queryKey:['email',user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosSecure.get(`selectClasses/${user?.email}`)
            return res.data
        }
    })
    return [selectedClasses,refetch]
}