import Head from 'next/head';

import ProjectBtn from '../components/utils/ProjectBtn';

import Greeting from '../components/welcomeSection/Greeting';
import ProjectsContainer from '../components/Projects/homepage/ProjectsContainer';

export default function Home() {
	return (
		<> 
			{' '}
			<Head>
				<title>Jordan Latz - web developer -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className='grid'>
				<div className='gap-8 hscr grid md:grid-cols-3 py-48 items-center justify-items-center text-center '>
					<div className='md:col-span-2'>
						<Greeting />
					</div>
					<div className='justify-self-center'>
						<ProjectBtn />
					</div>
				</div>
				<div className=' hidden md:block'>
					<ProjectsContainer />
				</div>
			</div>
		</>
	);
}
