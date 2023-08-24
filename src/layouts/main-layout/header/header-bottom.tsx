import { Container, Stack } from '@mui/material'
import { SearchTextField } from './style'
import React from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setDebounceValue } from '@/slices/debounceSlice'

export const HeaderBottom = () => {
    const [searchText, setSearchText] = React.useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchText(e.target.value)
    }
    const debounceValue = useDebounce(searchText !== '' ? searchText : "  ");
    const storeDebounce = useAppSelector(state => state.debounceSlice)
    const dispatch = useAppDispatch()
    React.useEffect(() => {
        dispatch(setDebounceValue({ debounceValue }))
    }, [debounceValue])
    return (
        <Container sx={{ paddingBottom: "59px" }}>
            <Stack justifyContent="center" alignItems="center" display={"flex"}>

                <SearchTextField
                    placeholder={`Search`}
                    value={searchText}
                    onChange={handleSearch}
                />
            </Stack>
        </Container>
    )
}
