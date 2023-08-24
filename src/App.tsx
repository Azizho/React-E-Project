import React from "react"
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/main-layout";
import { Home } from "@/pages/home";
const App: React.FC = () => {
    return <>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" index element={<Home />} />
            </Route>
        </Routes>
    </>;
};

export default App;
