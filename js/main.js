// "./modules/_instagramFeed.js";
// "./modules/_mobileMenu.js";
// "./modules/_modals";

import Announcements from './modules/announcements';
import Cart from './modules/cart';
import Credits from './modules/credits';
import Gliders from './modules/gliders';
import MainMenu from './modules/mainMenu';
import Product from './modules/product';
import RandomImage from './modules/randomImage';
import Scrolling from './modules/scrolling';
import Tools from './modules/tools';

let throttled = false;

Cart.init();
Credits.init();
Announcements.init();
MainMenu.init();
Product.init();
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

window.addEventListener( 'resize', function(e) {
  if ( !throttled ) {
    window.requestAnimationFrame(function() {
      Tools.setHeaderHeightTotalCSSVariable();
      throttled = false;
    });
    throttled = true;
  }
});
