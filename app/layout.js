import '@/public/assets/scss/main.scss';
import Script from 'next/script';
import { Header, Footer } from '@/components/layout';

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
