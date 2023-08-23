import { PaletteMode, createTheme } from "@mui/material";
import { COLORS } from "@/config/colors";

export const theme = (mode: PaletteMode) =>
    createTheme({
        typography: {
            allVariants: {
                fontFamily: ["Roboto"].join(","),
                color: COLORS.allVariants[mode],
            },
            subtitle1: {
                color: COLORS.subtitle1[mode],
                fontSize: "15px",
                lineHeight: "19px",
                fontWeight: "600",
            },
            subtitle2: {
                color: COLORS.subtitle2[mode],
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "19px",
            },
            body1: {
                color: COLORS.subtitle1[mode],
                fontSize: "15px",
                lineHeight: "19px",
                fontWeight: "400",
            },
        },
        palette: {
            mode,
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 392,
                md: 784,
                lg: 1248,
                xl: 1584,
            },
        },
    });
