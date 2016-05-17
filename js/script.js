jQuery( document ).ready( function(){
    jQuery( '#flip' ).jcoverflip({
      current: 2,
      beforeCss: function( el, container, offset ){
        return [
          $.jcoverflip.animationElement( el, { left: ( container.width( )/2 - 210 - 110*offset + 20*offset )+'px', bottom: '20px' }, { } ),
          $.jcoverflip.animationElement( el.find( 'img' ), { width: Math.max(10,100-20*offset*offset) + 'px' }, {} )
        ];
      },
      afterCss: function( el, container, offset ){
        return [
          $.jcoverflip.animationElement( el, { left: ( container.width( )/2 + 110 + 110*offset )+'px', bottom: '20px' }, { } ),
          $.jcoverflip.animationElement( el.find( 'img' ), { width: Math.max(10,100-20*offset*offset) + 'px' }, {} )
        ];
      },
      currentCss: function( el, container ){
        return [
          $.jcoverflip.animationElement( el, { left: ( container.width( )/2 - 100 )+'px', bottom: 0 }, { } ),
          $.jcoverflip.animationElement( el.find( 'img' ), { width: '200px' }, { } )
        ];
      },
      change: function(event, ui){
        jQuery('#scrollbar').slider('value', ui.to*25);
      }
    });
    jQuery('#scrollbar').slider({
      value: 50,
      stop: function(event, ui) {
        if(event.originalEvent) {
          var newVal = Math.round(ui.value/25);
          jQuery( '#flip' ).jcoverflip( 'current', newVal );
          jQuery('#scrollbar').slider('value', newVal*25);
        }
      }
    });
  });