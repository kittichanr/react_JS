import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const state = {
        isDarkMode
    }

    const toggleTheme = () => setIsDarkMode(!isDarkMode)

    return (
        <ThemeContext.Provider value={{
            ...state,
            changeTheme: toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider