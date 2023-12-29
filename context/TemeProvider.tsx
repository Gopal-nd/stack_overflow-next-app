"use client"

import {useContext, createContext, useState, useEffect} from 'react'

interface Props {
    children: React.ReactNode
  }
interface ThemeContextType{
 mode:string;
 setmode: (mode:string)=>void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: Props) =>{
    const [mode, setmode] = useState('');

    const handleThemeChange= ()=>{
        if(mode==='dark'){
            setmode('light');
            document.documentElement.classList.add('light');
        }else{
            setmode('dark');
            document.documentElement.classList.add('dark');
        }

        useEffect(()=>{
            handleThemeChange();
        },[mode])
        return (
            <ThemeContext.Provider value={{mode,setmode}}>
                {children}
            </ThemeContext.Provider>
        )
    }
}
export function useTheme(){
    const context = useContext(ThemeContext);

    if(context=== undefined){
        throw new Error('usetheme must be used within a themeprovider')
        return context
    }
}