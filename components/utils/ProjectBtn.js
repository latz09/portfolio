import Link from 'next/link';



const ProjectBtn = () => {
	


	return (
		<>
			<Link href={'/my_projects'}>
				<span
					className='project-btn'
				>
					recent work
				</span>
			</Link>
			;
		</>
	);
};

export default ProjectBtn;
