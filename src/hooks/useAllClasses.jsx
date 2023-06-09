import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAxiosSecure } from "./useAxiosSecure";

export const useAllClasses = ()=>{
    const [axiosSecure] = useAxiosSecure()
    const {data:allClasses=[],refetch} = useQuery({
        queryKey:['allClasses'],
        queryFn:async()=>{
            const res = await axiosSecure.get('/allClasses');
            return res.data

        }
    })
    return [allClasses,refetch]
}