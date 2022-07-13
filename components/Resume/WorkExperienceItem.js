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
		<div className='bg-gray-900 py-2 my-2 text-gray-200'>
			<div className='text-center'>
				<h1 className='text-lg font-semibold'>{title}</h1>
				<div className='text-sm text-gray-400'>
					<p>{employer}</p>
					<p className="text-xs">{date}</p>
				</div>
			</div>
		
		</div>
	);
};

export default WorkExperienceItem;
