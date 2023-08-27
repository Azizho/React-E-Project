import { StyledFooterStack } from './style'
import {
	Container,
	Stack,
} from '@mui/material'
import { FooterLeft } from './footer-left'
import { FooterRight } from './footer-right'

export const Footer = () => {
	return (
		<StyledFooterStack>
			<Container>
				<Stack
					direction={{ xl: "row", lg: "row", md: "row", sm: "column" }}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<FooterLeft />
					<FooterRight />
				</Stack>
			</Container>
		</StyledFooterStack>
	)
}
