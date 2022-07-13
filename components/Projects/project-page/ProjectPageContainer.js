import { projects } from '../../../data/projects';
import ProjectPageItem from '../project-page/ProjectpageItem';

const ProjectPageContainer = () => {
    console.log(projects)
	return (
		<div className="grid gap-20">
			{projects.map((project) => (
				<div key={project.title}>
					<ProjectPageItem image={project.image} title={project.title} description={project.description} tools={project.tools} pageLink={project.pageLink} codeLink={project.codeLink} highlights={project.highlights} />
				</div>
			))}
		</div>
	);
};

export default ProjectPageContainer;
