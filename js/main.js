import Announcements from './modules/announcements';
import Cart from './modules/cart';
import Credits from './modules/credits';
import Gliders from './modules/gliders';
import Product from './modules/product';
import PushMenu from './modules/pushMenu';
import RandomImage from './modules/randomImage';
import Scrolling from './modules/scrolling';
import Tools from './modules/tools';

Cart.init();
Credits.init();
Announcements.init();
Product.init();
PushMenu.init();
RandomImage.init();
Scrolling.init();

AOS.init({
  offset: 150,                // offset (in px) from the original trigger point
  delay: 0,                   // values from 0 to 3000, with step 50ms
  duration: 500,              // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out',      // default easing for AOS animations
});

window.addEventListener( 'load', function (e) {
  Tools.setHeaderHeightTotalCSSVariable();
  Gliders.init();
  AOS.refresh();
});

window.addEventListener( 'resize', Tools.debounce(() => {
  // debounced resize based functions here
  Tools.setHeaderHeightTotalCSSVariable();
  console.log( 'resized' );
}, 300));

window.addEventListener( 'scroll', Tools.debounce(() => {
  // debounced scroll based functions here
  console.log( 'scrolled' );
}, 300));
