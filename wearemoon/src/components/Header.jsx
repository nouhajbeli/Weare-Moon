import logo from '../assets/image/logo.png';
import image from '../assets/image/image.png';
import loc from '../assets/image/loc.svg';
const Header = ({ setview }) => {
  return (
    <header className='font-semibold'>
      <div className='grid grid-cols-6 gap-0 h-16 text-lg'>
        <div className='border col-span-2'>
          <img src={logo} alt='' className='m-auto' />
        </div>
        <div className='border col-span-2'>
          <input
            type='text'
            className='w-full h-full border-none'
            placeholder='Recherche...'
          />
        </div>
        <div className='border grid grid-cols-3 text-left'>
          <img src={loc} alt='' className='m-auto' />
          <p className='mt-4 col-span-2' style={{ color: '#4D302B' }}>
            Notre magasin
          </p>
        </div>
        <div className='border text-white' style={{ background: '#7DAF3F' }}>
          <p className='mt-4'>Configurateur</p>
        </div>
      </div>
      <nav className='grid grid-cols-4 gap-0 w-2/3 mx-auto h-10 text-center'>
        <div
          className='border cursor-pointer bg-white'
          onClick={() => setview('home')}
        >
          Acceuil
        </div>
        <div
          className='border cursor-pointer bg-white'
          onClick={() => setview('shop')}
        >
          Boutique
        </div>
        <div className='border cursor-pointer bg-white'>Nos realisations</div>
        <div className='border cursor-pointer bg-white'>Contactez nous</div>
      </nav>
      <img
        src={image}
        alt=''
        style={{ position: 'absolute', top: '63px', zIndex: '-1' }}
      />
    </header>
  );
};

export default Header;
