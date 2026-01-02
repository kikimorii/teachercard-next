import Image from 'next/image';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<Image
					className='footer-logo'
					src='https://src.guap.ru/logos/guap/guap-desc-line_w.svg'
					width={330}
					height={55}
					alt='SUAI logo'
				/>
				<div className='footer-content'>
					<div className='footer-contacts'>
						<small className='footer-caption'>Почтовый адрес</small>
						<p className='footer-contacts_location'>
							ГУАП, ул.Большая Морская, д.67, лит. А, Санкт-Петербург, 190000, Россия
						</p>
						<small className='footer-caption'>Приемная комиссия</small>
						<a href='tel:+78123122107'>+7-812-312-21-07</a>
						<a href='https://priem.guap.ru'>https://priem.guap.ru</a>
						<small className='footer-caption'>Отдел делопроизводства</small>
						<a href='tel:+78124947005'>+7-812-494-70-05</a>
						<a href='tel:+78124947057'>+7-812-494-70-57 (факс)</a>
						<small className='footer-caption'>
							Отдел информационно-стратегических коммуникаций и рекламы
						</small>
						<a href='mailto:pr@guap.ru'>pr@guap.ru</a>
					</div>
					<ul className='footer-links'>
						<li className='footer-links_header'>
							Университет
							<ul>
								<li>
									<a href='#'>Сведения об образовательной организации</a>
								</li>
								<li>
									<a href='#'>Структура</a>
								</li>
								<li>
									<a href='#'>Корпуса и общяжития</a>
								</li>
								<li>
									<a href='#'>Преподаватели и сотрудники</a>
								</li>
								<li>
									<a href='#'>Политика обработки персональных данных</a>
								</li>
							</ul>
						</li>
						<li className='footer-links_header'>
							Образование
							<ul>
								<li>
									<a href='#'>Довузовское</a>
								</li>
								<li>
									<a href='#'>Среднее профессиональное</a>
								</li>
								<li>
									<a href='#'>Высшее</a>
								</li>
								<li>
									<a href='#'>Аспирантура и докторантура</a>
								</li>
								<li>
									<a href='#'>Дополнительное профессиональное</a>
								</li>
							</ul>
						</li>
						<li className='footer-links_header'>
							Деятельность
							<ul>
								<li>
									<a href='#'>Международная</a>
								</li>
								<li>
									<a href='#'>Научная и инновационная</a>
								</li>
								<li>
									<a href='#'>Финансово-экономическая</a>
								</li>
								<li>
									<a href='#'>Воспитательная работа и молодежная политика</a>
								</li>
								<li>
									<a href='#'>Профориентация школьников</a>
								</li>
							</ul>
						</li>
						<li className='footer-links_header'>
							Ресурсы
							<ul>
								<li>
									<a href='#'>Карта сайта</a>
								</li>
								<li>
									<a href='#'>Медиаплощадки</a>
								</li>
								<li>
									<a href='#'>СМИ о ГУАП</a>
								</li>
								<li>
									<a href='#'>Информация для лиц с ОВЗ</a>
								</li>
								<li>
									<a href='#'>Вопрос и ответы</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<hr />
				<div className='footer-social'>
					<ul className='footer-social_list'>
						<li className='footer-social_list-item'>
							<a href='#' className='link-social for-footer'>
								<i className='gi-logo-vk'></i>
							</a>
						</li>
						<li className='footer-social_list-item'>
							<a href='#' className='link-social for-footer'>
								<i className='gi-logo-vk'></i>
							</a>
						</li>
						<li className='footer-social_list-item'>
							<a href='#' className='link-social for-footer'>
								<i className='gi-logo-vk'></i>
							</a>
						</li>
						<li className='footer-social_list-item'>
							<a href='#' className='link-social for-footer'>
								<i className='gi-logo-vk'></i>
							</a>
						</li>
						<li className='footer-social_list-item'>
							<a href='#' className='link-social for-footer'>
								<i className='gi-logo-vk'></i>
							</a>
						</li>
					</ul>
					<a href='#' className='footer-copyright'>
						Разработка сайта — УЦР ГУАП <span id='footerCopyrightYear'>2025</span>
					</a>
				</div>
			</div>
		</footer>
	);
};
