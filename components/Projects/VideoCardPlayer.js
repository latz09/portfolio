import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

import { BsLink } from 'react-icons/bs';
import Social from '../welcomeSection/Social';

//make one of these as a reusable card pass in source props.  bring in the gif from home page
//then can just drop in VideoCardPlay and put in a source and the card will work
const VideoCardPlayer = ({ src, alt, title, href_deployment, css, href_repository }) => {
	return (
		<>
			<div className='text-red-500 grid gap-4 justify-items-center'>
				<div className='md:grid grid-cols-2 sm:pl-2 sm:pb-3 place-self-start sm:mt-12 hidden text-2xl text-gray-300'>
				<a
					target='_blank'
					rel='noreferrer'
					href={href_repository}
				>
					<AiFillGithub />
				</a>
					
				</div>
				<Image alt={alt} src={src} priority='true'/>
				<h1
					className={`sm:text-xl md:text-2xl border-opacity-70 pb-3 ${css} hover:opacity-70 transition duration-700`}
				>
					<a href={href_deployment} target='_blank.' rel='noreferrer'>
						<div className='flex items-center space-x-7'>
							<span>{title}</span>{' '}
							<span className='text-white'>
								<BsLink />
							</span>
						</div>
					</a>
				</h1>
				
			</div>
		</>
	);
};

export default VideoCardPlayer;
