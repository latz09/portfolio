import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ src, title, pageLink }) => {
	return (
		<div className='text-gray-100 grid justify-items-center gap-2'>
			<Link href={'/my_projects'}>
				<Image
					src={src}
					alt=''
					height={400}
					width={350}
					className='cursor-pointer'
				/>
			</Link>
			<span className='text-xl'>{title}</span>

			<a
				target='_blank'
				rel='noreferrer'
				href={pageLink}
				className='text-red-500 font-bold text-xl hover:opacity-75 cursor-pointer'
			>
				Visit Page
			</a>
		</div>
	);
};

export default ProjectItem;
