import Link from 'next/link';

const ShortIntro = () => {
	return (
		<div className='tracking-widest text-sm font-thin text-center text-white  sm:text-base xs:m-5 sm:m-2'>
			<p>
				I am a self taught
				<span className='font-semibold text-gray-300'> Javascript </span>
				programmer living in the Twin Cities who has been grinding and learning
				for the past two years. In that time I have immersed myself in everything web
				development.
			</p>
			<p className='pt-2'>
				My focuses have been
				<span className='font-semibold text-gray-300'> REACT</span>,
				<span className='font-semibold text-gray-300'> NextJS</span>,
				<span className='font-semibold text-gray-300'> TailwindCSS</span> and
				<span className='font-semibold text-gray-300'> MongoDB</span>.
			</p>
			<p className='pt-5'>
				Check out my latest project{' '}
				<Link href='/about'>
					<a className='font-semibold tracking-widest text-gray-100 bg-gray-800 rounded-full p-2 shadow shadow-gray-700 hover:bg-gray-700'>
						Here
					</a>
				</Link>
			</p>
		</div>
	);
};

export default ShortIntro;
