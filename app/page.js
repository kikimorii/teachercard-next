import { ClientProvider } from '@/components/layout/ClienProvider';
import { PersonInfo, PersonTitle } from '@/components';
import styles from './page.module.scss';

export default async function Home(props) {
	const searchParams = await props.searchParams;
	const id = searchParams.id;

	const data = await fetch(`https://kikimorii.github.io/testJson/${id}.json`, {
		cache: 'no-store',
	}).then((res) => res.json());

	console.log(data);

	return (
		<ClientProvider data={data}>
			<div className={styles.pageWrapper}>
				<PersonTitle />
				<PersonInfo />
			</div>
		</ClientProvider>
	);
}
