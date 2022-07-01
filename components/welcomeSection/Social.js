import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const Social = () => {
	return (
		<div>
		<ul className='text-white flex space-x-4 text-xl'>
			<li>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://github.com/latz09'
				>
					<AiFillGithub />
				</a>
			</li>
			<li>
				<a
					href='https://www.linkedin.com/in/jordan-latz'
					target='_blank.'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
			</li>
		</ul>
		</div>
	);
};

export default Social;
