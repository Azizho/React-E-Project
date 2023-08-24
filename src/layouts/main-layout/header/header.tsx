import React, { FC } from 'react'
import { HeaderTop } from './header-top'
import { HeaderBottom } from './header-bottom'

export const Header: FC = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
        </>
    )
}
