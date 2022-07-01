import Head from 'next/head';
import ProjectsDescription from '../../components/Projects/ProjectDescription';

const MyProjects = () => {
	
	return (
		<div className='min-h-screen'>
			<Head>
				<title>Jordan Latz - My Projects -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className=''>
				<div>
					<ProjectsDescription />
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
