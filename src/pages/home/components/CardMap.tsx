import { Card } from '@/components/card/card';
import { useGetDataQuery } from '@/api/GetAllData';
import { useAppSelector } from '@/store/hooks';
import { DataType } from '@/types/DataType';
import { Container, Grid, Typography } from '@mui/material';
const emptyArray = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
	{ id: 7 },
	{ id: 8 },
	{ id: 9 },
	{ id: 10 },
	{ id: 11 },
	{ id: 12 },
];

export const CardMap = () => {
	const debounceValue = useAppSelector(
		state => state.debounceSlice.debounceValue
	);
	const { data, isLoading, isError } = useGetDataQuery(debounceValue);
	if (isLoading || isError) {
		return (
			<Container>
				<Grid container rowSpacing={'45.11px'} columnSpacing={'24px'}>
					{emptyArray.map((item: { id: number }) => (
						<Grid item xl={3} key={item.id}>
							<Card isLoading={true} key={item.id} />
						</Grid>
					))}
				</Grid>
			</Container>
		);
	}

	if (data.length <= 0) {
		return (
			<Container>
				<Typography variant={'h1'}>Продукт не найден :(</Typography>
			</Container>
		);
	}
	return (
		<Container>
			<Grid container rowSpacing={'45.11px'} columnSpacing={'24px'}>
				{data?.map((item: DataType) => (
					<Grid item xl={3} key={item.id}>
						<Card key={item.id} {...item} isLoading={false} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
