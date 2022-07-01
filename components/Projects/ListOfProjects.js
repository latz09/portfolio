import Link from 'next/link';
import paddleBoard from '../../public/videos/paddleboardpage.gif';
import movieConnection from '../../public/videos/movie-connection.gif';
import VideoCardPlayer from './VideoCardPlayer';

const ListOfProjects = () => {
	return (
		<>
			<div>
				{' '}
				<VideoCardPlayer
					src={movieConnection}
					alt={'movie connection website gif'}
					title={'Movie Connection'}
					href_deployment={'https://movie-connection.vercel.app/'}
					css={'lg:animate-pulse'}
					href_repository={'https://github.com/latz09/movie-connection'}
				/>
				<Link href={'/my_projects'}>
					<p className='hover:opacity-70 cursor-pointer text-white text-center'>
						details -{'>'}
					</p>
				</Link>
			</div>
			<div className="mt-14 md:mt-0">
				<VideoCardPlayer
					src={paddleBoard}
					alt={'paddleBoard website gif'}
					title={'Shop paddleboards'}
					href_deployment={'https://paddle-board-store.vercel.app/'}
					css={'lg:animate-pulse'}
					href_repository={'https://github.com/latz09/paddleBoardEcommerece'}
				/>
				<Link href={'/my_projects'}>
					<p className='hover:opacity-70 cursor-pointer text-white text-center'>
						details -{'>'}
					</p>
				</Link>
			</div>
		</>
	);
};

export default ListOfProjects;
