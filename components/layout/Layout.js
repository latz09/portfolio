import Footer from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className='font-Montserrat bg-gray-900 text-gray-200 tracking-wide min-h-screen'>
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
