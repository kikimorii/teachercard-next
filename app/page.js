import { Main } from '@/components/Main';
import { ClientProvider } from '@/components/layout/ClienProvider';

export default async function Home(props) {
	const searchParams = await props.searchParams;
	const id = searchParams.id;

	const data = await fetch(`https://kikimorii.github.io/testJson/${id}.json`, {
		cache: 'no-store',
	}).then((res) => res.json());

	return (
		<ClientProvider data={data}>
			<Main />
		</ClientProvider>
	);
}
