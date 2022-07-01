import Head from 'next/head';
import ListOfProjects from '../components/Projects/ListOfProjects';
import { AiOutlineArrowDown } from 'react-icons/ai';
import ProjectBtn from '../components/utils/ProjectBtn';
import ScrollUpBtn from '../components/utils/ScrollUpBtn';
import Greeting from '../components/welcomeSection/Greeting';

export default function Home() {
	return (
		<div id='top-home' className='grid'>
			<div className='h-screen'>
				{' '}
				<div className='grid h-screen items-center'>
					<Head>
						<title>Jordan Latz - web developer -</title>
						<meta name='description' content='Find a great programmer here' />
					</Head>

					<div>
						<div className='md:mt-0 md:flex items-center'>
							<Greeting />
						</div>
						<div className='hidden sm:grid justify-center md:justify-end md:pr-12'>
							<ProjectBtn />
						</div>
						<div className='text-red-500 text-xl grid justify-center justify-items-center gap-2 mt-4 sm:hidden'>
							<h1>recent projects</h1>
							<span className='text-3xl animate-pulse'>
								<AiOutlineArrowDown />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="h-screen">
				<div className='text-white flex text-4xl space-x-12 justify-center opacity-80 uppercase  pb-6 px-4'>
					<p>P</p>
					<p>r</p>
					<p>o</p>
					<p>j</p>
					<p>e</p>
					<p>c</p>
					<p>t</p>
					<p>s</p>
				</div>
				<span className="text-white flex justify-center text-5xl opacity-10">
				<AiOutlineArrowDown />
				</span>
			</div>
			<div className=''>
				<div className='md:h-screen flex place-items-center place-content-center'>
					<div id='projects'>
						<div className='grid gap-7 md:flex md:space-x-9 scroll-mt-4 py-12 sm:py-3 items-center px-12'>
							<ListOfProjects />
						</div>
						<div className=''>
							<span className='hidden sm:flex justify-center sm:pt-36'>
								<ScrollUpBtn href={`#top-home`} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
