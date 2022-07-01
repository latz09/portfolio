import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import Social from '../welcomeSection/Social';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<>
			<h1 className='text-red-500 text-center text-lg md:text-2xl mt-12'>Contact me</h1>{' '}
			<div className='grid gap-4 mt-11 md:grid-cols-2 justify-items-center items-center tracking-wider'>
				{' '}
				<div>
					<div className='text-white grid gap-4 text-lg'>
						<h1>Jordan Latz</h1>

						<span>latz.jordan@gmail.com</span>
						<p>West St Paul, MN 55118</p>
					</div>
				</div>
				<div className="mb-8">
					<ContactForm />
				</div>
			</div>
		</>
	);
};

export default Contact;
