import { Button, QrCode } from '@/components';
import { PersonShareButtons } from '@/components';
import styles from './PersonShare.module.scss';

export const PersonShare = () => {
	return (
		<div className={styles.shareWrapper}>
			<QrCode link='#' size={235} />
			<PersonShareButtons />
		</div>
	);
};
