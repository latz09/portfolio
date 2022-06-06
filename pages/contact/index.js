import Head from 'next/head';
import ContactForm from '../../components/Contact/ContactForm';
import ContactSection from '../../components/Contact/ContactSection';

const ContactPage = () => {
	return (
		<div className='min-h-screen max-w-2xl mx-auto bg-slate-700 '>
			<Head>
				<title>Jordan Latz - Contact Me -</title>
				<meta name='description' content='Find a great programmer here' />
			</Head>
			<div className="py-12">
				<ContactSection />
			</div>
			<div className='p-3'>
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactPage;
