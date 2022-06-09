const SendMessageBtn = ({ setShowModal }) => {
	return (
		<div>
			<button
				className='message'
				onClick={() => {
					setShowModal(true);
				}}
			>
				Send me a message
			</button>
		</div>
	);
};

export default SendMessageBtn;
