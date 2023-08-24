import { useGetBannersQuery } from '@/api/GetAllData'
import { CustomSlider } from '@/components/CustomSlider'
import { Box, Container, Skeleton, Stack } from '@mui/material'
import React, { FC } from 'react'

export const HomeSlider: FC = () => {
    const { data, isLoading, isError } = useGetBannersQuery(null)
    if (isLoading || isError || data.length < 0) {
        return (
            <Container sx={{ paddingBottom: "45px" }}>
                <CustomSlider>

                    <Skeleton width="1280px"
                        height="226px" />
                    <Skeleton width="1280px"
                        height="226px" />
                    <Skeleton width="1280px"
                        height="226px" />
                </CustomSlider>
            </Container>
        )
    }
    return (
        <Container sx={{ paddingBottom: "45px" }}>
            <CustomSlider>
                {data.map((item: { id: number, url: string }) => (
                    <Stack maxWidth={1280} maxHeight={326} direction={'column'} key={item.id}>
                        <img src={item.url} alt={item.url} />
                    </Stack>
                ))}
            </CustomSlider>
        </Container>
    )
}
