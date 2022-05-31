import Head from 'next/head';
import MyStory from '../../components/Story/MyStory';

const Blog = () => {
	return (
		<div className='min-h-screen pb-12'>
			<Head>
				<title>Jordan Latz - my story -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<MyStory />
		</div>
	);
};

export default Blog;
