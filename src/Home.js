import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const firstBg = 'http://geekyfreaky.com/wp-content/uploads/2018/01/vrXXOJ.gif';
const secondBg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf2836cb-5893-4a6c-b156-5a89d94fc721/dce61tw-3cfde162-fb53-4b5a-96cd-ae1df756df65.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMjgzNmNiLTU4OTMtNGE2Yy1iMTU2LTVhODlkOTRmYzcyMVwvZGNlNjF0dy0zY2ZkZTE2Mi1mYjUzLTRiNWEtOTZjZC1hZTFkZjc1NmRmNjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vEwtplf1FBeP01zGIPa3zIMEz7mUudddreie2iCbe9Q';
const thirdBg = 'https://archive-media-0.nyafuu.org/wg/image/1506/42/1506423646403.gif';

const firstVapes = 'https://vaping.com/media/catalog/product/cache/1/small_image/236x297/7adae98f10b65a46c99555dc2b8a9bb0/f/r/freemax-twister-kit.png';
const secondVapes = 'https://cdn11.bigcommerce.com/s-u5dfog9d/images/stencil/500x659/products/109/314/ego_battery__22630.1417747544.png?c=2';


const firstGear = 'https://vaping.com/media/catalog/product/cache/1/small_image/236x297/7adae98f10b65a46c99555dc2b8a9bb0/s/i/sigelei-sibra-f-kit__42765.1557180959.png';
const secondGear = 'https://www.directvapor.com/media/catalog/product/cache/28/small_image/250x250/9df78eab33525d08d6e5fb8d27136e95/d/i/direct-vapor-istick-pico_1_.png';
const thirdGear = 'https://vapingdaily.com/wp-content/uploads/2018/07/Vandy-Vape-Pulse-BF-Squonk-Vape-MOD.png';
const fourthGear = 'https://cdn.shopify.com/s/files/1/0256/0531/products/0f44b4e38f4ce8a2c9f6801d78b0606c_600x_ae6b792b-8f00-4bfb-9d79-fb449564ad52_grande.png?v=1544636134';

const Home = ()=> (
  <div className='Home'>
    <div className='screen'
         style={{ backgroundImage: `url("${firstBg}")`}}>
      <div className='landing-blurb'>
        <h1 className='neon'>This is a lounge where you can vape...</h1>
        <div className='p-container'>
          <p>we have all the best vapes and stuff</p>
          <p>we have all the best flavours</p>
          <p>for cool people who hate smoking</p>
          <p><Link to='/menu'>Check out our Menu</Link></p>
        </div>
      </div>
      <div className='vape-img-container'>
        <img alt='' src={firstVapes}/>
        <img alt='' src={secondVapes}/>
        <img alt='' src={firstVapes}/>
      </div>
    </div>
    <div className='screen'
         style={{ backgroundImage: `url("${secondBg}")`}}>
      <img alt='' src='https://i.imgur.com/vbbTxB0.png' className='dave-chappelle'/>
      <div className='dave-blurb'>
        <h1 className='neon'>Vape with all the celebs...</h1>
        <div className='p-container'>
          <p>I can't figure out why these crackers are still smoking cigarettes at dive bars</p>
          <p>... do they want to look stupid? ... that's why I vape here</p>
          <p>- Dave Chappelle</p>
        </div>
      </div>
    </div>
    <div className='screen'
         style={{ backgroundImage: `url("${thirdBg}")`}}>
      <div className='order-title'>
        <h2>All the best gear</h2>
      </div>
      <img alt='' src={firstGear}/>
      <img alt='' src={secondGear}/>
      <img alt='' src={thirdGear}/>
      <img alt='' src={fourthGear}/>
      <div className='order-action'>
        <p>Available online one click away</p>
        <Link to='/order' />
      </div>
    </div>
  </div>
);

export default Home;
