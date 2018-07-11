$(document).ready(function () {
                
function initialise() {
    // remove everything except languages:
    //Add everything
    $('div#banner_txt img').attr('src', bannerTxt) // text top right of banner    
    $('a.langswap').text(langswaptext)  //home language button, div#langs
    
    for(i = 0; i < modules.length; i++){
//        var OvarlayId = 'Overlay';
//        var AjaxContainerId = modules[i]+'Data';   // will host the html page
//        var HtmlFile = AjaxContainerId+'.html'; // Html files must be named '<modules
//        var mainButtonId = modules[i]+'btn';  // div of homepage's button
        var mainLinkId = modules[i]+'Link';   // homepages <a> tag
        var TabButtonId = modules[i]+'Tab';  // <a> linking modal windows
        
        // textify homepage & Tab buttons        
        $('a#'+mainLinkId).text(homemodulesLang[i])
        $('a#'+TabButtonId).text(modulesLang[i])
    };
    
    $('div#firefoxLogo span').text(firefoxIsBetter)  //textify firefox logo
    $('div#contributors_link a').text(contribute_link)  //textify contributors link
    $('div#contributors p').html(contributors_txt)  // textify contributors list
    $('div.currentLang').attr('name', language) // language definition helper XXX not needed???
} // Homepage initialisation   


//change language/////////////////    
$('body').on('hover', 'a.langswap', function(e){
    $(this).append('<span id="endhalflang">' + langfulltext + '</span>')
//    $(this).animate({
//          width: ($(this).width() + enlarge) + 'px',
//          left: parseInt($(this).css('left')) - enlarge/2 + 'px'
//          })
})
$('body').on('mouseleave', 'a.langswap', function(e){
    $(this).find('span#endhalflang').remove();
})


    
function init23(Notes) { // language re-initialisation in thumb lezs
    for(note = 0; note < Notes.length; note++){
        var $this_lez = $('td#' + note + 'Inv').find('span.invLabel')
    $this_lez.html(Notes[note])
    }
} 
        
$('body').on('click', 'a.langswap', function(e){  // when I click on language change
    e.preventDefault();
    if (language == 'Greek') {
        var nextlang = 'English'
        
    } else {
        var nextlang = 'Greek'
    }   
    langpath = './js/globals' + nextlang + '.js'
           
    $.getScript(langpath, function() {
        if  ( typeof $('div.dataDiv').attr('id') != 'undefined' ) {
            var moduletarget = $('div.dataDiv').attr('id').charAt(0);  // lang button clicked from inside module
        } else {
            moduletarget = 'home'
        }
        
        switch (moduletarget) {
        case '2':
            init23(invNotes);
            break;
        case '3':
            init23(pressNotes);
//            var $openedimage = $('div.dataDiv').find('img.fullscreen');  // invitations, press opened image
//            var insidetarget = $openedimage.attr('id');
//            var insideflipped = $openedimage.hasClass('b');
            break;
        case '1':
            for(i = 0; i < galleryLang.length; i++){
                $('#' + i + 'Gal span.galLabel').html(galleryLang[i])
            }
            $openedlezanta = $('div#lezanta')
            if ( $openedlezanta.length != 0 ) { // if lezanta exists
                this_lezanta = $openedlezanta.attr('name').split('---')
                $openedlezanta.find('p').html(photoNotesLang[this_lezanta[0]][this_lezanta[1]])
            }         
            var insidetarget = $('div.dataDiv').find('a.empty').attr('id')
            var insideflipped = $('div.dataDiv').find('img#bigone').attr('name')
            break;
        case '0':
            var $cvbook = $.wowBook("#CVbook");
            previousPageCount = $cvbook.pages.length; 
            for(index=0; index<CV_text.length; index++) {
                $('div#page' + index).html(CV_text[index])
                if ( index >= previousPageCount ) {
                    $('#CVbook').append( '<div><div class="CVpage"><div id="page' + index + '">' + CV_text[index] + '</div></div></div>' )
                    $cvbook.insertPage( $('div#page' + index).parent().parent(), true )        
                }
            }        
console.log ( index, previousPageCount )            
            if ( index < previousPageCount ) {
                $cvbook.removePages(index, previousPageCount-1)
            }               
            $cvbook.updateBook()        
//          //CV lezanta
            $openedlezanta = $('div#lezanta')
            if ( $openedlezanta.length != 0 ) { // if lezanta exists
                this_lezanta = parseInt($openedlezanta.attr('name'))
                $openedlezanta.find('p').html(cv_linklez[this_lezanta])
            }
            break;        
        }
        
        // change homepage & modal box language 
        initialise()
    })
    return nextlang
}) ///Language change //////////////////////


//// Contributors
$('div#contributors_link').on('click', function() {
    if ( ( $('div#contributors').height() == 0 ) || !($('div#contributors').hasClass('bordered')) ) {
        $('div#contributors_link').addClass('buttondown').removeClass('buttonup')
        $('div#contributors').addClass('bordered')
        $('div#contributors').animate( {
            height: '430px'
            })
    } else {
        offContributors()
    }
})

function offContributors() {
        $('div#contributors_link').addClass('buttonup').removeClass('buttondown')
        $('div#contributors').animate( {
            height: '0px'
            }, function() {
                $('div#contributors').removeClass('bordered')
            }
        );
}

$('div#contributors').on('click', function() {
    offContributors()  // '' can be anything...
})
//////////////////   


// Language selector
//$('div#langs').on('click', 'a.langswap', function(e){
//    e.preventDefault();
//    var contribheight = $('div#contributors').height()
//    if (language == 'Greek') {
//        window.location.replace('index.html?language=English&origin=home&contrib=' + contribheight)
//    } else {
//        window.location.replace('index.html?language=Greek&origin=home&contrib=' + contribheight)
//    }    
//    $.getScript('./js/globalsGreek.js', function() {
//        initialise();
//    });
//})


// generating HTML code and loading the Ajax inside the modals. (initialisation)
        // index with all the modules


function newDataDiv(module) {
offContributors()

var index = module
        var AjaxContainerId = modules[index]+'Data';   // will host the html page
        var HtmlFile = AjaxContainerId+'.html'; // Html files must be named '<modules
        
        $('.dataDiv').remove(); 
        $('a.closeIn').removeClass('toptop')  
        $('a.closeIn').off()
//        $('div#inlangs').find('a.langswap').off()
        var build = '<div id="'+AjaxContainerId+'" class="dataDiv"></div> \
        </div>  '
        $('.modalWindow').append(build)  ;      
        return $('.dataDiv')
    }
    
    var OvarlayId = 'Overlay';
    var AjaxContainerId = 'AjaxData'        
    $closein = $('div#Overlay .CloseIn')
    
    initialise()   //first run, textify homepage & modalboxes
  
    
// functioning
        // dealing with navigation
        function highlightTab(TabButtonId) {
                    $('.tabs').find('a').removeClass('currTab').addClass('closedTab')  //blacken all tabs background
                    $('.tabs').find('a#'+TabButtonId).removeClass('closedTab').addClass('currTab')  //highlight current tab bg  
                    }
        
        for(i = 0; i < modules.length; i++){
            (function (module){
                var OvarlayId = 'Overlay';
                var AjaxContainerId = module+'Data';
                var mainButtonId = module+'btn';
                var mainLinkId = module+'Link';
                var mainButtonPicOff =  module+'_off.png';
                var TabButtonId = module+'Tab';
                var mainButtonPicOn =  module+'_on.png';

                
                // open modal window
                $('a#'+mainLinkId).on('click',function(e){
                
                    e.preventDefault();
                    $('.modalDialog').addClass("animating")
                    var index = this.id.charAt(0)
                    var HtmlFile = index + 'Data.html';
                    
                    $firstmodule = newDataDiv(index)
                    $firstmodule.load(HtmlFile, function() {
                        $('.modalDialog').removeClass("modalDialogOff").addClass("modalDialogOn"); // popup modal);
                    });    // Load html into the modal
                    
                    highlightTab(TabButtonId);    
                    return $firstmodule // for language reasons         
                })
                
                // change modal window
                $('a#'+TabButtonId).on('click',function(e){
                    e.preventDefault();
                    $('.modalDialog').removeClass("animating")
                    var index = this.id.charAt(0)
                    var HtmlFile = index + 'Data.html';
                   
                    newDataDiv(index).load(HtmlFile, function() {
                        $('.modalDialog').removeClass("modalDialogOff").addClass("modalDialogOn"); // popup modal);
                    });    // Load html into the modal
                    
                    highlightTab(TabButtonId);                 
                })
                
                //changing language from inside the modules goes back inside
//                if (origin == module) {
//                    $('body').append('<div class="newlang" id="firsttime"></div>')
//                    $firstmodule = $('a#' + origin + 'Link').click()
//console.log($('div.dataDiv').attr('id'))
//                    $('div.modalWindow').bind('load', 'div.dataDiv', function() {    
//console.log(' ha ha ha ha ')
//                        var beopened = 'div#' + intarget + 'tdiv'   // this is in invitations, or press
//                        $(beopened).find('img').click();
//                    });
//                }
                
            })(modules[i]);
        }                

        
        // prevent drag & drop
        $('img').on('mousedown',function(e){
        return false;
        });
        //// prevent drag & drop
        $('a').mousedown(function(){ 
            return false;
        });
        // prevent selectinon
        $('body').disableSelection();   //http://stackoverflow.com/questions/2700000/how-to-disable-text-selection-using-jquery
//        $('img').disableSelection();
//        $('span').disableSelection();

        // Click on modal window's "Close" or outside the modalWindows
        function goHome() {
            $('.modalDialog').addClass("animating")
            $('.modalDialog').removeClass("modalDialogOn").addClass("modalDialogOff"); // close using webkit
            $('.dataDiv').remove();  
            $('a.closeIn').removeClass('toptop'); 
            };
        
        $("a.close").on('click',function(e){
            e.preventDefault();
            goHome();            
        });        
        // http://benalman.com/projects/jquery-outside-events-plugin/
        $(".modalWindow").bind('clickoutside',function(e){    
            if ($('.modalDialog').is(e.target)){
                goHome();
            }
        });
       
    
})

