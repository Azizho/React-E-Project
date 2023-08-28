import { useGetCardIdNeQuery } from '@/api/GetDataApi'
import { CustomSlider, SliderNextArrow, SliderPrevArrow } from '@/components/CustomSlider'
import { Card } from '@/components/card'
import { Grid } from '@mui/material'
import { FC } from 'react'

const settings = {
	dots: true,
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	nextArrow: <SliderNextArrow />,
	prevArrow: <SliderPrevArrow />
}

export const CardDetailBottom: FC<{ id: number }> = ({ id }) => {
	const { isLoading, data, isSuccess } = useGetCardIdNeQuery(id)
	return (
		<CustomSlider settings={settings}>
			{isSuccess && data?.map((item) =>
				<Grid container gap="24px" rowSpacing={1} key={item.id} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
					<Grid item xs={11}>
						<Card {...item} isLoading={isLoading} />
					</Grid>
				</Grid>
			)}
		</CustomSlider>
	)
}
