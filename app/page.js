import { ClientProvider } from '@/components/layout/ClienProvider';
import { PersonInfo } from '@/components/PersonInfo/PersonInfo';
import { PersonTitle } from '@/components/PersonTitle/PersonTitle';
import styles from './page.module.scss';

export default async function Home(props) {
	const searchParams = await props.searchParams;
	const id = searchParams.id;

	if (!id || id.trim() === '') {
		return (
			<div className={styles.pageWrapper}>
				<div className={styles.error}>
					<h2>Не указан ID</h2>
					<p>Пожалуйста, укажите идентификатор пользователя в параметрах запроса</p>
				</div>
			</div>
		);
	}

	try {
		const response = await fetch(
			`https://kikimorii.github.io/testJson/${atob(id)}.json`,
			{
				cache: 'no-store',
			},
		);

		if (!response.ok) {
			if (response.status === 404) {
				return (
					<div className={styles.pageWrapper}>
						<div className={styles.error}>
							<h2>Пользователь не найден</h2>
							<p>Пользователь с ID "{id}" не существует</p>
						</div>
					</div>
				);
			}

			throw new Error(`Ошибка сервера: ${response.status}`);
		}

		const data = await response.json();

		if (!data || typeof data !== 'object') {
			throw new Error('Некорректный формат данных');
		}

		if (!data.name && !data.firstName && !data.lastName) {
			console.warn('Данные пользователя могут быть неполными');
		}

		return (
			<ClientProvider data={data}>
				<div className={styles.pageWrapper}>
					<PersonTitle />
					<PersonInfo />
				</div>
			</ClientProvider>
		);
	} catch (error) {
		console.error('Ошибка загрузки данных:', error);

		return (
			<div className={styles.pageWrapper}>
				<div className={styles.error}>
					<h2>Ошибка загрузки данных</h2>
					<p>
						{error.message.includes('Failed to fetch')
							? 'Не удалось подключиться к серверу'
							: error.message}
					</p>
					<p>ID: {id}</p>
				</div>
			</div>
		);
	}
}
