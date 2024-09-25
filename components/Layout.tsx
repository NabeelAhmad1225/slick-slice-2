import Footer from './Footer';
import NavBar from './nav/NavBar';

type NavFooterLayoutProps = {
	children: React.ReactNode;
};
export default function Layout({ children }: NavFooterLayoutProps) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
