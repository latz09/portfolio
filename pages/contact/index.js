import Head from 'next/head';
import ContactForm from '../../components/Contact/ContactForm';
import ContactSection from '../../components/Contact/ContactSection';
import LargerContactSection from '../../components/Contact/LargerContactSection';

const ContactPage = () => {
	return (
		<div className='min-h-screen mx-auto bg-gray-300 '>
			<Head>
				<title>Jordan Latz - Contact Me -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className='lg:flex justify-evenly items-center'>
				<div className="lg:hidden">
				<ContactSection />
				</div>
				<div className="mt-5 hidden lg:block">
					<LargerContactSection />
				</div>
				<ContactForm />
			</div>
			<div className=''></div>
		</div>
	);
};

export default ContactPage;
