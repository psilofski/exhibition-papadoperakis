/*
* Author:      Manolis Stratigis
*/
$(document).ready(function () {

    var photosAmount =  [4, 7, 6, 9];
    $('a.closeIn').removeClass('toptop')

	// prevent drag & drop
    $('ul.thumbs li a').mousedown(function(){ 
    return false;
    });
       
    // gallery's Thumbnails creation
    for(i = 0; i < galleryLang.length; i++){
        var galID = $('#' + i + 'Gal')
        $(galID).append('<span class="galLabel">'+galleryLang[i]+'</span>'); //putting sticker titles
        $(galID).css({'background': 'url("./gallery/thumb.png") no-repeat',
			'background-size': 'contain'}) //putting galleries thumbs covers
        $(galID).parent().css({'background': 'url("./gallery/thumb' + i + '_bg.png") no-repeat',
			'background-size': 'contain'}); //putting galleries thumbs background
    }
    
                
    // Functioning
    for (index = 0; index < photosAmount.length; index++){   
        (function (gal){        
            var $galID = $('a#' + gal + 'Gal');
            $galID.on('click', function(e){
                e.preventDefault();
	        // Moving thumb folders down and resising (animations)
	            $('ul.thumbs li').css({
	                'width': '200px',
		            'line-height': '143px',
                    'margin': '0 5px',
		        });
	            $('div#galThumbs').css({
	                'top': '700px',
	                'width': '850px',
	            });
                $('span.galLabel').css({
                    'font-size': '12px',
                })
                $('div#wrapper').remove()
                $('div#galThumbs').parent().append('<div id="wrapper"></div>');
                build = ''
                for (j=0; j<photosAmount[gal]; j++) {
                    build += '<div class="polaroid" id="'+j+'"><img id="'+j+'img" class="thumb" class="fit" src="gallery/'+gal+'/'+j+'.jpg" /></div>'
                }
                $('div#wrapper').append(build);
                
                var folderPos = $(this).offset()
                cssObj = {
                    'position': 'absolute',
                    'left': parseFloat(folderPos.left)-50+15 + 'px',
                    'top': parseFloat(folderPos.top)-40-25-30 + 'px',
                    'z-index': 1
                };  // 50, 40: from styles.css, .modalDialog > div{
	        // 15, 25: to center; -40: to offset from the folders 
                $('.polaroid').css(cssObj); 

                // Putting all photos inside envelopes & then emptying & always opening the active
                for(k = 0; k < galleryLang.length; k++){
                	var galID = $('#' + k + 'Gal')
                    $(galID).parent().css({
                        'background': 'url("./gallery/thumb' + k + '_bg.png") no-repeat',
	                    'background-size': 'contain'
	                }); //putting galleries thumbs background
                }
                $('ul.thumbs li a').removeClass('empty')
                $(this).addClass('empty')
                $(this).parent().css({
                    'background': 'url("./gallery/thumb_bg_empty.png") no-repeat',
			        'background-size': 'contain'
		        }); //putting galleries thumbs background
           	    $('li.thumbs span').css({'font-size':'12px'});	//smaller label

                $('#' + (photosAmount[gal]-1) + ' .thumb').load( function() { // wait for last thumb to load        
                    initPos(gal) //continue in another function (not necessary)              
                });

//                $('#'+j).load(function() { //wait for the last picture to load
//                })   
            }) //on gallery click
        }) (index);;        
    } //for all galleries  

    // new jquery function to randomise position
//    jQuery.fn.extend({
//        randompos: function () {
    function rotateabit() {
    
        var tempVal = Math.round(Math.random());
        if(tempVal == 1) {
            var rotDegrees = randomXToY(345, 360); // rotate left
        } else {
            var rotDegrees = randomXToY(0, 15); // rotate right
        }
	    return rotDegrees
    }

    function initPos(gal) {
        var photoCount = photosAmount[gal];
        var wiw = new Array(photoCount) ;
        var wih = new Array(photoCount);
        $(".polaroid").each(function () {
            num = $(this).attr('id')
            wiw[num] = parseInt($(this).width());
            wih[num] = parseInt($(this).height());
	    if (wiw[num] == 0) {wiw[num] = 280;
			        console.log('oups, empty div');} //sometimes sizes are zero :( -- this is a dirty hack
	    if (wih[num] == 0) {wih[num] = 250} //sometimes sizes are zero :( -- this is a dirty hack
                
                });    
                    
        var startpos = 30;  //horizontal padding
        var leftpos = startpos; //Start from position (100, 50)
        var toppos = 50;
        var maxwidth = $('.modalWindow').width() - startpos;  //After that, go down
        var position = new Array(photoCount-1, 2); // counting also zero
        var maxheight = wih[0];
        var drawline = 0 //counter
    ///////Calculating image positions///////////////////////////////		
        for (i=0; i<photoCount; i++) {
            if (wih[i] > maxheight) {
                maxheight = wih[i]};
            if (leftpos + wiw[i] + 10 > maxwidth) {
                drawline += 1
                leftpos = startpos + 10;
                toppos += maxheight + 10;
            }
                
            position[i] = [leftpos, toppos, drawline];
        leftpos = leftpos + wiw[i] + 30
        }
    /////////////////////////////////////centering images//////////////////////////////////
        for (line=0; line<=drawline; line++) {
	        for (pic=0; pic<photoCount; pic++) {
		        if (position[pic][2] == line) {  //j number of pic }
			        leftpos = position[pic][0];
			        Pwidth = wiw[pic];
		        }
	        }
	        var offsetH = ((maxwidth - leftpos - Pwidth) / 2);
	        for (pic=0; pic<photoCount; pic++) { 
		        if (position[pic][2] == line) {
			        position [pic][0] += offsetH
		        }
		        if (drawline == 0) {
			        position[pic][1] += 180; // move a little down on solo line
		        }
	        }
        }
    ////////////place each polaroid in position & random angle/////////////////////////
        for (i=0; i<photoCount; i++) {
		    var rotDegrees = rotateabit()

            var cssObj = {
		        'left' : position[i][0],
                'top' : position[i][1],
                '-webkit-transform' : 'rotate('+ rotDegrees +'deg)',  // safari only
                '-moz-transform' : 'rotate('+ rotDegrees +'deg)',  // firefox only
                'tranform' : 'rotate('+ rotDegrees +'deg)', // added in case CSS3 is standard
             //   '-webkit-transform-origin': '1000.0px 500.0px' 
            };
            $('#'+i).css(cssObj);  //id of picture is his number
        }



// make the pictures clickable:
        $('.polaroid').on('click', 'img.thumb', function(e) {

    //sending the zoomed picture back	
        function sendback() {
	        $('#curtain').remove()
//	        rotDegrees = rotateabit()
	        $divinfront = $('div#wrapper').find('img#bigone').parent()
            var pactive = $divinfront.attr('id'); 
            
	        $divinfront.css({
                'left' : position[pactive][0],
                'top' : position[pactive][1],
                '-webkit-transform' : 'rotate('+ rotDegrees +'deg)',  // safari only
                '-moz-transform' : 'rotate('+ rotDegrees +'deg)',  // firefox only
                'tranform' : 'rotate('+ rotDegrees +'deg)', // added in case CSS3 is standard
                '-webkit-transform': 'scale(1,1)',
                '-moz-transform': 'scale(1,1)',
                'transform': 'scale(1,1)',
                'z-index': 10,
	        });
            $divinfront.find('img#bigone').remove()
            
        // Hide the lezanta
	        $('#lezanta').css({'left': '-1000px'});
	        $('#lezanta').remove()
	        $('a.closeIn').removeClass('toptop')    //send behind the mpalwma (x)
	        
	        $('a.closeIn').off('click') //unbind the click
	        $('.polaroid').off('click', 'img#bigone')
        }
        
            //close picture when hit (x)
            $('a.closeIn').on('click', function(e) {     
                e.preventDefault(); 
console.log ('hit (x)')
            	sendback();
            })        
             //close pictures when hit outside  XXX 
            $('.polaroid').bind('clickoutside',function(e){    
                if ($('#curtain').is(e.target)){     
                e.preventDefault();
            	sendback();
                }
            });        
            //close pictures when hit on zoomed  XXX 
            $('.polaroid').on('click', 'img#bigone', function(e) {     
                e.preventDefault();
            	sendback();
            });  
            
            $thumbnaildiv = $(this).parent();
            $thumbnail = $(this);    
        
            var pactive = $thumbnaildiv.attr('id') //parent().attr('id'); 
                
                //Blackening background
            $('#komparsos').append('<div id="curtain"></div>')
            setTimeout(function() {
	            $('#curtain').css({'width':'1180px',
                    'height':'944px', 
                    'position':'absolute', 
                    'background':'rgba(0,0,0,0.8)',
                    'z-index': 20})
            }, 400);    //as long as the webkit takes to bring the picture in front

            var pwidth = $thumbnail.width();
            var pheight = $thumbnail.height();
            var leftpos = (maxwidth - pwidth)/2;
            var toppos = (950 - pheight)/2
        //    z++$
        //changing thumbnail with normal image   XXX not working recursively XXX
            var fullsize = './gallery/normalSize/'+gal+'/'+pactive+'.jpg'
            $thumbnaildiv.css({
                'z-index': 30,
                'top':toppos,
	            'width': pwidth,
	            'height': pheight,
              	'left':leftpos,
              	'-webkit-transform': 'scale(3,3)',
              	'-moz-transform': 'scale(3,3)',
              	'transform': 'scale(3,3)',
            });        
            
            //lezanta
            $('#wrapper').append('<div id="lezanta" name="' + gal + '---' + pactive + '"><p>'+photoNotesLang[gal][pactive]+'</p></div>');
            $('#lezanta').animate({left: '+=1230'}, 400);
//            $('#lezanta').css({
//                'left': '-1000px'
//            });
            var bigphoto = '<img id="bigone" name="' + pactive + 'img" class="fit" src="' + fullsize + '" style="position:absolute; top: 0; left: 0;" />';
        //console.log (   bigphoto   )
//            setTimeout(function() {
//                $thumbnaildiv.css({       //Cooking for chrome.. :(
//                    '-webkit-transition': 'all  0;'
//                    })
                $thumbnaildiv.append (bigphoto)
//                $thumbnaildiv.css({
//                    '-webkit-transition': 'all  0.4s ease-in;'
//                    })
//            }, globalSpeed);


            $('a.closeIn').addClass('toptop')
        });  
            

    }   //initPos
    
//    //language
//    if ( $('.newlang').attr('id') == 'firsttime' ) {  // main, l.157
//        $('a#' + intarget).click()
//        $('img.thumb').load( function() {
//            $('img#' + inflipped).click()
//        })
//        $('div#firsttime').remove()
//    }
     
//    });    
//--------------------------------------------------------------------------------------------------            
//	// When everything has loaded, place all polaroids on a random position
//    
//	$(".polaroid").each(function (i) {

//		var tempVal = Math.round(Math.random());
//		if(tempVal == 1) {
//			var rotDegrees = randomXToY(330, 360); // rotate left
//		} else {
//			var rotDegrees = randomXToY(0, 30); // rotate right
//		}
//		
//		var position = $(this).parent().offset();
//		var wiw = $(this).parent().width();
//		var wih = $(this).parent().height();
//		
//		var leftpos = Math.random()*(wiw - $(this).width()) + position.left;
//		var toppos = Math.random()*(wih - position.top) + position.top;
//		var cssObj = { 'left' : leftpos,
//			'top' : toppos,
//			'-webkit-transform' : 'rotate('+ rotDegrees +'deg)',  // safari only
//			'-moz-transform' : 'rotate('+ rotDegrees +'deg)',  // firefox only
//			'tranform' : 'rotate('+ rotDegrees +'deg)' }; // added in case CSS3 is standard
//		$(this).css(cssObj);
//	});
//    
//---------------------------------------------------------------------------------------------------	
//	// Set the Z-Index (used to display images on top while dragging)
//	var zindexnr = 1;
//	
//	// boolean to check if the user is dragging
//	var dragging = false;
//	
//	// Show the polaroid on top when clicked on
//	$(".polaroid").mouseup(function(e){
//		if(!dragging) {
//			// Bring polaroid to the foreground
//			zindexnr++;
//			var cssObj = { 'z-index' : zindexnr,
//			'transform' : 'rotate(0deg)',	 // added in case CSS3 is standard
//			'-moz-transform' : 'rotate(0deg)',  // firefox only
//			'-webkit-transform' : 'rotate(0deg)',
//            //scale
//            'transform': 'scale(2,2)',
//            '-ms-transform': 'scale(2,2)', /* IE 9 */
//            '-webkit-transform': 'scale(2,2)', /* Safari and Chrome */
//            '-o-transform': 'scale(2,2)', /* Opera */
//            '-moz-transform': 'scale(2,2)', /* Firefox */            };  // safari only
//			$(this).css(cssObj);
//		}
//	});
//	
//	// Make the polaroid draggable & display a shadow when dragging
//	$(".polaroid").draggable({
//		containment: 'parent',
//		cursor: 'crosshair',
//		start: function(event, ui) {
//			dragging = true;
//			zindexnr++;
//			var cssObj = { 'box-shadow' : '#888 3px 4px 4px', // added in case CSS3 is standard
//				'-webkit-box-shadow' : '#888 3px 4px 4px', // safari only
//				'-moz-box-shadow' : '#888 3px 4px 4px', // firefox only
//				'padding-left' : '-4px',
//				'padding-top' : '-4px',
//				'z-index' : zindexnr };
//			$(this).css(cssObj);
//		},
//		stop: function(event, ui) {
//			var tempVal = Math.round(Math.random());
//			if(tempVal == 1) {
//				var rotDegrees = randomXToY(330, 360); // rotate left
//			} else {
//				var rotDegrees = randomXToY(0, 30); // rotate right
//			}
//			var cssObj = { 'box-shadow' : '', // added in case CSS3 is standard
//				'-webkit-box-shadow' : '', // safari only
//				'-moz-box-shadow' : '', // firefox only
//				'transform' : 'rotate('+ rotDegrees +'deg)', // added in case CSS3 is standard
//				'-webkit-transform' : 'rotate('+ rotDegrees +'deg)', // safari only
//				'-moz-transform' : 'rotate('+ rotDegrees +'deg)', // firefox only
//				'margin-left' : '0px',
//				'margin-top' : '0px' };
//			$(this).css(cssObj);
//			dragging = false;
//		}
//	});
	
	// Function to get random number upto m
	// http://roshanbh.com.np/2008/09/get-random-number-range-two-numbers-javascript.html
	function randomXToY(minVal,maxVal,floatVal) {
		var randVal = minVal+(Math.random()*(maxVal-minVal));
		return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
	}
	
});
