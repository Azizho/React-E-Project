import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import { FC } from 'react';
import { Footer } from './footer/footer';

export const MainLayout: FC = () => {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};
