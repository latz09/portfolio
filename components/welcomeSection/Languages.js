import { IoLogoJavascript } from 'react-icons/io';
import { AiFillGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';

import Image from 'next/image';

const Languages = () => {
	return (
		<div className="pt-4">
			<ul className='text-2xl flex justify-center space-x-6'>
				<li className='bg-yellow-400 text-black p-1 rounded'>
					<IoLogoJavascript />
				</li>
				<li className='bg-gray-100 text-gray-900 p-1 rounded'>
					<SiNextdotjs />
				</li>

				<li className='text-cyan-900 bg-gray-100 p-1 rounded'>
					<FaReact />
				</li>
				<li className='text-blue-500 bg-gray-100 p-1 rounded'>
					<SiTailwindcss />
				</li>
				<li className='text-green-500 bg-gray-100 p-1 rounded'>
					<SiMongodb />
				</li>
				<li className='bg-gray-100 text-gray-900 p-1 rounded'>
					<AiFillGithub />
				</li>
			</ul>
		</div>
	);
};

export default Languages;
