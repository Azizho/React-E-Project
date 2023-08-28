import { MainLayout } from '@/layouts/main-layout'
import { Home, CardDetail } from '@/pages'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' index element={<Home />} />
					<Route path={'/cart-detail/:id'} element={<CardDetail />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
