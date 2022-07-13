import WorkExperienceItem from './WorkExperienceItem';
import workExperience from '../../data/workExperience';

const HospitalityContent = () => {
	return (
		<div>
			{/* <h1 className="text-center text-2xl border-b pb-2 mb-8">Experience as Chef</h1> */}
			<div className='grid gap-4 px-2'>
				<ul className="text-center space-y-3 mt-4">
					<li>https://movie-connection.vercel.app/</li>
					<li>https://paddle-board-store.vercel.app/</li>
					<li>https://easy-globle.vercel.app/</li>
				</ul>
				<ul>
					{workExperience.map((item) => (
						<div key={item.date}>
							<WorkExperienceItem
								title={item.title}
								employer={item.employer}
								date={item.date}
							/>
						</div>
					))}
				</ul>
			</div>

			<div className=' rounded-md shadow-md mx-2 p-4'>
				<h1 className='text-xl text-center font-medium mb-5 text-gray-200'>
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

export default HospitalityContent;
