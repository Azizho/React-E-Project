import { Button, Typography, TextField } from "@mui/material";
import React from "react";
import useThemeMode from "@/theme/ThemeMode";
import { Logo } from "@/assets/icons/logo";
import { useDebounce } from "@/hooks/useDebounce";

const App: React.FC = () => {
    const { toggleThemeMode } = useThemeMode()
    const [inValue, setInValue] = React.useState("")
    const debinValue = useDebounce(inValue, 500)
    return <>
        <Typography variant="subtitle1">
            sss
        </Typography>
        <TextField variant="outlined" value={inValue} onChange={(e) => {
            setInValue(e.target.value)
        }} />
        <Logo />
        <Button onClick={() => {
            toggleThemeMode()
        }} variant="outlined">Click</Button>
    </>;
};

export default App;
