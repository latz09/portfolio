import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLinks from './NavLinks';
import { useState } from 'react';

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		menuOpen ? setMenuOpen(false) : setMenuOpen(true);
	};

	return (
		<div>
			<div className='flex justify-end pr-3 text-2xl sm:hidden cursor-pointer'>
				<button onClick={toggleMenu}>
					<AiOutlineMenu />
				</button>
			</div>
			<div
				className={!menuOpen ? 'hidden' : 'block mb-4 pb-2 border-b shadow '}
			>
				<NavLinks />
			</div>
			<ul className='hidden sm:flex justify-around place-items-center max-w-3xl mx-auto pb-8'>
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
		</div>
	);
};

export default NavBar;
