import { ChooseIcon } from '@/assets/icons/choose'
import { Stack, Typography } from '@mui/material'

export const FooterLeft = () => {
	return (
		<Stack direction={{ xl: "row", lg: "row", md: "column" }} gap={'10px'} alignItems={'center'}>
			<Typography variant='body1'>&copy; 2023 Airbnb, Inc.</Typography>
			<Typography variant='body1'>·</Typography>
			<Typography variant='body1'>Terms</Typography>
			<Typography variant='body1'>·</Typography>
			<Typography variant='body1'>Sitemap</Typography>
			<Typography variant='body1'>·</Typography>
			<Typography variant='body1'>Privacy</Typography>
			<Typography variant='body1'>·</Typography>
			<Typography variant='body1'>Your Privacy Choices</Typography>
			<ChooseIcon />
		</Stack>
	)
}
