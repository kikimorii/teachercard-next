import styles from './ContactLink.module.scss';

export const ContactLink = ({ type, value }) => {
	switch (type) {
		case 'tel':
			return (
				<a className={styles.contactLink} href={`tel:${value}`}>
					Телефон
				</a>
			);
		case 'email':
			return (
				<a className={styles.contactLink} href={`mailto:${value}`}>
					Почта
				</a>
			);
		default:
			return (
				<a className={styles.contactLink} href={value}>
					Сайт
				</a>
			);
	}
};
