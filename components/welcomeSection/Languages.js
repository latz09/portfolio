import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';

import Image from 'next/image';

const Languages = () => {
	return (
		<div className="pb-8">
			<ul className='text-2xl flex justify-center space-x-6'>
				<li className='text-gray-800 my-svgs'>
					<IoLogoJavascript />
				</li>
				<li className='text-gray-900 my-svgs'>
					<SiNextdotjs />
				</li>

				<li className='text-cyan-900 my-svgs'>
					<FaReact />
				</li>
				<li className='text-blue-500 my-svgs'>
					<SiTailwindcss />
				</li>
				<li className='text-green-600 my-svgs'>
					<SiMongodb />
				</li>
			
			</ul>
		</div>
	);
};

export default Languages;
