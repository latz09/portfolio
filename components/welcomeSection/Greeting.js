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
			<div className='grid gap-3 place-content-center md:gap-3'>
				<h1 className=''>Jordan Latz</h1>
				<p className='md:text-2xl text-xl text-center text-red-500 '>
					Full-stack JavaScript developer
				</p>
			</div>
		</div>
	);
};

export default Greeting;
