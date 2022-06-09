import Head from 'next/head';
import ContactForm from '../../components/Contact/ContactForm';
import ContactSection from '../../components/Contact/ContactSection';
import LargerContactSection from '../../components/Contact/LargerContactSection';

const ContactPage = () => {
	return (
		<div className='min-h-screen mx-auto bg-gray-900 '>
			<Head>
				<title>Jordan Latz - Contact Me -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className='md:flex justify-evenly items-center'>
				<div className='pt-8'>
					<LargerContactSection />
				</div>

				{/* <ContactForm /> */}
			</div>
		</div>
	);
};

export default ContactPage;
