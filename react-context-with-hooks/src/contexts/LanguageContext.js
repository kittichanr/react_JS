import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('english')
    const state = {
        language
    }

    const changeLanguage = (e) => setLanguage(e.target.value)

    return (
        <LanguageContext.Provider value={{
            ...state,
            changeLanguage
        }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider

export const withLanguageContext = Component => props => {
    return (
        <LanguageContext.Consumer>
            {value => <Component languageContext={value} {...props} />}
        </LanguageContext.Consumer>
    )
}