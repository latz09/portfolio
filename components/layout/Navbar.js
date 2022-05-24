import Link from 'next/link';

const Footer = () => {
	return (
		<ul className='flex justify-around place-items-center max-w-3xl mx-auto pb-8'>
			
			<Link href='/about'>
				<li className='nav-link'>About Me</li>
			</Link>
			<Link href='/about'>
				<li className='nav-link'>Contact</li>
			</Link>
			<Link href='/about'>
				<li className='nav-link'>Projects</li>
			</Link>
			<Link href='/about'>
				<li className='nav-link'>My Resume</li>
			</Link>

		</ul>
	);
};

export default Footer;
