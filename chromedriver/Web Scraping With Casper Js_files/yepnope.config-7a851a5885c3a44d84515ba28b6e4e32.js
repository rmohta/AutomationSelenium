// Yep Nope Configuration - Not sure what to use this with yet.
yepnope({
    // load: ['assets/javascripts/fastclick.js'],
    test : Modernizr.csstransforms3d,
    // yep  : '/assets/javascripts/nav.min.js',
    // nope : ['polyfill.js', 'wrapper.js'],
    callback : function (url, result, key) {
      if (result === true) {
        console.log('3D tranforms are supported.');
        // console.log('The URL for this file is: ' + url);
        // console.log(result);
        // console.log(key);
      }
    }
});
