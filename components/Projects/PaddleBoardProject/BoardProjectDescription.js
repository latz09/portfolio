import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { useState } from 'react';
import ContextDescription from './ContextDescription';
import DataFetching from './DataFetching';

const BoardProjectDescription = () => {
	const [contextDescription, setContextDescription] = useState(true);
	const [dataFetchingDescription, setdataFetchingDescription] = useState(false);

	const handleContextPage = () => {
		setContextDescription(true);
		setdataFetchingDescription(false)
	};

	const handleDataPage = () => {
		setContextDescription(false);
		setdataFetchingDescription(true);
	};

	return (
		<div className='text-gray-300 prose p-4 text-sm md:text-base'>
			<div className='bg-slate-600 rounded-sm shadow-lg'>
				<h1 className='text-center text-2xl p-3'>Shop Paddleboards Website</h1>
				<div className='flex justify-around text-slate-900 font-medium'>
					<p>Next JS</p>
					<p>React</p>
					<p>Tailwind CSS</p>
					<p>MongoDB</p>
				</div>
			</div>
			<div className='leading-7'>
				<h2 className='text-center'>Highlights</h2>
				<p>
					I created a database of paddleboards and gear -- borrowed from{' '}
					<span className='underline'>islesurfandsup.com/</span>
					{''}. Using React, the components are rendered dynamically from the
					database. Everything, except for the cart component, is serverless. (I
					will go into how I managed the Cart State using react context and set
					the intial context with{' '}
					<span className='font-medium'> getServerSideProps</span> below).{' '}
				</p>
				<p>
					To render the paddleboards and accessories data, you will also see how
					I dynamically rendered page routes using{' '}
					<span className='font-medium'>getStaticPaths</span> and{' '}
					<span className='font-medium'>getStaticProps</span>
				</p>
			</div>
			<div className='text-green-600'>
				<p>Link to page</p>
				<div className='flex items-center space-x-4'>
					<p>Link to repository</p>
					<span className='text-4xl'>
						<AiFillGithub />
					</span>
				</div>
			</div>
			<div className='text-center space-y-5 pb-3'>
				<h3 className='text-gray-400 tracking-widest'>
					Example code Snippets from project
				</h3>
				<div className='text-center grid gap-2'>
					<div className='project-tabs' onClick={handleContextPage}>
						Context
					</div>
					<div className='project-tabs' onClick={handleDataPage}>
						Serverless/Dynamic pages
					</div>
				</div>
			</div>
			{contextDescription && <ContextDescription />}
			{dataFetchingDescription && <DataFetching />}
		</div>
	);
};

export default BoardProjectDescription;
