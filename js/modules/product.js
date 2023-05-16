const addToCartButton = document.querySelector( 'form[action="/cart/add"] button[type="submit"]' ) || false;
const options = document.querySelectorAll( 'form[action="/cart/add"] input[type="radio"]' ) || [];
const elements = {
  modal: document.querySelectorAll( '.product-image-gallery-modal' ) || []
};

const isSelected = () => {
  for (let i = 0; i < options.length; i++) {
    if ( options[i].checked ) {

    }
  }
}

const showActiveProductImageAfterModalShown = () => {
  elements.modal.forEach( element => {
    element.addEventListener( 'shown.bs.modal', event => {

      let delay = 250;
      let index = event.relatedTarget.dataset.productImageGalleryIndex || 0;
      let target = document.getElementById( `product-image-gallery-modal__item-${index}` ) || false;

      if ( target && target.offsetTop > 50 ) {
        setTimeout( () => {
          element.scrollTo({
            top: target.offsetTop,
            left: 0,
            behavior: 'smooth'
          });
        }, delay );
      }

    });
  });
}

const variantSelector = () => {
  options.forEach( input => {
    input.addEventListener( 'input', event => {
      if ( !input.disabled ) {
        addToCartButton.disabled = false;
      }
    });
  });
}

const init = () => {
  isSelected();
  showActiveProductImageAfterModalShown();
  variantSelector();
};

export default { init };
