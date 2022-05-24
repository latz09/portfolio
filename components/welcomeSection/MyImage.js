import image from '../../public/images/myself.jpg';
import Image from 'next/image';

const MyImage = () => {
	return (
		<div>
			<Image src={image} alt='an image of myself, Jordan Latz' width={100} height={130} className="rounded-full shadow-lg" layout='intrinsic'/>
		</div>
	);
};

export default MyImage;
