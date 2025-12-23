import { Button } from '@/components/Button/Button';
import styles from './PersonShare.module.scss';

export const PersonShareButtons = () => {
	return (
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
	);
};
