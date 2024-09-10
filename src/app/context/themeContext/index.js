

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{

    const [theme, setTheme] = useState('theme1')

    useEffect(() =>{
        const savedTheme = localStorage.getItem("theme") || 'theme1'
        setTheme(savedTheme)
    }, [])

    const toggleTheme = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)

    }
    return(
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            {{children}}
        </ThemeContext.Provider>
        

    )
}

export const useTheme = ()=> useContext(ThemeContext);