import Programming from './ProgrammingContent';
import HospitalityContent from './HospitalityContent';
import { useState } from 'react';

const MainContent = () => {
	const [toggleExperience, setToggleExperience] = useState(false);

	return (
		<div className='grid gap-4 bg-gray-800 bg-opacity-60'>
			<div className='prose text-sm tracking-wider leading-5 text-gray-200 text-justify md:text-right p-5 md:border-l'>
				<p className=''>
					Elevating my way up in one industry, I have the eagerness to succeed
					in this next Journey. As a chef I have gained many skills that
					translate to computer Programming. Such as the willingness to know
					that learning and acquiring skills is a never-ending journey. I have
					also gained the art of skillful multitasking and remaining organized
					to the highest standards. The ability to both work and get along with
					your team is essential, especially in the chaotic setting of a
					professional kitchen. An example of a skill that has assisted me in
					the journey of computer programming is the importance of time
					management – the ability to plan your work both efficiently and
					accurately.
				</p>
			</div>
			<div className='text-gray-200'>
				<h1 className='text-center text-2xl text-gray-200 mt-4'>EXPERIENCE</h1>
				{/* <div className='flex space-x-4 justify-center p-4'>
					<button
						onClick={() => {
							setToggleExperience(!toggleExperience);
						}}
						className='resume-toggle'
					>
						Toggle
					</button>
				</div> */}
				{/* {toggleExperience ? <Programming /> : <HospitalityContent />} */}
				<HospitalityContent />
			</div>
		</div>
	);
};

export default MainContent;
