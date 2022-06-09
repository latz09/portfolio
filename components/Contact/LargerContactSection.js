import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const LargerContactSection = () => {
	return (
		<div className=' grid gap-6 md:text-3xl text-lg  place-content-center justify-items-center bg-gray-black text-gray-100  border border-black rounded-3xl shadow-md shadow-green-300 p-28 tracking-wider'>
			<p></p>
			<p>Jordan Latz</p>
			<div className='flex space-x-8 text-3xl'>
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
			<p>
				latz.jordan<span className='text-green-500'>@</span>gmail.com
			</p>
			<p>West St Paul, MN 55118</p>
		</div>
	);
};

export default LargerContactSection;
