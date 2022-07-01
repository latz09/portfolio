import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import NavLinks from './NavLinks';
import { useState } from 'react';
import Social from '../welcomeSection/Social';

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		menuOpen ? setMenuOpen(false) : setMenuOpen(true);
	};

	return (
		<div>
			<div className='flex bg-black justify-between justify-items-center pr-3 text-2xl sm:hidden cursor-pointer p-4'>
				<Social />
				<button onClick={toggleMenu} className='text-red-500'>
					<AiOutlineMenu />
				</button>
			</div>

			<div
				className={!menuOpen ? 'hidden' : 'block shadow pb-4 sm:hidden'}
				onClick={() => {
					setMenuOpen(false);
				}}
			>
				<NavLinks />
			</div>
			<div className='grid grid-cols-12 items-center bg-black'>
				<ul className='hidden sm:flex place-content-center content-center justify-around  sm:p-4 col-span-10'>
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
				<div className='hidden sm:block'>
					<Social />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
