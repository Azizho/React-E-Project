import { FC } from 'react'
import { HeaderTop } from './header-top'
import { HeaderBottom } from './header-bottom'
import { useLocation } from 'react-router-dom'

export const Header: FC = () => {
    const { pathname } = useLocation()
    if (pathname.startsWith("/cart-detail/")) {
        return (
            <>
                <HeaderTop />
            </>
        )
    }
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
        </>
    )
}
