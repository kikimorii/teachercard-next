import styles from './ContactLink.module.scss';

export const ContactLink = ({ type, value, width = '120px' }) => {
	switch (type) {
		case 'tel':
			return (
				<a className={styles.contactLink} href={`tel:${value}`} style={{ width }}>
					Телефон
				</a>
			);
		case 'email':
			return (
				<a
					className={styles.contactLink}
					href={`mailto:${value}`}
					style={{ width }}
				>
					Почта
				</a>
			);
		default:
			return (
				<a className={styles.contactLink} href={value} style={{ width }}>
					Сайт
				</a>
			);
	}
};
