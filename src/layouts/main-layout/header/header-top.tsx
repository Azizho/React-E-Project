import React, { FC } from 'react'
import { BorderCustomStack } from './style'
import { Button, Container, Stack } from '@mui/material'
import { Logo } from '@/assets/icons/logo'
import { Link } from 'react-router-dom'
import useThemeMode from '@/theme/ThemeMode'

export const HeaderTop: FC = () => {
    const { mode, toggleThemeMode } = useThemeMode()
    return (
        <BorderCustomStack>
            <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <Link to={"/"}>
                    <Logo />
                </Link>
                <Button onClick={() => {
                    toggleThemeMode()
                }} variant='contained'>
                    {mode === 'dark' ? "Light Mode" : "Dark Mode"}
                </Button>
            </Container>
        </BorderCustomStack>
    )
}
