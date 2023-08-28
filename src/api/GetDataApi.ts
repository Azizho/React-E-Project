import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type getCardIdNeType = {
	id: number;
	title: string;
	url: string;
	price: string;
	text: string;
	rating: string;
	duration: string;
};
export const GetDataApi = createApi({
	reducerPath: 'GetDataApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL,
	}),

	endpoints: builds => ({
		getData: builds.query({
			query: (data: string) => `/data${data ? `?q=${data}` : ' '}`,
		}),
		getBanners: builds.query({
			query: () => `/banners`,
		}),
		getCardDetail: builds.query({
			query: (id: string | undefined) => `/data/${id}`,
		}),
		getCardIdNe: builds.query<getCardIdNeType[], number>({
			query: id => `/data?id_ne=${id}`,
		}),
	}),
});

export const {
	useGetDataQuery,
	useGetBannersQuery,
	useGetCardDetailQuery,
	useGetCardIdNeQuery,
} = GetDataApi;
