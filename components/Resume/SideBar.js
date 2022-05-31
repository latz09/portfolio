import Image from 'next/image';
import myImage from '../../public/images/myself_thumb.jpg';

const Sidebar = () => {
	return (
		<div
			className='bg-myblue-300  text-gray-200 tracking-wide text-sm  px-3 py-4
        md:grid md:items-center md:gap-4 grid gap-3 justify-center'
		>
			<div className='hidden md:text-center md:inline'>
				<Image
					src={myImage}
					alt='Jordan Latz'
					height={120}
					width={100}
					className='rounded-full border-2 shadow-md'
					layout='fixed'
				/>
			</div>
			<div>
				<h1 className='font-medium text-2xl tracking-widest border-b-2 mb-2 text-white'>
					CONTACT
				</h1>
				<p>latz.jordan@gmail.com</p>
				<p>www.myPortfoli@something.com</p>
				<p>Twin Cities, Minnesota</p>
			</div>

			<div>
				<div className='md:grid md:gap-2'>
					<h1 className='font-medium text-2xl tracking-widest border-b-2 mb-2 text-white'>
						EDUCATION
					</h1>

					<p className='text-xl text-white'>Bachelor of Science</p>
					<p className=''>
						The international Culinary School at The Art Institutes,
						Minneapolis, MN
					</p>
					<p>2011-2015</p>
				</div>
				<div className='py-3 md:grid md:gap-3'>
					<p className='text-xl text-white'>
						Full Stack Web and Mobile Development
					</p>
					<p className=''>nucamp Bootcamp, online </p>
					<p>2021</p>
				</div>
				<div className='text-center md:hidden'>
					<Image
						src={myImage}
						alt='Jordan Latz'
						height={120}
						width={100}
						className='rounded-full border-2 shadow-md'
						layout='fixed'
					/>
				</div>
                {`<<<<add skils here >>>>`}
			</div>
            <div className="md:min-h-screen"></div>
		</div>
	);
};

export default Sidebar;
