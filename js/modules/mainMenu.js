import Tools from 'tools';

const config = { debug: false, name: 'mainMenu.js', version: '1.0' };
const elements = document.querySelectorAll( '.burger, .push-menu' ) || [];

const onClickCloseMobileMenu = () => {
  ( document.querySelectorAll( 'header, main' ) || [] ).forEach( target => {
    target.addEventListener('click', () => {
      Tools.removeClass( 'is-active', elements );
    });
  });
};

const onClickToggleMobileMenu = () => {
  ( document.querySelectorAll( '.burger' ) || [] ).forEach( burger => {
    burger.addEventListener( 'click', () => {
      Tools.toggleClass( 'is-active', elements );
    });
  });
};

const init = () => {
  if ( config.debug ) console.log(`[ ${config.name} v.${config.version} initialized ]`);
    onClickCloseMobileMenu();
    onClickToggleMobileMenu();
  if ( config.debug ) console.log(`[ ${config.name} v.${config.version} complete ]`);
};

export default { init };
