//////////////////////////////////////////////////////////
////  Announcements
//////////////////////////////////////////////////////////

const Announcements = (() => {

  let debug = true;
  let info = { name : 'Announcements', version : '1.0' };

  let cookies = new Cookies() || {};
  let tools = new Tools() || {};
  let throttled = false;

  //////////////////////////////////////////////////////////
  ////  Toggle Announcements
  //////////////////////////////////////////////////////////

  const hideAnnouncements = () => {

    ( document.querySelectorAll( '.header__announcements' ) || [] ).forEach( element => {
      element.classList.remove( 'show' );
      tools.setHeaderHeightTotalCSSVariable();
      cookies.set( 'vp_shopify_announcements', 'hide', 1 );
    });

  };

  const showAnnouncements = () => {

    ( document.querySelectorAll( '.header__announcements' ) || [] ).forEach( element => {
      element.classList.add( 'show' );
      tools.setHeaderHeightTotalCSSVariable();
    });

  };

  //////////////////////////////////////////////////////////
  ////  On Click Hide Announcements
  //////////////////////////////////////////////////////////

  const onClickHideAnnouncements = () => {

    ( document.querySelectorAll( '.js-hide-announcements') || [] ).forEach( button => {
      button.addEventListener( 'click', () => {
        hideAnnouncements();
      });
    });

  };

  //////////////////////////////////////////////////////////
  ////  Init
  //////////////////////////////////////////////////////////

  const init = ( $options = false ) => {

    if ( debug ) console.log( `${info.name}.init() v.${info.version} Started` );

    if ( !cookies.get('vp_shopify_announcements') ) showAnnouncements();

    onClickHideAnnouncements();

    if ( debug ) console.log( `${info.name}.init() Finished` );

  };

  //////////////////////////////////////////////////////////
  ////  Returned
  //////////////////////////////////////////////////////////

  return {
    init
  };

});
