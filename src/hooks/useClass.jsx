import { useQuery } from "@tanstack/react-query"
import { useAuth } from "./useAuth"
import axios from "axios"

export const useClass = ()=>{
    const {user,loading} = useAuth()
    console.log(user?.email)

    const {data:classes=[],refetch} = useQuery({
        queryKey:['classes',user?.email],
        queryFn:async()=>{
            const res =await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    return [classes,refetch]
}