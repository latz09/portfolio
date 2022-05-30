import NavBar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-Montserrat bg-gray-50 tracking-wide min-h-screen mt-4'>
			<NavBar />
			<main>{children}</main>
			
		</div>
	);
};

export default Layout;
