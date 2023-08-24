import { FC } from 'react'
import { HomeSlider } from './components/HomeSlider'
import { CardMap } from './components/CardMap'
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
