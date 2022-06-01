// import { MongoClient } from 'mongodb';
import Head from 'next/head';

const MyProjects = ({messages}) => {
	console.log(messages)
	return (
		<div>
			<Head>
				<title>Jordan Latz - My Projects -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
		</div>
	);
};

// export async function getStaticProps() {
// 	const client = await MongoClient.connect(
// 		'mongodb+srv://latzgetcoding:Y4jkOB5zf14tZZXO@Portfolio.7vu9u.mongodb.net/?retryWrites=true&w=majority'
// 	);
// 	const db = client.db();
// 	const messageCollection = db.collection('messages');

// 	const data = await messageCollection.find().toArray()

// 	return {
// 		props: { messages: data },
// 	};
// }

export default MyProjects;
