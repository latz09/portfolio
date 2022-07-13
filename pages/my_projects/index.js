import Head from 'next/head';
import ProjectPageContainer from '../../components/Projects/project-page/ProjectPageContainer';

const MyProjects = () => {
	return (
		<div className='min-h-screen text-gray-200 mb-32'>
			<Head>
				<title>Jordan Latz - My Projects -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className="mt-20 grid gap-12">
				<h1 className="text-lg sm:text-3xl text-center mb-12 opacity-50">Recent Work</h1>
				<ProjectPageContainer />
			</div>
		</div>
	);
};

export default MyProjects;
