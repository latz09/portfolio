import Head from 'next/head';
import { AiOutlineArrowDown } from 'react-icons/ai';

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
				<div className='gap-8 h-screen md:h-0 grid md:grid-cols-3 py-48 items-center justify-items-center text-center '>
					<div className='md:col-span-2'>
						<Greeting />
					</div>
					<div className='justify-self-center'>
						<ProjectBtn />
					</div>
					<span className='text-red-500 self-end text-3xl opacity-90 animate-pulse md:hidden'>
						<AiOutlineArrowDown />
					</span>
				</div>
				<div className='px-16 pb-12 '>
					<ProjectsContainer />
				</div>
			</div>
		</>
	);
}
