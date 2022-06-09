import { useState, useEffect } from 'react';
import Link from 'next/link';
import SendMessageBtn from '../../utils/SendMessageBtn';


const Greeting = () => {
	const [timer, setTimer] = useState(true);
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimer(false);
		}, 6000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div>
			<div className='text-gray-50 pt-4 md:pt-2'>
				<div className='tracking-widest flex flex-col place-items-center px-2 rounded  '>
					<div className={`${timer ? 'animate-pulse' : ''}`}>
						<h1 className='text-8xl py-2'>
							Hello<span className='text-green-500'>,</span>
						</h1>
					</div>

					<p className='text-2xl tracking-widest text-center pb-2 text-gray-400'>
						Nice to meet you! My name is
					</p>
					<div className='text-5xl'>Jordan Latz</div>
					<div>
						<div className='pt-7 my-4 text-center md:text-lg md:text-justify prose text-gray-400'>
							<p>
								I am a Twin-Cities based{' '}
								<span className='font-semibold'> Full stack JavaScript </span>{' '}
								web developer, predominantly working with{' '}
								<span className='font-semibold'> REACT</span>,
								<span className='font-semibold '> NextJS</span>,
								<span className='font-semibold '> TailwindCSS</span> and
								<span className='font-semibold '> MongoDB</span>.
							</p>
							<p className='text-gray-100'>
								Please take a moment to learn more{' '}
								<Link href='/my_story'>
									<span className='font-semibold text-green-500 border-b border-gray-700 cursor-pointer'>
										about me!
									</span>
								</Link>
							</p>
							<p>
								I have experience with{' '}
								<span className='font-semibold'>
									Single Page Application Models, REStful API&apos;s, Server
									Side Rendering(SSR), UI design<> </>
								</span>
								and
								<span className='font-semibold'> Responsive design.</span>
							</p>
						</div>
					</div>
					<div className='m-5 '>
						Check out my latest project{' '}
						<Link href={'/my_projects'}>
							<span className='font-semibold border-b-2 border-green-500 cursor-pointer text-green-500'>
								HERE
							</span>
						</Link>
					</div>
				
				</div>
			
			</div>
		
		</div>
	
	);
};

export default Greeting;
