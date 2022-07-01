import Head from 'next/head';
import ListOfProjects from '../components/Projects/ListOfProjects';
import VideoCardPlayer from '../components/Projects/VideoCardPlayer';
import ProjectBtn from '../components/utils/ProjectBtn';
import ScrollUpBtn from '../components/utils/ScrollUpBtn';
import Greeting from '../components/welcomeSection/Greeting';

export default function Home() {
	return (
		<div id='top-home' className='grid'>
			<div className=''>
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
						<div className='grid justify-center md:justify-end md:pr-12'>
							<ProjectBtn />
						</div>
					</div>
				</div>
			</div>

			<div className='text-white hidden sm:flex text-4xl space-x-12 justify-center opacity-80 uppercase  pb-6 px-4 h-[32rem] '>
				<p>P</p>
				<p>r</p>
				<p>o</p>
				<p>j</p>
				<p>e</p>
				<p>c</p>
				<p>t</p>
				<p>s</p>
			</div>

			<div className=''>
				<div className='md:h-screen flex place-items-center place-content-center'>
					<div id='projects'>
						<div className='grid gap-7 md:flex md:space-x-9 scroll-mt-4 py-12 sm:py-3 items-center px-12'>
							<ListOfProjects />
						</div>
						<div className=''>
							<span className='flex justify-center sm:pt-36'>
								<ScrollUpBtn href={`#top-home`} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
