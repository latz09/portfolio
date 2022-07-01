import Head from 'next/head';
import Contact from '../../components/Contact/Contact';

const ContactPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Jordan Latz - Contact Me -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div>
				<Contact />
			</div>
		</div>
	);
};

export default ContactPage;
