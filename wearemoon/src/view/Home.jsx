import e from '../assets/image/e.svg';
import img1 from '../assets/image/img1.png';
import img2 from '../assets/image/img2.png';
import img3 from '../assets/image/img3.png';
import img4 from '../assets/image/img4.png';
import img5 from '../assets/image/img5.png';
import fence from '../assets/image/fence.svg';
import arrow from '../assets/image/arrow-left-line.svg';
const Home = ({ setview }) => {
  return (
    <div>
      <div>
        <div className='grid grid-cols-5 gap-16 mt-96 w-2/3 m-auto text-white font-semibold'>
          <div className='text-center relative'>
            <p
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              Lame Composite
            </p>
            <img src={img1} alt='' />
          </div>
          <div className='text-center relative'>
            <p
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              Lame en bois
            </p>
            <img src={img2} alt='' />
          </div>
          <div className='text-center relative'>
            <p
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              Panneau bois
            </p>
            <img src={img3} alt='' />
          </div>
          <div className='text-center relative'>
            <p
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              Grille rigide
            </p>
            <img src={img5} alt='' />
          </div>
          <div className='text-center relative'>
            <p
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              Gabion
            </p>
            <img src={img4} alt='' />
          </div>
        </div>
        <div
          className='w-2/3 mx-auto h-40 mt-8 grid grid-cols-7 gap-2 shadow'
          style={{ background: '#4D302B', overflow: 'hidden' }}
        >
          <img
            className='transform -rotate-12 relative'
            style={{ left: '-40px', top: '-10px' }}
            src={e}
            alt=''
          />
          <img src={fence} alt='' />
          <div
            style={{
              textAlign: 'left',
              font: 'normal normal normal 20px/26px PT Sans',
              letterSpacing: '0px',
              color: '#FFFFFF',
              opacity: '1',
            }}
            className='col-span-3'
          >
            <h3 className='text-4xl mt-4'>Configurez votre espace</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidu.
            </p>
          </div>
          <img src={arrow} alt='' className='col-span-2 m-auto' />
        </div>
      </div>
    </div>
  );
};

export default Home;
