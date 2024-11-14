"use client"
import React, {useState, useEffect} from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
const ToggleModeButton = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false)

    useEffect(()=>{
      setIsMounted(true)
      return ()=> setIsMounted(false)
    },[])

    if(!isMounted) return null;
  return (
    <Button className=" dark:bg-gray-800 dark:text-white dark:hover:bg-bg-gray-700 bg-gray-500 z-50 p-3 h-auto rounded-[90px] fixed bottom-20 right-20 " onClick={()=>{resolvedTheme === 'dark'? setTheme('light') :setTheme('dark')}}>
      {resolvedTheme === "dark" ? (
      <MdOutlineLightMode style={{ width: "3rem", height: "3rem", fontWeight : 100 }} />
        ) : (
          <MdOutlineDarkMode style={{ width: '3rem', height:"3rem", fontWeight: 100 }}/>
        )}
    </Button>
  );
}

export default ToggleModeButton