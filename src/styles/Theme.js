import React, { createContext, useState, useContext } from 'react';
const ThemeContext = createContext();

export const Theme = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const toggleTheme = () => setIsDarkTheme(prev => !prev);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
