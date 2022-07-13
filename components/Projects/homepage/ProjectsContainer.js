import { projects } from '../../../data/projects';
import ProjectItem from './ProjectItem';
// import x from '../../../public/images/project-screenshots/'

const ProjectsContainer = () => {
	return (
		<>
        <span className="text-red-500 opacity-75 text-3xl grid place-content-center pb-8">Recent Projects</span>
			<div className='grid justify-center gap-4 sm:flex sm:space-x-4'>
				{projects.map((project) => (
					<div key={project.title}>
						<ProjectItem src={project.image} title={project.title} pageLink={project.pageLink}/>
					</div>
				))}
			</div>
		</>
	);
};

export default ProjectsContainer;
