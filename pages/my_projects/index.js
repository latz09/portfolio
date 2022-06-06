import Head from 'next/head';
import BoardProjectDescription from '../../components/Projects/PaddleBoardProject/BoardProjectDescription';
import ContextDescription from '../../components/Projects/PaddleBoardProject/ContextDescription';

const MyProjects = ({ messages }) => {
	console.log(messages);
	return (
		<div className='bg-slate-700 min-h-screen'>
			<Head>
				<title>Jordan Latz - My Projects -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className='max-w-fit mx-auto'>
				<div>
					<BoardProjectDescription />
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
