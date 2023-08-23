import React from 'react'
import { theme } from './theme';
import { ThemeProvider } from '@mui/material';

type ThemeModeContextType = {
    toggleThemeMode: () => void;
    mode: "dark" | "light"
}

type ThemeModeProps = {
    children: React.ReactNode;
}

export const ThemeModeContext = React.createContext<ThemeModeContextType>({
    toggleThemeMode: () => { },
    mode: "light",
})
export const ThemeModeProvider: React.FC<ThemeModeProps> = ({ children }) => {
    const [mode, setMode] = React.useState<"light" | "dark">("light")
    const themeMode = React.useMemo(() => ({
        toggleThemeMode: () => {
            setMode((prev) => (prev === "light" ? "dark" : "light"));
            localStorage.setItem("themeMode", mode === "light" ? "dark" : "light")
        },
        mode
    }), [mode])

    const optimizateTheme = React.useMemo(() => {
        return theme(mode)
    }, [mode])
    return (
        <ThemeModeContext.Provider value={themeMode}>
            <ThemeProvider theme={optimizateTheme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    )
}

const useThemeMode = () => React.useContext(ThemeModeContext);

export default useThemeMode;