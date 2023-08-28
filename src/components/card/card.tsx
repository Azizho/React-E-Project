import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { CardProps } from './type'
import { CartCustomImg, CartItem } from './style'
import { RatingIcon } from '@/assets/icons/rating-icon'

export const Card: FC<CardProps> = ({
	id,
	url,
	title,
	rating,
	text,
	duration,
	price,
	isLoading,
}) => {
	if (isLoading) {
		return (
			<Stack display={'inline-flex'} direction={'column'} gap={'15px'}>
				<Box
					sx={{
						marginRight: 0.5,
						my: 5,
					}}
				>
					<Skeleton
						sx={{
							borderRadius: '6px',
						}}
						variant='rectangular'
						width={'302px'}
						height={'290px'}
					/>
					<Box sx={{ pt: '3px' }}>
						<Skeleton
							width={'100%'}
							height={'30px'}
							variant='text'
						/>
						<Skeleton width='100%' height={'30px'} variant='text' />
					</Box>
				</Box>
			</Stack>
		)
	}

	const trimPrice = price?.trim().split(/\s+/)
	return (
		<CartItem to={`/cart-detail/${id}`}>
			<Box maxWidth={'302px'}>
				<CartCustomImg src={url} alt={title} />
				<Stack
					direction={'row'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					<Typography variant={'subtitle1'}>{title}</Typography>
					<Stack direction={'row'} alignItems={'center'} gap={'4px'}>
						<RatingIcon />
						<Typography variant='body1'>{rating}</Typography>
					</Stack>
				</Stack>
				<Typography variant={'subtitle2'}>{text}</Typography>
				<Typography variant={'subtitle2'}>{duration}</Typography>
				<Stack direction={'row'} alignItems={'center'} gap={'4px'}>
					<Typography variant={'subtitle1'}>
						{trimPrice?.[0]}
					</Typography>
					<Typography variant={'body1'}>{trimPrice?.[1]}</Typography>
				</Stack>
			</Box>
		</CartItem>
	)
}
