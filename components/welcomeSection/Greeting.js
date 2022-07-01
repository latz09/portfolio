// import { useState, useEffect } from 'react';
// import Link from 'next/link';

const Greeting = () => {
	// const [timer, setTimer] = useState(true);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setTimer(false);
	// 	}, 6000);
	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<div className='font-description text-gray-300 text-5xl md:text-6xl tracking-wide  '>
			<div className='grid gap-3 md:gap-3 md:border-r p-4 border-red-500'>
				<h1 className='place-self-center md:place-self-end'>Jordan Latz</h1>
				<p className='md:text-2xl text-xl place-self-center ml-8 md:ml-0 md:place-self-end text-red-500 border-r border-l px-3 md:border-0 border-red-500'>
					Full-stack developer
				</p>
			</div>
		</div>
	);
};

export default Greeting;
