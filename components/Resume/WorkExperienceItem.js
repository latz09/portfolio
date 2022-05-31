const WorkExperienceItem = ({
	title,
	employer,
	dutyOne,
	dutyTwo,
	dutyThree,
	dutyFour,
	date,
}) => {
	return (
		<div className='bg-gray-300 py-2 my-2 shadow-md hover:bg-gray-200 transition ease-in duration-700'>
			<div className='text-center'>
				<h1 className='text-lg font-semibold'>{title}</h1>
				<div className='text-sm text-gray-600'>
					<p>{employer}</p>
					<p className="text-xs">{date}</p>
				</div>
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
