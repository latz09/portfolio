import NavBar from './Navbar';
import Image from 'next/image';
import bgImage from '../../public/images/bg-image.jpg';

const Layout = ({ children }) => {
	return (
		<div className='font-Montserrat tracking-wide relative'>
			<div className="min-h-fit">
				<Image
					src={bgImage}
					alt=''
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					className='z-0 min-h-screen opacity-30'
				/>
				<div className="relative">
					<NavBar />
					<main>{children}</main>
				</div>
			</div>
		</div>
	);
};

export default Layout;
