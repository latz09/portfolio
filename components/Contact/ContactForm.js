import { useRef, useState, useEffect } from 'react';

const ContactForm = ({ setShowModal }) => {
	const [isMessageSent, setisMessageSent] = useState(false);
	const [isValid, setisValid] = useState(true);

	const nameRef = useRef();
	const companyRef = useRef();
	const reachRef = useRef();
	const messageRef = useRef();

	const messageHandler = (event) => {
		event.preventDefault();
		const enteredName = nameRef.current.value;
		const enteredCompany = companyRef.current.value;
		const enteredReach = reachRef.current.value;
		const enteredMessage = messageRef.current.value;

		if (enteredReach === '') {
			setisValid(false);
			setisMessageSent(false);
			return;
		}

		fetch('/api/messages', {
			method: 'POST',
			body: JSON.stringify({
				name: enteredName,
				company: enteredCompany,
				reach: enteredReach,
				message: enteredMessage,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));

		setisMessageSent(true);
		setTimeout(() => {
			setisMessageSent(false);
		}, 6000);

		setisMessageSent(true);
		setisValid(true);

		nameRef.current.value = '';
		companyRef.current.value = '';
		reachRef.current.value = '';
		messageRef.current.value = '';
	};

	return (
		<form className=''>
			<div className=''>
	
				<div className='text-center mt-12 pb-5'>
					<div className=''>
						{!isMessageSent && (
							<h1 className='text-red-500 sm:text-gray-100 font-medium text-xl p-3 tracking-widest text-center'>
								Send a message <span className="text-red-500 font-extrabold animate-pulse">...</span> 
							</h1>
						)}
						{isMessageSent && (
							<h1 className='text-xl text-gray-400 p-1 rounded animate-pulse'>
								Thank you for your message!
							</h1>
						)}
						{!isValid && (
							<h1 className='text-xl text-center text-red-600 p-1 rounded animate-pulse'>
								Please include a way to reach you
							</h1>
						)}
					</div>
				</div>
				<div className='grid place-content-center gap-2'>
					<div>
						<input
							type='text'
							placeholder='name'
							className='contact-form-inputs '
							ref={nameRef}
						/>
					</div>
					<div>
						<input
							type='text'
							placeholder='company'
							className='contact-form-inputs'
							ref={companyRef}
						/>
					</div>
					<div>
						<input
							type='text'
							placeholder='how to reach you'
							className='contact-form-inputs'
							ref={reachRef}
						/>
					</div>
				</div>
				<div className='grid place-content-center gap-4 pt-4'>
					<textarea
						cols='30'
						rows='10'
						placeholder='message...'
						className='contact-form-inputs mx-4'
						ref={messageRef}
					></textarea>

					<button onClick={messageHandler} className='contact-submit-btn'>
						Send
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
