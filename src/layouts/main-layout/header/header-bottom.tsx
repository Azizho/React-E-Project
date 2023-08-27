import { Container, Stack } from '@mui/material'
import { SearchTextField } from './style'
import { FC, useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useAppDispatch } from '@/store/hooks'
import { setDebounceValue } from '@/slices/debounceSlice'

export const HeaderBottom: FC = () => {
    const [searchText, setSearchText] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchText(e.target.value)
    }
    const debounceValue = useDebounce(searchText)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setDebounceValue({ debounceValue }))
    }, [debounceValue, dispatch])
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
