import React from "react";

export const HeaderContext = React.createContext();

export const HeaderProvider = ({children})=>{

    const [navPosition, setNavPosition] = React.useState({position:""})
    const [isNavSticky,setIsNavSticky] = React.useState(false)
    const [currentScreen, setCurrentScreen] = React.useState(window.innerWidth)
    React.useEffect(()=>{
      window.addEventListener("scroll",(handleScroll))
    },[])
    React.useEffect(()=>{
      console.log(currentScreen)
    },[currentScreen])
    React.useEffect(()=>{
      
      if(window.innerWidth > 767){

      
      if(navPosition.position >= 92){
        setIsNavSticky(true)
      }else if(navPosition.position < 92){
        setIsNavSticky(false)
      }
    }else{
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