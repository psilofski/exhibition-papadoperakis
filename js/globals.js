// preload all images
//    if (document.images)
//    {
//      preload_image_object = new Image();
//      // set image url
//      image_url = new Array();
//      image_url[0] = "images/CV_on.png";
//      image_url[1] = "images/CV_off.png";
//      
//       var i = 0;
//       for(i=0; i<=1; i++) {preload_image_object.src = image_url[i];}
//    }

var globalSpeed = 1500; //time given for polaroids before image changes from thumbs to full

var zoomfactor = 1.2;  // zoomRatio (invitations, press)
var zoommax = 1.5; //maximum zoom

var addnavigation = '<div id="commonnavbuttons" class="navbuttons">\
    <ul class="CVnav">\
    <li ><a style="font-size: 34px;" id="firstitem" href="#"><<</a></li>\
    <li><a id="previtem"  href="#"><</a></li>\
    <li><a id="nextitem" href="#">></a></li>\
    <li><a style="font-size: 34px;" id="lastitem" href="#">>></a></li>\
    <li><a id="zoominitem" href="#">+</a></li>\
    <li><a id="zoomoutitem" href="#">-</a></li>\
    </ul>\
    </div>'
      
    //// prevent drag & drop
    $('a').mousedown(function(){ 
        return false;
    });
    

// http://www.idealog.us/2006/06/javascript_to_p.html
function getAjaxVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
//  alert('Query Variable ' + variable + ' not found');
} 

// language definition and previus location by GET data
//var language = getAjaxVariable('language')
//var contribheight = getAjaxVariable('contrib')
//var origin = getAjaxVariable('origin')
//var intarget = getAjaxVariable('intarget')
//var inflipped = getAjaxVariable('inflipped')
//if (language == 'English') {
//console.log (language)
//    var langpath = './js/globalsEnglish.js'
//} else {    // Greek or undefined
//    var langpath = './js/globalsGreek.js' 
//}   
