import paddleBoard from '../../public/videos/paddleboardpage.gif';
import movieConnection from '../../public/videos/movie-connection.gif';
import VideoCardPlayer from './VideoCardPlayer';
import { GoLinkExternal } from 'react-icons/go';

const ProjectDescription = () => {
	return (
		<div className='grid mt-14 text-white  border-opacity-70'>
			<h1 className="sm:hidden text-center py-8 text-red-500 text-lg border-t md:border-0 border-red-500">Projects</h1>
			<div className='grid gap-44 md:flex px-24 sm:p-0 justify-center'>
				<div className='grid gap-3'>
					<VideoCardPlayer
						src={movieConnection}
						alt={'movie connection website gif'}
						title={'Movie Connection'}
						href_deployment={'https://movie-connection.vercel.app/'}
						href_repository={'https://github.com/latz09/movie-connection'}
						css={'border-b border-red-500 '}
					/>
					<ul className='text-sm sm:text-base flex space-x-3 items-center flex-wrap justify-center'>
						<li>Javascript</li>
						<li>React</li>
						<li>NextJS</li>
						<li>TailwindCSS</li>
					</ul>
					<ul className='text-sm sm:text-base flex space-x-3 items-center flex-wrap justify-center'>
						<li>RestfulAPI</li>
						<li>Fully-Responsive</li>
						<li>UI-Design</li>
						<li>SSR</li>
						<li>Dynamic Routing</li>
					</ul>
					<a
						href='https://github.com/latz09/movie-connection'
						target='_blank'
						rel='noreferrer'
					>
						<div className='sm:text-xl text-red-500 flex space-x-4 items-center justify-center'>
							<span>code</span>
							<span className='text-gray-200'>
								<GoLinkExternal />
							</span>
						</div>
					</a>
				</div>

				<div className='grid gap-3 mb-8'>
					<VideoCardPlayer
						src={paddleBoard}
						alt={'paddleBoard website gif'}
						title={'Shop paddleboards'}
						href_deployment={'https://paddle-board-store.vercel.app/'}
						href_repository={'https://github.com/latz09/paddleBoardEcommerece'}
						css={'border-b border-red-500 '}
					/>
					<ul className='text-sm sm:text-base flex space-x-3 items-center flex-wrap justify-center'>
						<li>Javascript</li>
						<li>React</li>
						<li>NextJS</li>
						<li>MongoDB</li>
						<li>TailwindCSS</li>
					</ul>
					<ul className='text-sm sm:text-base flex space-x-3 items-center flex-wrap justify-center'>
						<li>API</li>
						<li>Fully-Responsive</li>
						<li>UI-Design</li>
						<li>SSR</li>
						<li>Dynamic Routing</li>
						<li>Serverless</li>
					</ul>
					<a
						href='https://github.com/latz09/paddleBoardEcommerece'
						target='_blank'
						rel='noreferrer'
					>
						<div className='sm:text-xl text-red-500 flex space-x-4 items-center justify-center'>
							<span>code</span>
							<span className='text-gray-200'>
								<GoLinkExternal />
							</span>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectDescription;
