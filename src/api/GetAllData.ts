import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const GetAllData = createApi({
	reducerPath: 'GetAllData',
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
	}),
});

export const { useGetDataQuery, useGetBannersQuery } = GetAllData;
