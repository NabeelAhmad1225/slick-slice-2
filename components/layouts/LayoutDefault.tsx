import { useRouter } from 'next/router';
import Footer from '../Footer';
import NavBar from '../nav/NavBar';
import { AnimatePresence, motion } from 'framer-motion';

type NavFooterLayoutProps = {
	children: React.ReactNode;
};
export default function LayoutDefault({ children }: NavFooterLayoutProps) {
	const router = useRouter();
	const animate = {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: 'easeOut' },
	};
	const initial = {
		y: 10,
		opacity: 0,
	};
	return (
		<>
			<NavBar />
			<AnimatePresence mode="wait">
				<motion.div
					key={router.route}
					initial={initial}
					animate={animate}
					exit={initial}>
					<div>{children}</div>
				</motion.div>
			</AnimatePresence>
			<Footer />
		</>
	);
}
