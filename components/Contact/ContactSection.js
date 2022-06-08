import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const ContactSection = () => {
	return (
		<div>
			<h1 className='text-center text-3xl text-gray-700 pt-5'>
				Get in contact with me ...
			</h1>
			<div className='contact-section'>
				<div className='flex space-x-4 '>
					<p>Jordan Latz</p>
					<div className='text-2xl flex space-x-3 items-center cursor-pointer'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://github.com/latz09/paddleBoardEcommerece'
						>
							<AiFillGithub />
						</a>
						<a
							href='https://www.linkedin.com/in/jordan-latz'
							target='_blank.'
							rel='noreferrer'
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
				<p>latz.jordan@gmail.com</p>
				<p>West St Paul, MN 55118</p>
			</div>
		</div>
	);
};

export default ContactSection;
