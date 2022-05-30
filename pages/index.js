import Welcome from '../components/welcomeSection/Welcome';
import Head from 'next/head';

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Jordan Latz - web developer -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<Welcome />
		</div>
	);
}
