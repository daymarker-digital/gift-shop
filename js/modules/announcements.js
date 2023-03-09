import Tools from 'tools';
import Cookies from 'cookies';

const config = { debug: true, name: 'announcements.js', version: '1.0' };

const cookieName = 'vp_shopify_announcements';

const hideAnnouncements = () => {
  ( document.querySelectorAll( '.header__announcements' ) || [] ).forEach( element => {
    element.classList.remove( 'show' );
    Tools.setElementsHeightToCSSVariable();
    Cookies.set( cookieName, 'hide', 1 );
  });
};

const showAnnouncements = () => {
  ( document.querySelectorAll( '.header__announcements' ) || [] ).forEach( element => {
    element.classList.add( 'show' );
    Tools.setElementsHeightToCSSVariable();
  });
};

const onClickHideAnnouncements = () => {
  ( document.querySelectorAll( '.js-hide-announcements') || [] ).forEach( button => {
    button.addEventListener( 'click', () => {
      hideAnnouncements();
    });
  });
};

const init = () => {
  if ( config.debug ) console.log(`[ ${config.name} v.${config.version} initialized ]`);
    if ( !Cookies.get( cookieName ) ) {
      showAnnouncements();
    }
    onClickHideAnnouncements();
  if ( config.debug ) console.log(`[ ${config.name} v.${config.version} complete ]`);
};

export default { init };
