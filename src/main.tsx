import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeModeProvider } from "@/theme/ThemeMode";
import "./main.css"

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeModeProvider>
                <App />
                <CssBaseline />
            </ThemeModeProvider>
        </Provider>
    </BrowserRouter>
);
