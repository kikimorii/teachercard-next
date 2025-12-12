import Image from 'next/image';
import styles from './PersonImage.module.scss';
import { QrCodeIcon, Button } from '@/components';

export const PersonImage = ({ link }) => {
	return (
		<div className={styles.personImageContainer}>
			<Image
				className={styles.personImage}
				src={link}
				alt={'teacherAvatar'}
				width={230}
				height={230}
			/>
			<Button className={styles.personImageButton} onlyIcon={true}>
				<QrCodeIcon />
			</Button>
		</div>
	);
};
