import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAllClasses = ()=>{
    const {data:allClasses=[],refetch} = useQuery({
        queryKey:['allClasses'],
        queryFn:async()=>{
            const res = await axios.get('http://localhost:5000/allClasses');
            return res.data

        }
    })
    return [allClasses,refetch]
}