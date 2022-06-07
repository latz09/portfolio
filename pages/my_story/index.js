import Head from 'next/head';
import MyStory from '../../components/Story/MyStory';

const Blog = () => {
	return (
		<div className=''>
			<Head>
				<title>Jordan Latz - my story -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className="bg-black min-h-screen">
			<MyStory />
			</div>
		</div>
	);
};

export default Blog;
