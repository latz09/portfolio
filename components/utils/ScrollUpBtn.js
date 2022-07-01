import { BsArrowUp } from 'react-icons/bs';

const ScrollUpBtn = ({ href }) => {
	return (
		<>
			<a href={href} className="p-2 bg-red-500 bg-opacity-20 rounded-full animate-pulse ">
				<BsArrowUp className='text-red-500 text-3xl' />
			</a>
		</>
	);
};

export default ScrollUpBtn;
