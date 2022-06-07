import Greeting from './Greeting';
import Languages from './Languages';

const Welcome = () => {
	return (
		<>
			<div className='max-w-6xl mx-auto'>
				<div className='md:flex place-content-center place-items-center'>
					<Greeting />
				</div>

				<div className='pt-8'>
					<Languages />
				</div>
			</div>
	
		</>
	);
};

export default Welcome;
