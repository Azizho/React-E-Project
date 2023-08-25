import { FC } from 'react'
import { CardMap } from './components/CardMap'
import { HomeSlider } from './components/HomeSlider'
import { CardsSection } from './style'

export const Home: FC = () => {
	return (
		<>
			<section id='slider'>
				<HomeSlider />
			</section>
			<CardsSection id='cards'>
				<CardMap />
			</CardsSection>
		</>
	)
}
