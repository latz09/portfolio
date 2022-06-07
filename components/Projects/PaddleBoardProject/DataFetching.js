import Image from 'next/image'
import staticPaths from '../../../public/images/codeSnippets/Datafetching/paths_props.png'
import pathIds from '../../../public/images/codeSnippets/Datafetching/idpaths.png'
import { AiOutlineArrowUp } from 'react-icons/ai';

const DataFetching = () => {
	return (
		<div className='bg-gray-400 prose pb-12 px-3'>
			<div className='p-2'>
				<div className='text-center md:text-xl font-base text-slate-700 bg-slate-300 rounded shadow'>
					<h2 className='text-gray-700'>
						Dynamically rendering Pages by accessing database directly
					</h2>
				</div>
			</div>
            <div className="pb-12">
				<div className='mt-12 mb-2'>
					<p className='text-center font-medium'>
						Pre rendering all the necessary paths needed for each paddleboard in the database
					</p>
				</div>
				<div className='shadow'>
					<Image src={staticPaths} alt='cart context' />
				</div>
			</div>
            <div className="pb-12">
				<div className='mt-12 mb-2'>
					<p className='text-center font-medium'>
						Setting each Link route to the dynamic path id
					</p>
				</div>
				<div className='shadow'>
					<Image src={pathIds} alt='cart context' />
				</div>
			</div>
			<a href='#snippet'>
				<div className='text-4xl flex place-content-center cursor-pointer'>
					<AiOutlineArrowUp />
				</div>
			</a>
		</div>
	);
};

export default DataFetching;
