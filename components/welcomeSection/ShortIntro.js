import Link from 'next/link';

const ShortIntro = () => {
	return (
		<div className='tracking-widest text-xs text-justify sm:text-base xs:m-5 sm:m-2'>
			{/* <p className="prose">
				Self taught
				<span className='font-semibold'> Javascript </span>
				web developer living in the Twin Cities.
			</p> */}
			{/* <p className=''>
				My focuses have been
				<span className='font-semibold'> REACT</span>,
				<span className='font-semibold '> NextJS</span>,
				<span className='font-semibold '> TailwindCSS</span> and
				<span className='font-semibold '> MongoDB</span>.
			</p>
			<p className=''>
				Check out my latest project{' '}
				<Link href='/about'>
					<a className='font-bold tracking-widest  bg-cyan-100 text-black  rounded-full p-2 shadow shadow-gray-700 hover:bg-cyan-200'>
						Here
					</a>
				</Link>
			</p> */}
		</div>
	);
};

export default ShortIntro;
