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
		<div className={`${timer ? 'animate-pulse' : ''}`}>
			<div className='tracking-widest flex flex-col place-items-center  font-normal space-y-4'>
				<h1 className='text-8xl py-2 font-light'>Hello,</h1>

				<p className='text-2xl tracking-widest font-light text-center pb-2'>
					Nice to meet you! My name is
				</p>
				<div className='text-5xl font-normal'>Jordan Latz</div>
			</div>
		</div>
	);
};

export default Greeting;

//	<div className={`${isOpen ? 'hidden' : ''}`}>
