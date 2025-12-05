import Image from 'next/image';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='container header_container'>
					<div className='header-left'>
						<nav className='header-menu' id='desktopMenuTabs'>
							<button className='btn-icon d-none' id='tabsPrev'>
								<i className='bi-chevron-left'></i>
							</button>
							<button className='btn-header active' id='desktopMenuTab-1'>
								Университет
							</button>
							<button className='btn-header' id='desktopMenuTab-2'>
								Образование
							</button>
							<button className='btn-header' id='desktopMenuTab-3'>
								Наука
							</button>
							<button className='btn-header' id='desktopMenuTab-4'>
								Сотрудничество
							</button>
							<button className='btn-header' id='desktopMenuTab-5'>
								Вне учебы
							</button>
							<button className='btn-icon d-none' id='tabsNext'>
								<i className='bi-chevron-right'></i>
							</button>
						</nav>
						<button className='btn-icon d-none' id='backBtn'>
							<i className='bi bi-chevron-left'></i>
						</button>
						<a href='#' className='header-logo' id='headerLogo'>
							<Image
								src='https://src.guap.ru/logos/guap/guap.svg'
								alt='SUAI'
								width={128}
								height={40}
							/>
						</a>
					</div>
					<h5 className='header_mobile-text'>{}</h5>
					<div className='header-right'>
						<a href='#' className='btn-icon' id='siteMapLink'>
							<i className='bi-diagram-3'></i>
						</a>
						<a href='#' className='btn-icon' id='siteSearchLink'>
							<i className='bi bi-search'></i>
						</a>
						<button className='btn-icon burger' id='menuBtnDesktop'>
							<div className='burger-icon' id='menuDesktopIcon'>
								<span className='burger_bar'></span>
								<span className='burger_bar'></span>
								<span className='burger_bar'></span>
							</div>
						</button>
						<button className='btn-icon burger' id='menuBtnMobile'>
							<div className='burger-icon' id='menuMobileIcon'>
								<span className='burger_bar'></span>
								<span className='burger_bar'></span>
								<span className='burger_bar'></span>
							</div>
						</button>
					</div>
				</div>
			</header>
			<DesktopMenu />
			<MobileMenu />
		</>
	);
};
