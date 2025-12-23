import '@/public/assets/scss/main.scss';
import Script from 'next/script';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<title>GUAP LAYOUT</title>
			<body>
				<div className='body_wrapper'>
					<div className='content'>
						<Header />
						<main className='main'>
							<div className='container' id='root'>
								{children}
							</div>
						</main>
					</div>
					<Footer />
				</div>
				<Script
					src='/assets/js/main.js'
					type='module'
					strategy='afterInteractive'
				/>
			</body>
		</html>
	);
}
