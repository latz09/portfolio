import Link from 'next/link';

const NavLinks = () => {
	return (
		<ul>			
			<Link href='/'>
				<li className='nav-link'>Home</li>
			</Link>
			<Link href='/about'>
				<li className='nav-link'>About Me</li>
			</Link>
			<Link href='/contact'>
				<li className='nav-link'>Contact</li>
			</Link>
			<Link href='/my_projects'>
				<li className='nav-link'>Projects</li>
			</Link>
			<Link href='/my_resume'>
				<li className='nav-link'>My Resume</li>
			</Link>
		</ul>
	);
};

export default NavLinks;
