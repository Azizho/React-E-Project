import { FC, createContext, useMemo, useState, useContext } from 'react'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'

type ThemeModeContextType = {
    toggleThemeMode: () => void
    mode: "dark" | "light"
}

const getStorage = () => {
    const themeModeFromStorage = localStorage.getItem('themeMode')
    if (themeModeFromStorage) {
        if (themeModeFromStorage === "dark" || themeModeFromStorage === "light") {
            if (themeModeFromStorage === "dark") {
                return "dark"
            }
            if (themeModeFromStorage === "light") {
                return "light"
            }
            return "light"
        }
        return "light"
    }
    return "light"
}

type ThemeModeProps = {
    children: React.ReactNode
}

export const ThemeModeContext = createContext<ThemeModeContextType>({
    toggleThemeMode: () => { },
    mode: getStorage(),
})
export const ThemeModeProvider: FC<ThemeModeProps> = ({ children }) => {
    const [mode, setMode] = useState<"light" | "dark">(getStorage())
    const themeMode = useMemo(() => ({
        toggleThemeMode: () => {
            setMode((prev) => (prev === "light" ? "dark" : "light"))
            localStorage.setItem("themeMode", mode === "light" ? "dark" : "light")
        },
        mode
    }), [mode])

    const optimizeTheme = useMemo(() => {
        return theme(mode)
    }, [mode])
    return (
        <ThemeModeContext.Provider value={themeMode}>
            <ThemeProvider theme={optimizeTheme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    )
}

const useThemeMode = () => {
    return useContext(ThemeModeContext)
}

export default useThemeMode