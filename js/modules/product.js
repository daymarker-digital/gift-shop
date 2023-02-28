const addToCartButton = document.querySelector( 'form[action="/cart/add"] button[type="submit"]' ) || false;
const options = document.querySelectorAll( 'form[action="/cart/add"] input[type="radio"]' ) || [];
const elements = {
  modal: document.querySelectorAll( '.main-product__modal' ) || []
};

const isSelected = () => {
  for (let i = 0; i < options.length; i++) {
    console.log(options[i]);
    if ( options[i].checked ) {
      console.log('checked!');
    }
  }
}

const showActiveProductImageAfterModalShown = () => {
  elements.modal.forEach( element => {
    element.addEventListener( 'shown.bs.modal', event => {

      let delay = 250;
      let index = event.relatedTarget.dataset.productImageIndex || 0;
      let target = document.getElementById( `main-product__modal-gallery-item-${index}` ) || false;

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
        console.log('not disabled');
        addToCartButton.disabled = false;
      } else {
        console.log('disabled');
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
