import { useState, useEffect } from 'react';

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
			<div className='tracking-widest flex flex-col place-items-center space-y-4 px-2 rounded '>
				<div className={`${timer ? 'animate-pulse' : ''}`}>
					<h1 className='text-8xl py-2'>Hello,</h1>
				</div>

				<p className='text-2xl tracking-widest text-center pb-2'>
					Nice to meet you! My name is
				</p>
				<div className='text-5xl'>Jordan Latz</div>
				<div>
					<div className='bg-gray-100 border-2 border-gray-300 p-7 my-4 text-justify prose shadow'>
						<p>
							I am a Twin-Cities based{' '}
							<span className='font-semibold'> Javascript </span> web developer.
							I mostly work with <span className='font-semibold'> REACT</span>,
							<span className='font-semibold '> NextJS</span>,
							<span className='font-semibold '> TailwindCSS</span> and
							<span className='font-semibold '> MongoDB</span>.
						</p>
						<p>
							Please take a moment to learn more <span className="font-semibold border-b border-gray-700 cursor-pointer"> about me! </span>
						</p>
					</div>
				</div>
				<h1>
					Check out my latest project{' '}
					<span className='font-semibold border-b-2 border-black cursor-pointer'>
						HERE
					</span>
				</h1>
			</div>
		</div>
	);
};

export default Greeting;

//	<div className={`${isOpen ? 'hidden' : ''}`}>
