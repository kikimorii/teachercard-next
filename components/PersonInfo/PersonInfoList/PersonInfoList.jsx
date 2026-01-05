import { useSelector } from 'react-redux';
import styles from './PersonInfoList.module.scss';

export const PersonInfoList = () => {
	const { title, location, socials } = useSelector((state) => state.data);

	const getHref = ({ type, userID }) => {
		switch (type) {
			case 'VK':
				return `https://vk.com/${userID}`;
			case 'Telegram':
				return `https://telegram.me/${userID}`;
			case 'OK':
				return `https://ok.ru/${userID}`;
			case 'MAX':
				return `https://max.ru/u/${userID}`;
			default:
				return '#';
		}
	};

	const capitalizeFirstLetter = (str) => {
		if (!str) return '';
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<ul className={styles.personInfoList}>
			{title && <li className={styles.post}>{capitalizeFirstLetter(title)}</li>}
			{location && <li className={styles.location}>{location}</li>}
			{socials.map((element, index) => (
				<li key={index} className={styles[element.type.toLowerCase()]}>
					<a href={getHref(element)}>
						{element.type === 'MAX' ? element.type : element.userID}
					</a>
				</li>
			))}
		</ul>
	);
};
