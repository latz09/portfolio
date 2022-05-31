import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const ContactSection = () => {
	return (
		<div className='contact-section bg-gradient-to-r from-myblue-50 to bg-myblue-100'>
			<div className='flex space-x-4'>
				<p>Jordan Latz</p>
				<div className='text-2xl flex space-x-3 items-center'>
					<AiFillGithub />
					<BsLinkedin />
				</div>
			</div>
			<p>latz.jordan@gmail.com</p>
			<p>West St Paul, MN 55118</p>
		</div>
	);
};

export default ContactSection;
