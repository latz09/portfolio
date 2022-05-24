import Greeting from './Greeting';
import Languages from './Languages';
import MyImage from './MyImage';
import ShortIntro from './ShortIntro';

const Welcome = () => {
	return (
		<>
			<Languages />
			
			<div className=' max-w-6xl mx-auto'>
				<div className='pt-2 pb-6'>
					<Greeting />
				</div>
				<div className='text-center p-4 sm:p-0'>
					<MyImage />
				</div>
				<div className='pt-2 max-w-3xl mx-auto'>
					<ShortIntro />
				</div>
			</div>
			<div>
				<div className='p-6'>
					
				</div>
			</div>
		</>
	);
};

export default Welcome;
