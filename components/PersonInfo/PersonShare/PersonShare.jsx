import { Button, QrCode } from '@/components';
import styles from './PersonShare.module.scss';

export const PersonShare = () => {
	return (
		<div className={styles.shareWrapper}>
			<QrCode link='#' size={235} />
			<div className={styles.shareButtons}>
				<Button
					styleClasses='btn-text primary filled'
					handleClick={() => console.log('shareButton was clicked!')}
					withIcon={true}
				>
					<i className='bi bi-share'></i> Поделиться
				</Button>
				<Button
					styleClasses='btn-text download filled'
					handleClick={() => console.log('downloadButton was clicked!')}
					withIcon={true}
				>
					<i className='bi bi-download'></i> Скачать
				</Button>
			</div>
		</div>
	);
};
