import { QrCode } from '@/components/QrCode/QrCode';
import { PersonShareButtons } from './PersonShareButtons';
import styles from './PersonShare.module.scss';

export const PersonShare = () => {
	return (
		<div className={styles.shareWrapper}>
			<QrCode link='#' size={300} />
			<PersonShareButtons />
		</div>
	);
};
