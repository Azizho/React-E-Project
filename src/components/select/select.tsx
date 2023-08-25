import { ArrowBottom } from '@/assets/icons/arrow-bottom'
import {
	SelectChangeEvent,
	Select as SelectEl,
	SxProps,
	Theme,
} from '@mui/material'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type SelectProps = {
	onChange?: (
		event: SelectChangeEvent<unknown>,
		child: React.ReactNode
	) => void
	value?: string | unknown
	children?: ReactNode
	sx?: SxProps<Theme>
}

export const Select: FC<SelectProps> = ({
	onChange,
	value,
	children,
	sx,
	...props
}) => {
	return (
		<StyleSelect
			value={value}
			onChange={onChange}
			variant='outlined'
			IconComponent={item => <ArrowBottom {...item} />}
			sx={sx}
			{...props}
		>
			{children}
		</StyleSelect>
	)
}

export const StyleSelect = styled(SelectEl)`
	.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
		padding: 0;
	}
	box-shadow: 'none';
	.MuiOutlinedInput-notchedOutline {
		border: 0;
	}
	&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
		border: 0;
	}
	&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border: 0;
	}
	[role='button'] {
		color: #f1f1f1;
		font-size: 16px;
		font-weight: 600;
	}
`
