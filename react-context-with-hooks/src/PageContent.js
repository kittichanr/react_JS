import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

const PageContent = ({ children }) => {
    const { isDarkMode } = useContext(ThemeContext)

    const styles = {
        backgroundColor: isDarkMode ? 'black' : 'white',
        width: '100vw',
        height: '100vh'
    }
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default PageContent
