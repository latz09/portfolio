import Link from 'next/link';



const ProjectBtn = () => {
	


	return (
		<>
			<Link href={'/my_projects'}>
				<span
					className='project-btn'
				>
					recent projects
				</span>
			</Link>
			;
		</>
	);
};

export default ProjectBtn;
