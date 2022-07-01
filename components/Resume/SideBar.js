import Image from 'next/image';
import myImage from '../../public/images/myself_thumb.jpg';
import { BsLinkedin } from 'react-icons/bs';

const Sidebar = () => {
	return (
		<div className='bg-gray-900 bg-opacity-50 text-gray-200 tracking-wide text-sm  px-3 py-4 md:grid md:items-center md:gap-4 grid gap-3 justify-center shadow-md border-l-2 border-t-2 border-black'>
			<div className='hidden md:text-center md:inline'>
				<Image
					src={myImage}
					alt='Jordan Latz'
					height={120}
					width={100}
					className='rounded-full border-2 shadow-md'
					layout='fixed'
				/>
			</div>
			<div className='grid gap-2'>
				<h1 className='resume-header'>CONTACT</h1>
				<p>latz.jordan@gmail.com</p>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://jordan-latz.vercel.app/'
					className=''
				>
					<p>jordan-latz.vercel.app/</p>
				</a>
				<a
					href='https://www.linkedin.com/in/jordan-latz'
					target='_blank.'
					rel='noreferrer'
				>
					<p className=''>https://www.linkedin.com/in/jordan-latz</p>
				</a>
				<p>Twin Cities, Minnesota</p>
			</div>

			<div>
				<div className='md:grid md:gap-2'>
					<h1 className='resume-header'>EDUCATION</h1>

					<p className='text-xl text-white'>Bachelor of Science</p>
					<p className=''>
						The international Culinary School at The Art Institutes,
						Minneapolis, MN
					</p>
					<p>2011-2015</p>
				</div>
				<div className='py-3 md:grid md:gap-3'>
					<p className='text-xl text-white'>
						Full Stack Web and Mobile Development
					</p>
					<p className=''>nucamp Bootcamp, online </p>
					<p>2021 / 22 weeks</p>
				</div>
				<div>
					<h1 className='resume-header'>Courses and Trainings</h1>
					<div>
						<h1 className='text-xl text-white'>React - The Complete Guide</h1>
						<p>Academind</p>
						<p>48.5 hours</p>
						<p className='text-gray-300'>
							Instructor: Maximillian Schwarzmuller
						</p>
					</div>
					<div className='py-4'>
						<h1 className='text-xl text-white'>NextJS - The Complete Guide</h1>
						<p>Academind</p>
						<p>25 hours</p>
						<p className='text-gray-300'>
							Instructor: Maximillian Schwarzmuller
						</p>
					</div>
				</div>

				<h1 className='resume-header'>Skills</h1>
				<div className='grid grid-cols-2 md:grid-cols-1 gap-2 pt-2'>
					<li>Javascript</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>React</li>
					<li>Next JS</li>
					<li>Mongo DB</li>
					<li>Tailwind CSS</li>
					<li>SPA&apos;s</li>
					<li>RESTful API&apos;s</li>
					<li>SSR</li>
					<li>Responsive Design</li>
					<li>UI design</li>
				</div>
				<div className='text-center md:hidden mt-10'>
					<Image
						src={myImage}
						alt='Jordan Latz'
						height={120}
						width={100}
						className='rounded-full border-2 shadow-md'
						layout='fixed'
					/>
				</div>
			</div>
			<div className='md:min-h-screen'></div>
		</div>
	);
};

export default Sidebar;
