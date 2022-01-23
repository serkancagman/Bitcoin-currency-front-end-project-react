import React from "react";

export const HeaderContext = React.createContext();

export const HeaderProvider = ({children})=>{

    const [navPosition, setNavPosition] = React.useState({position:""})
    const [isNavSticky,setIsNavSticky] = React.useState(false)
  
    React.useEffect(()=>{
      window.addEventListener("scroll",(handleScroll))
    },[])
    React.useEffect(()=>{
  
      if(navPosition.position >= 92){
        setIsNavSticky(true)
      }else if(navPosition.position < 92){
        setIsNavSticky(false)
      }
  
  
    },[navPosition.position])
  
    const handleScroll = () =>{
      let currentPos;
  
      currentPos = window.pageYOffset;
      setNavPosition({position:currentPos})
    }


    const values ={
        isNavSticky
    }









    return <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
}