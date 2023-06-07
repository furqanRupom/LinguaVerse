import { useEffect, useState } from "react"

export const useNavbar = ()=>{
    const [navbar,setNavbar] = useState(false);
    useEffect(() => {
      const changeBackground = () => {
          console.log(window.scrollY)
          if (window.scrollY >= 66) {
            setNavbar(true)
          } else {
            setNavbar(false)
          }
        }
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })
    return [navbar]
}
