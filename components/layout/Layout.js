import NavBar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-Montserrat tracking-wide relative'>
			<div className='sticky top-0 z-50'>
				<NavBar />
			</div>
			<main className='relative'>{children}</main>
		</div>
	);
};

export default Layout;
