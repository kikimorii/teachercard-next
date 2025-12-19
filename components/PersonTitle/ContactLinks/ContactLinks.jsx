'use client';

import { ContactLink } from '@/components';
import styles from './ContactLinks.module.scss';
import { useSelector } from 'react-redux';

export const ContactLinks = () => {
	const data = useSelector((state) => state.data);
	const { telephones, emails, url } = data;

	const findContent = (tel, emails, url) => {
		const contactsContent = {};
		if (tel && tel.length !== 0) {
			const telContent = tel.find((elem) => elem.type === 'WORK') || tel[0];
			contactsContent.telephone = telContent.number;
		}
		if (emails && emails.length !== 0) {
			const emailContent =
				emails.find((elem) => elem.type === 'WORK') || emails[0];
			contactsContent.email = emailContent.address;
		}
		if (url) {
			contactsContent.url = url;
		}
		return contactsContent;
	};

	const contactContent = findContent(telephones, emails, url);

	return (
		<div className={styles.contactLinks}>
			{Object.entries(contactContent).map((element, index) => (
				<ContactLink
					key={index}
					value={element[1]}
					type={
						element[0] === 'telephone' ? 'tel' : element[0] === 'email' ? 'email' : ''
					}
				/>
			))}
		</div>
	);
};
