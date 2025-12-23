import { ClientProvider } from '@/components/layout/ClienProvider';
import { PersonInfo } from '@/components/PersonInfo/PersonInfo';
import { PersonTitle } from '@/components/PersonTitle/PersonTitle';
import styles from './page.module.scss';

export default async function Home(props) {
	const searchParams = await props.searchParams;
	const id = searchParams.id;

	const data = await fetch(
		`https://kikimorii.github.io/testJson/${atob(id)}.json`,
		{
			cache: 'no-store',
		},
	).then((res) => res.json());

	return (
		<ClientProvider data={data}>
			<div className={styles.pageWrapper}>
				<PersonTitle />
				<PersonInfo />
			</div>
		</ClientProvider>
	);
}
