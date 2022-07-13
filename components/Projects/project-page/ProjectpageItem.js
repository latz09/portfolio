
import Image from 'next/image';

const ProjectPageItem = ({
	image,
	title,
	description,
	tools,
	pageLink,
	codeLink,
}) => {

	return (
		<>
			<div className='grid grid-cols-3 p-3 shadow-sm shadow-gray-900'>
				<a target='_blank' rel='noreferrer' href={pageLink}>
					<Image
						src={image}
						height={250}
						width={200}
						alt=''
						layout='responsive'
					/>
				</a>
				<div className='col-span-2 grid gap-2 px-4 '>
					<span className='justify-self-center text-red-500 text-lg sm:text-3xl'>
						{title}
					</span>
					<span className='text-xs sm:text-base'></span>
					<div className='flex text-sm sm:text-lg justify-between md:justify-center md:space-x-8 text-red-500'>
						<a target='_blank' rel='noreferrer' href={pageLink}>
							Visit Page
						</a>

						<a target='_blank' rel='noreferrer' href={codeLink}>
							Source Code
						</a>
					</div>
					<span className='text-xs sm:text-lg self-end text-center '>
						{tools}
					</span>
				</div>
			</div>
		</>
	);
};

export default ProjectPageItem;
