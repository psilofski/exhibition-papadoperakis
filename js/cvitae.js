$(document).ready(function() { 
  $('a.closeIn').removeClass('toptop') 
     
        //// prevent drag & drop
        $('a').on('mousedown', function(){ 
            return false;
        });      
            //// prevent drag & drop
        $('img').on('mousedown', function(){ 
            return false;
        }); 

// CV links path without ".jpg" (ok, I know... works only with .jpg)
var cv_links = new Array();
cv_links = [
    './press/normalSize/6'
    ,'./gallery/normalSize/0/0'
    ,'./gallery/normalSize/1/0'
    ,'./gallery/normalSize/1/1'
    ,'./gallery/normalSize/1/3'
    ,'./gallery/normalSize/3/2'
    ,'./gallery/normalSize/3/4' //null
    ,'./invitations/normalSize/3'
    ,'./invitations/normalSize/5'
    ,'./gallery/normalSize/2/3'
    ,'./invitations/normalSize/9'
    ,'./gallery/normalSize/2/0'
    ,'./press/normalSize/2' //lezanta
    ,'./gallery/normalSize/2/2'
    ,'./gallery/normalSize/2/5'
    ,'./gallery/normalSize/3/4'
    ,'./press/normalSize/1'
    ,'./gallery/normalSize/3/8'
    ,'./gallery/normalSize/3/6'
    ,'./press/normalSize/8'
    
    ]
    
        $('#CVnavbuttons').append(addnavigation) //load navigation buttons
        $('#CVlinkzoom').hide()    //buttons for zooming inside links            
  
    var $bookdiv = $('#CVbook');

        for(i=0; i<CV_text.length; i++) {
    $bookdiv.append( '<div><div class="CVpage"><div id="page' + i + '">' + CV_text[i] + '</div></div></div>' )
    }

    //create wowbook     
    $bookdiv.wowBook({
      height : 877, //834, //778,
      width  : 1240 //1180 //1100
      ,flipSound     : false
      ,flipSoundFile : ''
      ,startPage : 0
      ,zoomMax : 1.3
      ,zoomStep: 0.1
      ,pageNumbers: true
      ,numberedPages: "all"
      ,handleWidth: 1 //1
      ,centeredWhenClosed: true
      ,transparentPages: false
//      ,foldGradient: false  //performance, 
//      ,shadows: false
    });
    
//  $("#CVbook").wowBook("options", "updateBrowserURL", false); // 'or else it hides the lightbox ??? np' 
// get the book object reference
var book = $.wowBook("#CVbook");
book.showPage(0);

    $('#commonnavbuttons').on('click', 'a#firstitem', function(e){       
        e.preventDefault();
        book.showPage(0);
        });
    $('#commonnavbuttons').on('click', 'a#previtem', function(e){
        e.preventDefault();
        book.back();
        });
    $('#commonnavbuttons').on('click', 'a#nextitem', function(e){
        e.preventDefault();
        book.advance();
        });
    $('#commonnavbuttons').on('click', 'a#lastitem', function(e){
        e.preventDefault();
        book.showPage(CV_text.length-1);
        });
    $('#commonnavbuttons').on('click', 'a#zoominitem', function(e){
        e.preventDefault();
        book.zoomIn();        
        if (book.zoomLevel > 1.1) {  // second level zoom, navbuttons on CVbook
//            setTimeout( function() { 
console.log(    $('div#commonnavbuttons').css('opacity')  )
            $('div#commonnavbuttons').stop().animate({
                opacity: 0.5 }, 2000)
//                }, 200)
            }   
        });
    $('#commonnavbuttons').on('click', 'a#zoomoutitem', function(e){
        e.preventDefault();
        $('div#commonnavbuttons').stop().animate({
            opacity: 1 }, 0)
        book.zoom(1);
        });
        
//    if ((book.isOnPage(0)) || (book.isOnPage(16))) {
//        ('div#CVbook').css ({'left': '-650px'})
//    } else {
//        ('div#CVbook').css ({'left': '-30px'})
//    }

//    //Language
//    if ( $('.newlang').attr('id') == 'firsttime' ) {  // main, l.157
//        book.showPage(parseInt(intarget));
//        $('div#firsttime').remove()
//    } else {
//        book.showPage(0);
//    }     

    
    // creating full image containers & initialising fullimage
    var $overlay = $('#overlayCV')
    var $wrapper = $('div#wrapperInv');      
    var maxw = $wrapper.width();
    var maxh = $wrapper.height();
    var swid = $overlay.width();
    var shei = $overlay.height();
    $helper = $('div#helper'); // to preload images
    $helper.hide()
    $('a.closeIn').removeClass('toptop')
    $('a.closeIn').off()
    $wrapper.find('img.fullscreen').remove()  //resetting image tag,
    $wrapper.append('<img id="original" class="fullscreen" src="" />')
    var $image = $wrapper.find('img.fullscreen')
    $overlay.hide()
    $image.draggable(); 
    initImage()    

    //////// place the "opened_inv" corresponding <img> on the wrapper and bind to close on overlay
    function imgtag(opened_inv, flipme) {
        $('a.closeIn').off()
        $overlay.off()
        flipme = typeof flipme !== 'undefined' ? flipme: false  // if flipme is undefined make it false
        switch (opened_inv) {  // for last & first item!
            case -1:
                opened_inv = cv_links.length - 1;
                break;
            case cv_links.length:
                opened_inv = 0;
                break;
            }
       
        var $this_td = $('a#' + opened_inv + '_cv')
        var flipicon = '<img id="flipicon" src=./images/flip.png />'
                
        // if I have to flip between (a,b) and flipped would be normal size & centered
        if (flipme) {
   
            if ($image.hasClass('a')) {
                $image.addClass('b');
                $image.removeClass('a');
                filename = cv_links[opened_inv] + 'b.jpg';
            } else {
                $image.addClass('a');
                $image.removeClass('b');
                filename = cv_links[opened_inv] + 'a.jpg';
            }
        } else {
            $image.removeClass('a').removeClass('b')                   
            if ($this_td.hasClass('card')) {  
                var filename = cv_links[opened_inv] + 'a.jpg';
                $image.addClass('a')   // var doubleface for flipping sides!
                $wrapper.append(flipicon)
                $wrapper.find('img#flipicon').hide()
            } else {
                filename = cv_links[opened_inv] + '.jpg';
                $wrapper.find('img#flipicon').remove()
            }
        }   
//        var imgfullsize = '<img id="' + opened_inv + '" class="fullimage" src = "./invitations.normalSize/' + filename + '" />'
//        $wrapper.append(imgfullsize);     
        
        // when the image is fully loaded
//        $('div#wrapperInv img.fullscreen').load(function(){      
        $helper.find('img#komparsos').remove();
        $helper.append('<img id="komparsos" src="' + filename + '" />')
        $komparsos = $helper.find('img#komparsos')
        if (!(flipme)) {
            initImage();  //reset image
        }
        $image.hide();
        $image.attr('src', filename)  
        $image.attr('id', opened_inv)
        var init_position = $komparsos.load(function() {                                                       
            var init_position = centerimg(opened_inv) //call to center image    
            $image.show();
            return init_position
        })   
        
//        })
        //close picture when hit outside or (x)
        function closeoverlay() {
console.log( 'closing...' )
	        $('#lezanta').css({'left': '-1000px'});
	        $('#lezanta').remove()            
            $overlay.removeClass('overlayed')
            $overlay.hide()
            $image.attr('src', '')
            $wrapper.find('img#flipicon').remove()
            $('a.closeIn').removeClass('toptop')
            $('#CVlinkzoom').hide()
            $('#commonnavbuttons').show()
            $('div#CVlinkzoom').stop().animate({   // maybe linkzoombuttons are opacited
                opacity: 1 }, 0)   
            initImage()  // I'm doin it in imgtag() (l.182)
	    };
            
        $('a.closeIn').on('click', function(e) {     
            e.preventDefault();
            closeoverlay()
            $('a.closeIn').off()
        })        
        $overlay.on('click', function(e) {   
            if (($overlay.is(e.target)) || ($wrapper.is(e.target))){  
                e.preventDefault();
                closeoverlay()
                $overlay.off()
            }
        })  
                                
//        $image.bind('clickoutside',function(e){    
//            if (($overlay.is(e.target)) || ($wrapper.is(e.target))){
//                closeoverlay()
//        	}   	
//        });      
        
    }  // full image positioning

        
    function initImage() {
//        if (!($image.draggable( "option", "disabled" ))){
//            $image.draggable( "destroy" );
//        }
        $image.draggable( "option", "disabled", true );
        $image.css( {   // reset image size
        'width': '',
        'height': '',
        } );
            $('a.closeIn').off()
//        $image.hide();
    }

    function calcPosition(pwid, phei) {
        if (pwid/phei >= maxw/maxh) {   //aspect ratio
            var wid = maxw;
            var hei = maxw/pwid*phei;
        } else {
            var hei = maxh;
            var wid = maxh/phei*pwid;
        };        
        var imleft = (maxw - wid)/2;
        var imtop = (maxh - hei)/2;
        return [wid, hei, imleft, imtop]
    };
                                        
    ///////Centering full image                            
    function centerimg(opened_inv) {
        var pwid = $image.width();
        var phei = $image.height();         
//        if ((wid == 0) || (hei == 0)) {      // if I have not loaded the image... not needed cause img.load(...)          
//            if (aspectRatio[opened_inv] > maxw/maxh) {
//                var wid = maxw;
//                var hei = parseInt(wid/aspectRatio[opened_inv]);
//            } else {
//                var hei = maxh;
//                var wid = parseInt(hei*aspectRatio[opened_inv]);
//            };
//        }
        position = calcPosition(pwid, phei)
        wid = position[0];
        hei = position[1];
        imleft = position[2];
        imtop = position[3];
        $image.css({
            'top': imtop + 'px',
            'left': imleft + 'px',
            'width': wid + 'px',
            'hei': hei + 'px'
        })
        $wrapper.find('img#flipicon').css({
            'top': imtop + 15 + 'px',
            'left': imleft + wid - 120 + 'px',
        }).show()
        return [wid, hei, imleft, imtop];    
    } // center image      

    function bringfront($this_div) {
        var opened_inv = parseInt($this_div.attr('id'));  //id of above inv (also filename except doubleface) same as note
        imgtag(opened_inv)                   
        //Blackening Overlay                
        $overlay.addClass('overlayed') 
        //// prevent drag & drop
        $('a').on('mousedown', function(){ 
            return false;
        });  
        $('a.closeIn').addClass('toptop')
    }                  
  

//    $('div#CVpage').on('click', 'a', function(e) { 
    for (i=0; i<cv_links.length; i++) {
        (function(link) {
            $('div#CVbook').on('click', 'a#' + link + '_cv', function(e) { 
console.log ( $(this).attr('id') )   
                e.preventDefault();
                $('#commonnavbuttons').hide()
                $('#CVlinkzoom').show()
                $overlay.show()    
                
                if ( cv_linklez[link] != '' ) {//lezanta
                    $('#wrapperInv').append('<div id="lezanta" name="' + link + 'CVlez"><p>'+cv_linklez[link]+'</p></div>');
                    $('#lezanta').animate({left: '+=1190'}, 400);
                }              
                bringfront($(this))
            });
        }) (i);
    }

    $('a#zoominlink').on('click',function(e){ 
        e.preventDefault();
        var wid = $image.width();   //width before zoom
        var hei = $image.height();  //height before zoom
        
        if ( (wid / maxw < zoommax) && (hei / maxh < zoommax) ) {
            var pleft = parseInt($image.css('left')); //position before zoom,
            var ptop = parseInt($image.css('top'));
            var zwid = wid*zoomfactor; //zoomed dimensions,
            var zhei = hei*zoomfactor;
            var zleft = pleft - (zwid-wid)/2 ;  // keeping focus on the center,
            var ztop = ptop - (zhei-hei)/2 ;
            $image.animate( {
                width: zwid + 'px',
                height: zhei + 'px',
                top: ztop + 'px',
                left: zleft + 'px',
                }, function() {
                    if (zhei > maxh) {
                        $('div#CVlinkzoom').stop().animate({
                            opacity: 0.5 }, 2000)                       
                    }
                }
            );
         
        
        //finding containment box coords, I have to add $wrapper coords because img.position=relative
        var wrapperpos = $wrapper.offset();  // $overlay is better?
        if (zwid > maxw) {
            var x1 = wrapperpos.left + (maxw - zwid);
            var x2 = wrapperpos.left;
        } else {
            var x1 = wrapperpos.left + zleft;
            var x2 = x1;
        }
        if (zhei > maxh) {
            var y1 = wrapperpos.top + (maxh - zhei);
            var y2 = wrapperpos.top;
        } else {
            var y1 = wrapperpos.top + ztop;
            var y2 = y1;
        }
            
console.log  (x1, y1, x2, y2, $wrapper.css('left'))        
	        // Make the polaroid draggable & display a shadow when dragging
	        $image.draggable({
		        containment: [x1, y1, x2, y2],
		        cursor: 'crosshair',
		        disabled: false,
		        start: function(event, ui) {
		        },
		        stop: function(event, ui) {
		        }
	        });
	        
	    } //if I still zoom   
    }); //on click zoomin
        
    $('a#zoomoutlink').on('click',function(e){     
        e.preventDefault();
        var pwid = $image.width()
        var phei = $image.height() 
console.log( pwid, phei )        
        position = calcPosition(pwid, phei)
        wid = position[0];
        hei = position[1];
        imleft = position[2];
        imtop = position[3];
        $image.animate( {
            top: imtop + 'px',
            left: imleft + 'px',
            width: wid + 'px',
            height: hei + 'px'
        }, function () {}
        )
        $('div#CVlinkzoom').stop().animate({
            opacity: 1 }, 0)      
           
//        $image.draggable( "option", "disabled", true );
    });
        
    // flip if doubleface    
    $wrapper.on('click', 'img#flipicon', function(e){
        e.preventDefault();
        var opened_inv = parseInt($wrapper.find('img').attr('id'));
        var $image = $wrapper.find('img.fullscreen');
        if ( $image.hasClass('a') || $image.hasClass('b') ) {   
            if ($image.hasClass('a')) {
                $image.addClass('b');
                $image.removeClass('a');
                filename = cv_links[opened_inv] + 'b.jpg';
            } else {
                $image.addClass('a');
                $image.removeClass('b');
                filename = cv_links[opened_inv] + 'a.jpg';
            }
            $('<img/>').attr('src', filename).load( function() {             
                $image.attr('src', filename) 
            })
        }            
    });     
     
    
});
