import Head from 'next/head';
import MyResume from '../../components/Resume/MyResume';

const Resume = () => {
	return (
		<div>
			<Head>
				<title>Jordan Latz - My Resume -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className="bg-gray-200">
			<MyResume />
			</div>
		</div>
	);
};

export default Resume;
<div>
	<h1>Resume page</h1>
</div>;
