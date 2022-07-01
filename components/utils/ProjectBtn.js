import { useEffect, useState } from 'react';

const ProjectBtn = () => {
	const [pulse, setPulse] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setPulse(true);
		}, 2000);
		setTimeout(() => {
			setPulse(false);
		}, 7500);
	}, []);

	
	return (
		<div>
			<a href='#projects'>
				<button className={`${pulse ? 'animate-pulse project-btn transition ease-in duration-500 ' : 'project-btn transition ease-in duration-500 '}`}>
					recent projects
				</button>
				;
			</a>
			;
		</div>
	);
};

export default ProjectBtn;
