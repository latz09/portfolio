import workExperience from '../../data/workExperience';
import WorkExperienceItem from './WorkExperienceItem';

const MainContent = () => {
	return (
		<div className='grid gap-4'>
			<div className='prose bg-myblue-300 text-sm tracking-wider leading-5 text-gray-100 text-justify p-5 md:border-l'>
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
				<p className='text-base'>
					Take a look at my latest project{' '}
					<span className='font-semibold'>Here</span>
				</p>
				<p className='text-base'>
					Take a look at my full story{' '}
					<span className='font-semibold'>Here</span>
				</p>
			</div>
			<h1 className='text-center text-2xl text-gray-700 mt-4'>WORK EXPERIENCE</h1>
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
					<li className='skills transition ease-in duration-500'>Creativity</li>
					<li className='skills transition ease-in duration-500'>
						Time Management
					</li>
					<li className='skills transition ease-in duration-500'>Teamwork</li>
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
