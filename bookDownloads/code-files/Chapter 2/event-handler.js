var addEvent = (function( window, document ) {  
  if ( document.addEventListener ) {  
    return function( elem, type, cb ) {  
      if ( (elem && !elem.length) || elem === window ) {  
        elem.addEventListener(type, cb, false );  
      }  
      else if ( elem && elem.length ) {  
        var len = elem.length;  
        for ( var i = 0; i < len; i++ ) {  
          addEvent( elem[i], type, cb );  
        }  
      }  
    };  
  }  
  else if ( document.attachEvent ) {  
    return function ( elem, type, cb ) {  
      if ( (elem && !elem.length) || elem === window ) {  
        elem.attachEvent( 'on' + type, function() { return cb.call(elem, window.event) } );  
      }  
      else if ( elem.length ) {  
        var len = elem.length;  
        for ( var i = 0; i < len; i++ ) {  
          addEvent( elem[i], type, cb );  
        }  
      }  
    };  
  }
})( this, document );