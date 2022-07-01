import WorkExperienceItem from "./WorkExperienceItem";
import workExperience from '../../data/workExperience'

const HospitalityContent = () => {
    return ( 			<div>
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
                <li className='skills transition ease-in duration-500'>
                    Creativity
                </li>
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
    </div> );
}
 
export default HospitalityContent;