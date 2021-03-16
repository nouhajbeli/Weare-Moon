import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Shop = () => {
  const [items, setitems] = useState([
    {
      id: 8,
      price: '59,99 €',
      picture:
        'https://www.willycolin.fr/_media/img/medium/photo-20-04-10-083.jpg',
      product_name: 'Bois Pine Lisse',
    },
    {
      id: 9,
      price: '62,99 €',
      picture:
        'https://www.terrasse-nature.com/Files/25514/Img/24/REAL-REC-GEORGE-5.jpg',
      product_name: 'Bois Afrormosia',
    },
    {
      id: 2,
      price: '35,99 €',
      picture: 'https://www.devis-bardage-bois.com/DBB/bardage-bois-v.jpg',
      product_name: 'Bardage Bois',
    },

    {
      id: 4,
      price: '54,99 €',
      picture:
        'https://daussion.com/wp-content/uploads/TERRASSE-EN-BOIS-EXOTIQUE-MOABI-.jpg',
      product_name: 'Bois Exotique',
    },
    {
      id: 3,
      price: '54,99 €',
      picture: 'https://www.parquetn1.com/314/terrasse-meleze-de-siberie.jpg',
      product_name: 'Bois Siberie',
    },
    {
      id: 5,
      price: '46,99 €',
      picture:
        'https://www.sbm-tbp.com/wp-content/uploads/2017/05/lames-terrasse-bois-multi-largeurs-pornic.jpg',
      product_name: 'Bois multi largeurs',
    },
    {
      id: 1,
      price: '42,99 €',
      picture:
        'https://www.protacfrance.com/wp-content/uploads/2016/01/Natural-meleze-venitien-27x68-600x600.jpg',
      product_name: 'Lame bois Milano',
    },
    {
      id: 6,
      price: '29,99 €',
      picture:
        'https://media.jardineriadelvalles.com/product/valla-lamas-madera-apilables-milano-800x800_P8QyP0C.jpeg',
      product_name: 'Bardage Bois Claire',
    },
    {
      id: 7,
      price: '57,99 €',
      picture:
        'https://www.vivreenbois.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/03-terrasse-santorin-pin-durapin-piveteaubois-002.jpg',
      product_name: 'Bois Santorin',
    },
  ]);
  useEffect(() => {
    // -----------------------------------------------
    // -----------------------------------------------
    // Blocked by cors
    // -----------------------------------------------
    // axios
    //   .get('http://api.mocki.io/v1/af37df01', {
    //     headers: { 'Access-Control-Allow-Origin': '*' },
    //   })
    //   .then((res) => {
    //     setitems(res.data);
    //     console.log(items);
    //   });
  });

  return (
    <div className='grid grid-cols-3 gap-4 mt-96 w-2/3 xl:mx-auto'>
      {items.map((item, i) => {
        return <Card item={item} key={i} />;
      })}
    </div>
  );
};

export default Shop;
