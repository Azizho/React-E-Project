import { FC } from 'react'

type ArrowBottomPropsType = {
	className?: string
}

export const ArrowBottom: FC<ArrowBottomPropsType> = ({ className }) => {
	return (
		<svg
			width='17'
			height='17'
			viewBox='0 0 17 17'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M2.95312 10.7969L8.59957 5.15041C8.79483 4.95515 9.11142 4.95515 9.30668 5.15041L14.9531 10.7969'
				stroke='#222222'
				strokeWidth='2'
			/>
		</svg>
	)
}
