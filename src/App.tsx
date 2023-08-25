import { MainLayout } from '@/layouts/main-layout';
import { Home } from '@/pages/home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' index element={<Home />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
