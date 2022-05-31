const WorkExperienceItem = ({ title, employer, dutyOne, dutyTwo, dutyThree, dutyFour }) => {
	return (
		<div className='bg-gray-300 py-2 my-2 shadow-md hover:bg-gray-200'>
			<div className='text-center'>
				<h1 className='text-lg font-semibold'>{title}</h1>
				<p className='text-sm text-gray-600'>{employer}</p>
			</div>
			<div className='grid gap-2 px-8 text-sm py-4 content-center items-center'>
				<li>{dutyOne}</li>
				<li>{dutyTwo}</li>
				<li>{dutyThree}</li>
				<li>{dutyFour}</li>
			</div>
		</div>
	);
};

export default WorkExperienceItem;
