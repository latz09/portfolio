import { useState, useEffect } from 'react';
import Link from 'next/link';

const Greeting = () => {
	const [timer, setTimer] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimer(false);
		}, 6000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="text-gray-300">
			<div className='tracking-widest flex flex-col place-items-center px-2 rounded  '>
				<div className={`${timer ? 'animate-pulse' : ''}`}>
					<h1 className='text-8xl py-2'>
						Hello<span className='text-white'>,</span>
					</h1>
				</div>

				<p className='text-2xl tracking-widest text-center pb-2 text-gray-400'>
					Nice to meet you! My name is
				</p>
				<div className='text-5xl'>Jordan Latz</div>
				<div>
					<div className='pt-7 my-4 text-center text-lg prose text-gray-400'>
						<p>
							I am a Twin-Cities based{' '}
							<span className='font-semibold'> Javascript </span> web developer,
							predominantly working with{' '}
							<span className='font-semibold'> REACT</span>,
							<span className='font-semibold '> NextJS</span>,
							<span className='font-semibold '> TailwindCSS</span> and
							<span className='font-semibold '> MongoDB</span>.
						</p>
						<p>
							I have experience with{' '}
							<span className='font-semibold'>
								Single Page Application Models, REStful API&apos;s, Server Side
								Rendering(SSR), UI design<> </>
							</span>
							and
							<span className='font-semibold'> Responsive design.</span>
						</p>
						<p>
							Please take a moment to learn more{' '}
							<Link href='/my_story'>
							<span className='font-semibold text-myblue-300 border-b border-gray-700 cursor-pointer'>
								about me!
							</span>
							</Link>
						</p>
					</div>
				</div>
				<div className='mb-4'>
					Check out my latest project{' '}
					<span className='font-semibold border-b-2 border-black cursor-pointer'>
						HERE
					</span>
				</div>
				<Link href='/contact'>
					<div className='p-2 mt-4 bg-myblue-300 rounded text-gray-100 font-medium hover:bg-myblue-200 cursor-pointer transition ease-in duration-500'>
						Send me a message
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Greeting;

//	<div className={`${isOpen ? 'hidden' : ''}`}>
