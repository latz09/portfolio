import Link from 'next/link';

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
		<>
			<Link href={'/my_projects'}>
				<a
					className={`${
						pulse
							? 'animate-pulse project-btn transition ease-in duration-500 '
							: 'project-btn transition ease-in duration-500 '
					}`}
				>
					recent projects
				</a>
			</Link>
			;
		</>
	);
};

export default ProjectBtn;
