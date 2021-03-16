const Card = ({ item }) => {
  return (
    <article className='overflow-hidden rounded-lg shadow-lg'>
      <a href='#'>
        <img
          alt='Placeholder'
          className='block h-auto w-full'
          src={item.picture}
        />
      </a>

      <header className='flex items-center justify-between leading-tight p-2 md:p-4'>
        <h1 className='text-lg'>
          <a className='no-underline hover:underline text-black' href='#'>
            {item.product_name}
          </a>
        </h1>
        <p className='text-grey-darker text-sm'>{item.price}</p>
      </header>

      <footer className='flex items-center justify-between leading-none p-2 md:p-4'>
        <a
          className='no-underline text-grey-darker hover:text-red-dark'
          href='#'
        >
          <span className='hidden'>Like</span>
          <i className='fa fa-heart'></i>
        </a>
      </footer>
    </article>
  );
};

export default Card;
