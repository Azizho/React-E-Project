import { FC } from 'react'
import { CardDetailTopProps } from '../types'
import { Skeleton, Stack, Typography } from '@mui/material'
import { CardDetailImg } from '../style'
import { RatingIcon } from '@/assets/icons/rating-icon'

export const CardDetailTop: FC<CardDetailTopProps> = ({ duration, price, rating, text, title, url, isLoading }) => {
	const trimPrice = price?.trim().split(/\s+/)
	if (isLoading) {
		return <>
			<Stack direction={"row"} justifyContent={"space-between"} pb={"32px"}>
				<Stack>
					<Skeleton width={"695px"} height={"695px"} />
				</Stack>
				<Stack direction={"column"}>
					<Skeleton variant='text' width={"150px"} />
					<Stack direction={"row"} alignItems={'center'} gap={'4px'} textAlign={'right'}>
						<Skeleton variant='rounded' width={'50px'} />
						<Skeleton variant='text' width={"50px"} />
					</Stack>
					<Skeleton variant='text' width={"100px"} />
					<Skeleton variant='text' width={"100px"} />
					<Stack direction={'row'} alignItems={'center'} gap={'4px'}>
						<Skeleton variant={'text'} width={'50px'} />
						<Skeleton variant={'text'} width={'50px'} />
					</Stack>
				</Stack>
			</Stack>
		</>
	}
	return (
		<>
			<Stack direction={"row"} justifyContent={"space-between"} pb={"32px"}>
				<Stack>
					<CardDetailImg src={url} alt={text} />
				</Stack>
				<Stack direction={"column"}>
					<Typography variant='subtitle1'>{title}</Typography>
					<Stack direction={"row"} alignItems={'center'} gap={'4px'} textAlign={'right'}>
						<RatingIcon />
						<Typography variant='body1'>{rating}</Typography>
					</Stack>
					<Typography variant='subtitle2'>{text}</Typography>
					<Typography variant='subtitle2'>{duration}</Typography>
					<Stack direction={'row'} alignItems={'center'} gap={'4px'}>
						<Typography variant={'subtitle1'}>
							{trimPrice?.[0]}
						</Typography>
						<Typography variant={'body1'}>{trimPrice?.[1]}</Typography>
					</Stack>
				</Stack>
			</Stack>
		</>
	)
}
