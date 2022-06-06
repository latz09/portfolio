import { useRef, useState, useEffect } from 'react';

const ContactForm = () => {
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
			
			setisValid(false)	
			setisMessageSent(false)
			return
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
		setisValid(true)

		nameRef.current.value = '';
		companyRef.current.value = '';
		reachRef.current.value = '';
		messageRef.current.value = '';
	};

	return (
		<form>
			<div className='grid gap-2 md:gap-3 place-content-center justify-items-center p-2  border-myblue-300 bg-gray-700 border-2 hover:border-black transition ease-in duration-1000 md:rounded-full'>
				<div>
					{!isMessageSent && (
						<h1 className='text-myblue-100 font-extrabold text-xl p-3 tracking-widest text-center'>
							Send a message...
						</h1>
					)}
					{isMessageSent && (
						<h1 className='bg-myblue-100 text-xl text-gray-800 p-1 rounded animate-pulse'>
							Thank you for your message!
						</h1>
					)}
					{!isValid && (
							<h1 className='bg-red-200 text-xl text-center p-1 rounded animate-pulse'>
							Please include a way to reach you
						</h1>

					)}
				</div>
				<div>
					<input
						type='text'
						placeholder='name'
						className='contact-form-inputs'
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
				<div>
					<textarea
						cols='30'
						rows='10'
						placeholder='message...'
						className='contact-form-inputs'
						ref={messageRef}
					></textarea>
				</div>
				<div>
					<button onClick={messageHandler} className='contact-submit-btn'>
						Send
					</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
