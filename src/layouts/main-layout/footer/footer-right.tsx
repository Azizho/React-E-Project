import { WorldIcon } from '@/assets/icons/worldicon'
import { Select } from '@/components/select'
import useThemeMode from '@/theme/ThemeMode'
import {
	Stack,
	MenuItem,
	Typography,
	SelectChangeEvent,
} from '@mui/material'
import { useState } from 'react'

export const FooterRight = () => {
	const [languageValue, setLanguageValue] = useState<unknown>('english')
	const [priceValue, setPriceValue] = useState<unknown>('usd')
	const { mode } = useThemeMode()
	const handleLanguageChange = (e: SelectChangeEvent<unknown>) => {
		setLanguageValue(e.target.value)
	}
	const handlePriceChange = (e: SelectChangeEvent<unknown>) => {
		setPriceValue(e.target.value)
	}
	return (
		<Stack direction={{ xl: "row", lg: "row", md: "column" }} alignItems={'center'} gap={'24px'}>
			<Stack direction={'row'} gap={'8px'} alignItems={'center'}>
				<WorldIcon mode={mode} />
				<Select onChange={handleLanguageChange} value={languageValue}>
					<MenuItem value='english'>
						<Typography variant='subtitle1'>
							English (US)
						</Typography>
					</MenuItem>
					<MenuItem value='russian'>
						<Typography variant='subtitle1'>Russian</Typography>
					</MenuItem>
				</Select>
			</Stack>
			<Stack direction={'row'} gap={'8px'} alignItems={'center'}>
				<Typography variant='subtitle1'>$</Typography>
				<Select onChange={handlePriceChange} value={priceValue}>
					<MenuItem value='usd'>
						<Typography variant='subtitle1'>
							USD
						</Typography>
					</MenuItem>
					<MenuItem value='usz'>
						<Typography variant='subtitle1'>USZ</Typography>
					</MenuItem>
					<MenuItem value='rub'>
						<Typography variant='subtitle1'>RUB</Typography>
					</MenuItem>
				</Select>
			</Stack>
		</Stack>
	)
}
