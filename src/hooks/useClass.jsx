import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"
import axios from "axios"
import { useAxiosSecure } from "./useAxiosSecure"

export const useClass = ()=>{
    const {user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    console.log(user?.email)

    const {data:classes=[],refetch} = useQuery({
        queryKey:['classes',user?.email],
        queryFn:async()=>{
            const res =await axiosSecure.get(`http://localhost:5000/classes?email=${user?.email}`)
            return res.data
        }
    })
    return [classes,refetch]
}