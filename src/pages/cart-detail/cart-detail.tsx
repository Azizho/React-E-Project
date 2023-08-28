import { useGetCardDetailQuery } from '@/api/GetDataApi'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { CardDetailTop } from './components/cart-detail-top'
import { CardDetailBottom } from './components/cart-detail-bottom'


export const CardDetail = () => {
	const { id } = useParams()
	const { error, isLoading, data, isSuccess } = useGetCardDetailQuery(parseInt(id ? id : ' ') ? id : ' ')
	if (error) {
		if ('status' in error && error.status === 404) {
			return (
				<Container>
					<h1>Продукт не найден :(</h1>
				</Container>
			)
		}
	}
	return (
		<Container>
			{isSuccess && (<>
				<CardDetailTop {...data} isLoading={isLoading} />
				<CardDetailBottom id={data.id} />
			</>)}
		</Container>
	)
}
