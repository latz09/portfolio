import Image from 'next/image';
import cartcontext from '../../../public/images/codeSnippets/CartContext/cartContext.png';
import cartProvider from '../../../public/images/codeSnippets/CartContext/provider.png';
import addItemToCart from '../../../public/images/codeSnippets/CartContext/addItemToCart.png';
import removeItemFromCart from '../../../public/images/codeSnippets/CartContext/removeItemFromCart.png';
import cartDisplayBadge from '../../../public/images/codeSnippets/CartContext/cartDisplayBadge.png';
import initialContext from '../../../public/images/codeSnippets/CartContext/setInitialContext.png';
import cartDisplay from '../../../public/images/codeSnippets/CartContext/CartDisplay.png';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Link from 'next/link';

const ContextDescription = () => {
	return (
		<div className='bg-gray-400 prose pb-12 px-3'>
			{/* Header of section */}
			<div className='p-2'>
				<div className='text-center md:text-xl font-base bg-slate-300 rounded shadow-md'>
					<h2 className='text-gray-700'>Managing cart state</h2>
				</div>
			</div>
			{/* Creating The Context */}
			<div className='pb-12'>
				<div className='mt-12 mb-2'>
					<p className='text-center font-medium'>
						Here I created context and added the API calls to the value of the
						Provider to not only manage the context but to also manage the
						database.
					</p>
				</div>
				<div className='shadow'>
					<Image src={cartcontext} alt='cart context' />
				</div>
			</div>
			{/* Wrapping Provider in _app.js */}
			<div className='pb-12'>
				<div className='mt-8 mb-2'>
					<p className='text-center font-medium'>
						Next I wrapped the Provder in _app.js to have access to the context
						throughout the application.
					</p>
				</div>
				<div>
					<div className='shadow'>
						<Image src={cartProvider} alt='cart provider' />
					</div>
				</div>
			</div>
			{/* Setting the initial state */}
			<div className='pb-12'>
				<div className='mt-8 mb-2'>
					<p className='text-center font-medium'>
						Setting the initial state by pulling in the data through MongoDB
					</p>
				</div>
				<div>
					<div className='shadow'>
						<Image src={initialContext} alt='cart provider' />
					</div>
				</div>
			</div>
			{/* Displaying Cart Component */}

			<div className='pb-12'>
				<p className='text-center font-medium'>
					Using the context pulled in from the database to display the cart
					component
				</p>
				<div className='shadow'>
					<Image src={cartDisplay} alt='add item to cart' />
				</div>
			</div>

			{/* Examples of using context */}
			<div className='pb-12'>
				<h3 className='text-center font-medium border-b py-6'>
					The following are a few additional examples of where I used the
					context
				</h3>
			</div>
			{/* Add items */}
			<div className='pb-12'>
				<p className='text-center font-medium'>
					Adding Items to the cart / inserting to the database
				</p>
				<div className='shadow'>
					<Image src={addItemToCart} alt='add item to cart' />
				</div>
			</div>
			{/* Remove Items */}
			<div className='pb-12'>
				<p className='text-center font-medium'>
					Removing items from the cart / removing from the database
				</p>
				<div className='shadow'>
					<Image src={removeItemFromCart} alt='remove Item from cart' />
				</div>
			</div>
			{/* Cart Badge */}
			<div className='pb-12'>
				<p className='text-center font-medium'>
					Displaying the cart badge in the header with cart items total
				</p>
				<div className='shadow'>
					<Image src={cartDisplayBadge} alt='cart display badge' />
				</div>
			</div>
			<Link href={'/my_projects'} scroll>
				<div className='text-4xl flex place-content-center cursor-pointer'>
					<AiOutlineArrowUp />
				</div>
			</Link>
		</div>
	);
};

export default ContextDescription;
