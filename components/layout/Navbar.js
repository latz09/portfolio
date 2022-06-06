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
		<div className="bg-slate-900">
			<div className='flex justify-end justify-items-center pr-3 text-2xl sm:hidden cursor-pointer p-4'>
				<button onClick={toggleMenu}>
					<AiOutlineMenu />
				</button>
			</div>



			<div
				className={!menuOpen ? 'hidden' : 'block shadow pb-4 sm:hidden'}
			>
				<NavLinks />
			</div>
			
			
			
			
			<ul className='hidden sm:flex place-content-center content-center justify-evenly max-w-3xl mx-auto sm:p-4'>
				<Link href='/'>
					<li className='nav-link'>Home</li>
				</Link>
				<Link href='/my_story'>
					<li className='nav-link'>My Story</li>
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