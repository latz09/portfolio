import Head from 'next/head';
import ListOfProjects from '../components/Projects/ListOfProjects';
import { AiOutlineArrowDown } from 'react-icons/ai';
import ProjectBtn from '../components/utils/ProjectBtn';
import ScrollUpBtn from '../components/utils/ScrollUpBtn';
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
			<div className='grid h-screen content-center items-center'>
				<div className='gap-8 grid md:grid-cols-3 items-center justify-items-center text-center '>
					<div className='md:col-span-2'>
						<Greeting />
					</div>
					<div className='justify-self-center'>
						<ProjectBtn />
					</div>
				</div>
				<div className='mt-40 hidden md:block'>
					<ProjectsContainer />
				</div>
			</div>
		</>
	);
}
