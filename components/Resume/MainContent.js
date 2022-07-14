import Programming from './ProgrammingContent';
import HospitalityContent from './HospitalityContent';
import { useState } from 'react';

const MainContent = () => {
	const [toggleExperience, setToggleExperience] = useState(false);

	return (
		<div className='grid gap-4 bg-gray-800 bg-opacity-60'>
			<div className='prose text-sm tracking-wider leading-5 text-gray-200 place-self-center p-5 md:border-l'>
				<p className=''>
				I am a self-taught programmer who has gathered the necessary tools and knowledge from an intensive bootcamp, deploying apps and the continual absorption of knowledge.  As someone who worked their way from a dishwasher to an Executive Sous Chef, acquiring endless skills and attributes.  
				</p>
				<p>I began my Journey learning the “basics” of front-end development and additionally immersed myself into an intensive <span className="font-semibold italic"> Full Stack Web, and Mobile Development Bootcamp. </span> Following my completion of the program I immediately enrolled myself into additional courses to continue gathering tools and knowledge</p>
				<p>By developing my own apps, from scratch to deployment, I continue the never-ending quest for knowledge and improving my skills </p>
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
