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
							/>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MainContent;
