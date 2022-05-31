const ContactForm = () => {
	return (
		<form>
			<div className='grid gap-3 place-content-center justify-items-center p-2  border-myblue-300 bg-gray-100 border
			md
			'>
				<div>
					<h1 className='text-myblue-300 font-extrabold text-xl p-3 tracking-widest'>
						Send a message...
					</h1>
				</div>
				<div>
					<input
						type='text'
						placeholder='name'
						className='contact-form-inputs'
					/>
				</div>
				<div>
					<input
						type='text'
						placeholder='company'
						className='contact-form-inputs'
					/>
				</div>
				<div>
					<input
						type='text'
						placeholder='how to reach you'
						className='contact-form-inputs'
					/>
				</div>
				<div>
					<textarea
						cols='30'
						rows='10'
						placeholder='message...'
						className='contact-form-inputs'
					></textarea>
				</div>
				<div>
					<button className='contact-submit-btn'>Send</button>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;
