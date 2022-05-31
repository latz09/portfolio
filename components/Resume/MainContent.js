import workExperience from '../../data/workExperience';
import WorkExperienceItem from './WorkExperienceItem';

const MainContent = () => {
	return (
		<div className='grid gap-4'>
			<div>
				<p className='text-gray-800 text-justify py-8 px-4'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Pellentesque diam volutpat commodo sed egestas egestas fringilla
					phasellus. Volutpat est velit egestas dui id ornare arcu. In cursus
					turpis massa tincidunt dui ut ornare.
				</p>
			</div>
			<h1 className='text-center text-2xl text-gray-700'>WORK EXPERIENCE</h1>
			<div className='grid gap-4 px-2'>
				<ul>
					{workExperience.map((item) => (
						<div key={item.date}>
							<WorkExperienceItem
								title={item.title}
								employer={item.employer}
								dutyOne={item.dutyOne}
								dutyTwo={item.dutyTwo}
								dutyThree={item.dutyThree}
								dutyFour={item.dutyFour}
								date={item.date}
							/>
						</div>
					))}
				</ul>
			</div>
			<div className='bg-myblue-100 rounded-md shadow-md mx-2 p-4'>
				<h1 className='text-xl text-center font-medium mb-5'>
					Acquired Skills
				</h1>
				<ul className='grid gap-3 place-items-center text-sm tracking-widest'>
					<li className='skills transition ease-in duration-500'>
						Organization
					</li>
					<li className='skills transition ease-in duration-500'>
						Skillfull Multitasking
					</li>
					<li className='skills transition ease-in duration-500'>
						Creativity
					</li>
					<li className='skills transition ease-in duration-500'>
						Time Management
					</li>
					<li className='skills transition ease-in duration-500'>
						Teamwork
					</li>
					<li className='skills transition ease-in duration-500'>
						Leadership skills
					</li>
					<li className='skills transition ease-in  duration-500'>
						Resilience
					</li>
					<li className='skills transition ease-in  duration-500'>
						Physical and mental stamina
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MainContent;
