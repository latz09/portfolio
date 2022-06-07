import MainContent from './MainContent';
import Sidebar from './SideBar';

const MyResume = () => {
	return (
		<div className='bg-gray-200 h-min-screen md:flex md:min-h-screen max-w-4xl mx-auto border-x md:pt-4'>
			<div className="md:w-1/3">
				<Sidebar />
                
			</div>
			<div className="md:w-2/3">
				<MainContent />
			</div>
		</div>
	);
};

export default MyResume;
