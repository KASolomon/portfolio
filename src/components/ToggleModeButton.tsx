"use client"
import React, {useState, useEffect} from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
const ToggleModeButton = () => {
    const themeVars = useTheme();
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
      setIsMounted(true)
      return ()=> setIsMounted(false)
    },[])

    if(!isMounted) return null;
    const updateTheme=()=>themeVars.resolvedTheme === "dark"
         ? themeVars.setTheme("light")
         : themeVars.setTheme("dark");
    
  return (
    <Button
      className=" dark:bg-gray-800 dark:text-white dark:hover:bg-bg-gray-700 bg-gray-500 z-50 lg:p-3 p-1 h-auto rounded-[90px] fixed lg:bottom-20 lg:right-20 bottom-10 right-5 "
      onClick={updateTheme}
    >
      {themeVars.resolvedTheme === "dark" ? (
        <MdOutlineLightMode style={{ width: "1.5rem", height: "1.5rem" }} />
      ) : (
        <MdOutlineDarkMode style={{ width: "1.5rem", height: "1.5rem" }} />
      )}
    </Button>
  );
}

export default ToggleModeButton