//////////////////////////////////////////////////////////
////  Random Placeholder Images
//////////////////////////////////////////////////////////

const RandomPlaceholderProductImage = (() => {

  let debug = false;
  let info = { name : 'RandomPlaceholderImages', version : '1.0' };

  let elements = document.querySelectorAll('.js--product-image-placeholder') || [];
  let images = Theme.assets.images.product_placeholders || [];
  let breakpoints = new Breakpoints();
  let tools = new Tools();

  //////////////////////////////////////////////////////////
  ////  Print Random Image
  //////////////////////////////////////////////////////////

  const renderRandomImage = () => {
    if ( images.length ) {
      elements.forEach( el => {
        let randomImageSrc = images[Math.floor(Math.random() * images.length)];
        el.setAttribute('data-src', randomImageSrc );
      });
    }
  };

  //////////////////////////////////////////////////////////
  ////  Public Method | Initialize
  //////////////////////////////////////////////////////////

  const init = () => {
    renderRandomImage();
  };

  //////////////////////////////////////////////////////////
  ////  Returned Methods
  //////////////////////////////////////////////////////////

  return {
    init
  };

});
