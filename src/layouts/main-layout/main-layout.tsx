import { Outlet } from 'react-router-dom'
import { Header } from './header/header'

export const MainLayout = () => {
    return (
        <>
            <header><Header /></header>
            <main><Outlet /></main>
            <footer>ssss</footer>
        </>
    )
}
