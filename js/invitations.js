$(document).ready(function () {
            $('a.closeIn').removeClass('toptop')
//window.alert(intarget    )

//identify -format "aspectRatio[%f]=%w/%h;\n" *.jpg  (imagemagick)
//    var aspectRatio = new Array(invNotes.length)
//    aspectRatio[0]=4068/989;
//    aspectRatio[1]=1990/1092;
//    aspectRatio[2]=1949/1372;
//    aspectRatio[3]=2013/1266;
//    aspectRatio[4]=2322/1118;
//    var ar4b=2352/1152;
//    aspectRatio[5]=2013/2469;
//    aspectRatio[6]=2042/1588;
//    var ar6b=2050/1596;
//    aspectRatio[7]=2436/2410;
//    aspectRatio[8]=2438/1589;
//    aspectRatio[9]=1639/1187;
//    var ar9b=1623/1164;
//    aspectRatio[10]=4248/1990;

//    $.getScript("globalsGreek.js")  // deleteMe
    
    //// prevent drag & drop
    $('td').mousedown(function(){ 
        return false;
    });

    //// gallery's Thumbnails creation and lezanta tags (html markup)
    for(note = 0; note < Notes.length; note++){ 
        var $this_td = $('td#' + note + 'Inv')
        //$this_td.append('<a id="'+note+'" href="#"></a></li>')
        //var $this_a = $('a#' + note)

        if ($this_td.hasClass('card')) {
            var filename = note + 'a.jpg';
            var doublediv = ' class="doubleface"';
        } else {
            filename = note + '.jpg';
            var doublediv = ''
        }

        var addlink = '<div id="' + note + 'tdiv"' + doublediv + '"><img src = "' + Folder + filename + '" /></div>'
        $this_td.append(addlink)
        $this_td.find('div').addClass('invcontainer');  //for shadow
        $this_td.find('img').css({
            'position': 'relative',
            'z-index':10
            });
        $this_td.append('<span class="invLabel">' + Notes[note] + '</span>')
    }
    
//    function init23() {
//        for(note = 0; note < Notes.length; note++){
//            var $this_lez = $('td#' + note + 'Inv').find('span.invLabel')
//            console.log (Notes[note])
//            $this_lez.html(Notes[note])
//        }   
//    }
//    init23()

    // creating full image containers & initialising fullimage
    var $overlay = $('#overlayInv')
    $overlay.append(addnavigation)  //adding navigation buttons from globals.js
    $('.navbuttons').hide()
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
    $image.draggable(); 
    initImage()    
    
            //// prevent drag & drop
        $('img').on('mousedown', function(){ 
            return false;
        }); 
        
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
        $('div#commonnavbuttons').stop().animate({
                opacity: 1 }, 0)  
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
          
    //////// place the "opened_inv" corresponding <img> on the wrapper and bind to close on overlay
    function imgtag(opened_inv, flipme) {
        $('a.closeIn').off()
        $overlay.off()
        flipme = typeof flipme !== 'undefined' ? flipme: false  // if flipme is undefined make it false
        switch (opened_inv) {  // for last & first item!
            case -1:
                opened_inv = Notes.length - 1;
                break;
            case Notes.length:
                opened_inv = 0;
                break;
            }
       
        var $this_td = $('td#' + opened_inv + 'Inv')
        var flipicon = '<img id="flipicon" src=./images/flip.png />'
                
        // if I have to flip between (a,b) and flipped would be normal size & centered
        if (flipme) {
   
            if ($image.hasClass('a')) {
                $image.addClass('b');
                $image.removeClass('a');
                filename = opened_inv + 'b.jpg';
            } else {
                $image.addClass('a');
                $image.removeClass('b');
                filename = opened_inv + 'a.jpg';
            }
        } else {            
    	$('div#wrapperInv img.fullscreen').removeClass('bitzoomed')
            $image.removeClass('a').removeClass('b')                   
            if ($this_td.hasClass('card')) {  
                var filename = opened_inv + 'a.jpg';
                $image.addClass('a')   // var doubleface for flipping sides!
                $wrapper.append(flipicon)
                $wrapper.find('img#flipicon').hide()
            } else {
                filename = opened_inv + '.jpg';
                $wrapper.find('img#flipicon').remove()
            }
        }   
//        var imgfullsize = '<img id="' + opened_inv + '" class="fullimage" src = "./invitations.normalSize/' + filename + '" />'
//        $wrapper.append(imgfullsize);     
        
        // when the image is fully loaded
//        $('div#wrapperInv img.fullscreen').load(function(){
        full_path = Folder + 'normalSize/' + filename;        
        $helper.find('img#komparsos').remove();
        $helper.append('<img id="komparsos" src="' + full_path + '" />')
        $komparsos = $helper.find('img#komparsos')
        if (!(flipme)) {
            initImage();  //reset image
        }
        $image.hide();
        $image.attr('src', full_path)  
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
            $overlay.removeClass('overlayed')
            $image.attr('src', '')
            $image.hide()   // for Chrome!!!
            $wrapper.find('img#flipicon').remove()
            $('a.closeIn').removeClass('toptop')
            $('div#commonnavbuttons').stop().animate({
                opacity: 1 }, 0)  
            $('.navbuttons').hide()
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

    //////// Change visible invitation                                
    function changeinv(todo) {
        var opened_inv = parseInt($wrapper.find('img').attr('id'));  //id of above inv (also filename except doubleface) same as note   

        switch (todo) {
            case 'first':
                imgtag(0);
                break;
            case 'last':
                imgtag(Notes.length-1);
                break;
            case 'next':
                imgtag(opened_inv+1);
                break;
            case 'prev':
                imgtag(opened_inv-1);
                break;
            case 'flip':
                imgtag(opened_inv, true);
                break;
        } //switch
        return opened_inv
    } //change invitation


    function bringfront($this_div) {
//    	$image.removeClass('bitzoomed')
        var opened_inv = parseInt($this_div.attr('id'));  //id of above inv (also filename except doubleface) same as note
        imgtag(opened_inv)                   
        //Blackening Overlay                
        $overlay.addClass('overlayed')
        $('.navbuttons').show()    
        //// prevent drag & drop
        $('a').on('mousedown', function(){ 
            return false;
        });  
        $('a.closeIn').addClass('toptop')
    }                    

/////// functioning recursively
//    for(index = 0; index < invNotes.length; index++){ 
//        (function(note) {   
//            $('div#' + note + '').on('click', 'img', function(e){
//                bringfront($('div#' + note))    
//            }) (index) //for thumbnail i 
//        }) 
//    }//do for all thumbnails      

    ///////// when I click on thumbnails function:
    $('div#0tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())  
    })  //if Click on thumbnail  
    $('div#1tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#2tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#3tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#4tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#5tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#6tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#7tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#8tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#9tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  
    $('div#10tdiv').on('click', 'img', function(e){
        bringfront($(this).parent())   
    })  //if Click on thumbnail  

    // Navigation menu          
    $('a#firstitem').on('click',function(e){     
        e.preventDefault();
        changeinv('first')
        });
    $('a#previtem').on('click',function(e){     
        e.preventDefault();
        changeinv('prev')
        });
    $('a#nextitem').on('click',function(e){  
        e.preventDefault();
        changeinv('next')
        });
    $('a#lastitem').on('click',function(e){  
        e.preventDefault();
        changeinv('last')
        });
    $('a#zoominitem').on('click',function(e){ 
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
                    if (zhei > maxh+50) {
                        $('div#commonnavbuttons').stop().animate({
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
        
    $('a#zoomoutitem').on('click',function(e){     
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
        })
        $('div#commonnavbuttons').stop().animate({
            opacity: 1 }, 0)  
//        $image.draggable( "option", "disabled", true );
    });
        
    // flip if doubleface    
    $wrapper.on('click', 'img#flipicon', function(e){
        e.preventDefault();
        opened_inv = changeinv('null');
        var $image = $wrapper.find('img.fullscreen');
        if ( $image.hasClass('a') || $image.hasClass('b') ) {   
            if ($image.hasClass('a')) {
                $image.addClass('b');
                $image.removeClass('a');
                filename = opened_inv + 'b.jpg';
            } else {
                $image.addClass('a');
                $image.removeClass('b');
                filename = opened_inv + 'a.jpg';
            }
            var full_path = Folder + 'normalSize/' + filename;
            $('<img/>').attr('src', full_path).load( function() {             
                $image.attr('src', full_path) 
            })
        }            
    });                      
        
//    //after changing language:
//    if ( $('.newlang').attr('id') == 'firsttime' ) {  // main, l.157
//        var beopened = 'div#' + intarget + 'tdiv'
//        $(beopened).find('img').click();
//        if (inflipped == 'true') {
//            $('img#flipicon').click();
//        }
//        $('#firsttime').remove()   // remove the helper div
//    }

    //for(note = 0; note < invNotes.length; note++){
    //    var invID = $('#' + note + 'Inv')
    //    $(invID).append('<span class="invLabel">' + invNotes[note] + '</span>'); //putting sticker titles
    //    $(invID).css({'background': 'url("./gallery/thumb.png") no-repeat',
    //	    'background-size': 'contain'}) //putting galleries thumbs covers
    //    $(invID).parent().css({'background': 'url("./gallery/thumb_bg_empty.png") no-repeat',
    //	    'background-size': 'contain'}); //putting galleries thumbs background
    //}
                   
    //build = '';
    //for (note=0; note<invAmount; note++) {
    //    build += invNotes[note];
    //}
    //$('#invlinks').append(build)



});
