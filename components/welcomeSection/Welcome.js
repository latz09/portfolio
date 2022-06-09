import Greeting from './Greeting';
import Languages from './Languages';
import ContactForm from '../Contact/ContactForm';
import { useState } from 'react';
import SendMessageBtn from '../../utils/SendMessageBtn';

const Welcome = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div  >
			<div className={`${!showModal ? '' : 'opacity-20 relative z-0'} `}>
				<div className='max-w-6xl mx-auto'>
					<div className='md:flex place-content-center place-items-center'>
						<Greeting />
					</div>

					<div className='text-center'>
						<SendMessageBtn setShowModal={setShowModal} />
					</div>

					<div className='pt-8 pb-8'>
						<Languages />
					</div>
				</div>
			</div>
			{showModal ? (
				<div className="absolute inset-0" onClick={() => {
				  setShowModal(false)
				}}>
					<div className="flex  place-content-center h-2/3">
					<ContactForm setShowModal={setShowModal} />
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Welcome;
