//MUDAR IMAGEM DE FUNDO
window.onload = function () {
    var imgr = Math.round(Math.random() * 9);
    document.getElementById('header-paint').classList.add('header-paint-' + imgr);
};
//GO TOP
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// AD-SENSE
(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-5339434063695831",
    enable_page_level_ads: true
});
//ANALYTICS
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-39968385-5');


// Find all iframes
var $iframes = $( "iframe" );
 
// Find &amp;amp;#x26; save the aspect ratio for all iframes
$iframes.each(function () {
  $( this ).data( "ratio", this.height / this.width )
    // Remove the hardcoded width &amp;amp;#x26; height attributes
    .removeAttr( "width" )
    .removeAttr( "height" );
});
 
// Resize the iframes when the window is resized
$( window ).resize( function () {
  $iframes.each( function() {
    // Get the parent container&amp;amp;#x27;s width
    var width = $( this ).parent().width();
    $( this ).width( width )
      .height( width * $( this ).data( "ratio" ) );
  });
// Resize to fix all iframes on page load.
}).resize();