
        // *************** Top menu effects *************** //

 $(document).ready(function() {
    
    var $topMenu = $("#animate");
    var $TopLinks = $("#nav-line");
    var $dropdownLogos = $(".dir_logo_prod_header, .dir_logo_event_header, .dir_logo_wedd_header")

    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic.Controller();
    var TopMenuTl = new TimelineLite();
    var animateTopMenu = TopMenuTl.add(TopShade(.1, "scene"), 0);

    // Trigger scene
    new ScrollMagic.Scene({
                    offset: 50,
                    triggerElement: "#menu_animate",
                    triggerHook: "onLeave"
                    })
                    .setTween(animateTopMenu)
                    .addTo(scrollMagicController);

    function TopShade(d, direction) {

        var tl = new TimelineLite();

        tl  .add("twoo",        d)
            .to("#animate",     d, { backgroundColor: "rgba(0,0,0,.6)" }, "twoo")
            .to(".dots, #header-search-button", d, { autoAlpha:1 }, "twoo")
            .to($TopLinks,      d, { padding: "15px 0 0 0" }, "twoo")
            .to($topMenu,       d, { y:-35 }, "twoo");

        return tl;

    }
    
    function LogoAnimate(direction) {

        var tl = new TimelineLite()

            if (direction == "to") {
                tl.to("#tri",                   .1, { y:20, opacity: 1, height: 40 })
                tl.add("one",  .2)
                tl.to(".directions_dropdown",   .5, { opacity: 1, height: 400, bacgroundColor: "rgba(0,0,0,.8)" }, "one")
                tl.to($dropdownLogos,           .3, { opacity: 1, display: "block" }, "one")
            } else if (direction = "reverse") {
                tl.add("one",  0)
                tl.to(".directions_dropdown",   0, { opacity: 0, height: 0, bacgroundColor: "rgba(0,0,0,.3)" }, "one")
                tl.to("#tri",                   0, { y:0, opacity: 0, height: 0 }, "one")
                tl.to($dropdownLogos,           0, { opacity: 0, display: "none" }, "one")
            }

        return tl;

    }

    $( "#animate2" ).off("hover").hover(

        function() {

            LogoAnimate("to");

        }, function() {
            
            LogoAnimate("reverse");

    });

    $( "#header-search-button" ).off("click").click( 
        function() {
            
            if ($( "#search-input" ).css("opacity") == "0") {
                $( "#search-input" ).fadeTo( 200, 1, );
                $( "#search-input" ).focus();
            } else {
                $( "#search-input" ).fadeTo( 200, 0, );
        }; 
    });

    $( "#animate" ).off("hover").hover(

        function() {

            $( "#animate" ).css( "background-color", "rgba(0,0,0, 1)" );

        }, function() {
            
            $( this ).css( "background-color", "rgba(0,0,0,.6)" );

    });

    $( ".dropdown-toggle" ).dropdown();

    var pswpElement = document.querySelectorAll('.pswp')[0];

 });

 
        //               Main page effects                //

$(function(){

    $("figure").hover(

        function() {

            $( this ).addClass( "zoom-effect" );
            $( this ).find( ".figurecircle" ).addClass( "scale-effect" );

        }, function() {

            $( this ).removeClass( "zoom-effect" );
            $( this ).find( ".figurecircle" ).removeClass( "scale-effect" );
        });

	return false;
});

        //               FOTOBLOCKs owl carousels               // 

$(function(){

    var fotoblocks = ["#carousel-monte", "#fotoblock-2", "#fotoblock-3", "#fotoblock-4", "#fotoblock-5", "#fotoblock-6", "#fotoblock-7", "#fotoblock-8", "#fotoblock-9", "#fotoblock-10", "#fotoblock-11", "#fotoblock-12", "#fotoblock-13", "#fotoblock-14", "#fotoblock-15", "#fotoblock-16", "#fotoblock-17", "#fotoblock-18", "#fotoblock-19", "#fotoblock-20"];

    $.each(fotoblocks, function(index, value){
        $(value).owlCarousel({
            items : 6,
            itemsDesktop : [1800,5],
            itemsDesktopSmall : [1730,4],
            itemsTablet: [1350,3],
            itemsMobile : [900,1],
            autoPlay : false,
            pagination : false
        });
    });

    // Custom Navigation Events
    $(".next").click(function(){
    owl.trigger("owl.next");
    })
    $(".prev").click(function(){
    owl.trigger("owl.prev");
    })
    $(".play").click(function(){
    owl.trigger("owl.play",2500); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
    owl.trigger("owl.stop");
    })

});


// Cookies for page-preload module

 $(document).ready(function() {

    var cookie_date = new Date;
    var doc_adress = (window.location.href).substr((window.location.protocol.length + 2));

    function get_cookie ( cookie_name )
        {
            var results = document.cookie.match ( "(^|;)?" + cookie_name + "=([^;]*)(;|$)" );

            if ( results )
                return ( unescape ( results[2] ) );
            else
                return null;
        }

    function set_cookie ( name, value, cookie_date, path, domain, secure )
        {
            var cookie_string = name + "=" + escape ( value );

            if ( cookie_date )
            {
                cookie_string += "; expires=" + cookie_date.toGMTString();
            }

            if ( path )
                    cookie_string += "; path=" + escape ( path );

            if ( domain )
                    cookie_string += "; domain=" + escape ( domain );

            if ( secure )
                    cookie_string += "; secure";

            document.cookie = cookie_string;
        }

    if (  !get_cookie ( doc_adress ) )
        {
            console.log("Entered Depreload Script");
            setTimeout(function(){
                $("#depreload .wrapper").animate({ opacity: 1 });
            }, 400);

            setTimeout(function(){
                $("#depreload .perc").animate({ opacity: 1 });
            }, 800);

            var canvas  = $("#depreload .line")[0],
                context = canvas.getContext("2d");

            context.beginPath();
            context.arc(280, 280, 260, Math.PI * 1.5, Math.PI * 1.6);
            context.strokeStyle = "#fff";
            context.lineWidth = 5;
            context.stroke();

            var loader = $("body").DEPreLoad({
                OnStep: function(percent) {

                    $("#depreload .line").animate({ opacity: 1 });
                    $("#depreload .perc").text(percent + " %");

                    if (percent > 5) {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        context.beginPath();
                        context.arc(280, 280, 260, Math.PI * 1.5, Math.PI * (1.5 + percent / 50), false);
                        context.stroke();
                    }
                },
                OnComplete: function() {
                    console.log("Images are loaded!");

                    $("#depreload .perc").text("MONTE");
                    $("#depreload .loading").animate({ opacity: 0 },800);
                    setTimeout(function(){
                        $("#depreload" ).addClass( "zoom-out-effect" );
                    }, 1100);
                    setTimeout(function(){
                        $("#depreload" ).remove();
                    }, 1700);

                    cookie_date.setTime ( cookie_date.getTime() + 60*60*24*1000 );
                    set_cookie (doc_adress, "preloaded-page", cookie_date);
                }
            });
        }
        else {
            $("#depreload" ).remove();
            console.log( doc_adress + " - " + get_cookie(doc_adress) );
        }

        var initPhotoSwipeFromDOM = function(gallerySelector) {

            // parse slide data (url, title, size ...) from DOM elements 
            // (children of gallerySelector)
            var parseThumbnailElements = function(el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;
        
                for(var i = 0; i < numNodes; i++) {
        
                    figureEl = thumbElements[i]; // <figure> element
        
                    // include only element nodes 
                    if(figureEl.nodeType !== 1) {
                        continue;
                    }
        
                    linkEl = figureEl.children[0]; // <a> element
        
                    size = linkEl.getAttribute('data-size').split('x');
        
                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };
        
        
        
                    if(figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML; 
                    }
        
                    if(linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    } 
        
                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }
        
                return items;
            };
        
            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && ( fn(el) ? el : closest(el.parentNode, fn) );
            };
        
            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function(e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
        
                var eTarget = e.target || e.srcElement;
        
                // find root element of slide
                var clickedListItem = closest(eTarget, function(el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });
        
                if(!clickedListItem) {
                    return;
                }
        
                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;
        
                for (var i = 0; i < numChildNodes; i++) {
                    if(childNodes[i].nodeType !== 1) { 
                        continue; 
                    }
        
                    if(childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }
        
        
        
                if(index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe( index, clickedGallery );
                }
                return false;
            };
        
            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function() {
                var hash = window.location.hash.substring(1),
                params = {};
        
                if(hash.length < 5) {
                    return params;
                }
        
                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if(!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');  
                    if(pair.length < 2) {
                        continue;
                    }           
                    params[pair[0]] = pair[1];
                }
        
                if(params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }
        
                return params;
            };
        
            var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;
        
                items = parseThumbnailElements(galleryElement);
        
                // define options (if needed)
                options = {
        
                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
        
                    getThumbBoundsFn: function(index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect(); 
        
                        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                    }
        
                };
        
                // PhotoSwipe opened from URL
                if(fromURL) {
                    if(options.galleryPIDs) {
                        // parse real index when custom PIDs are used 
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for(var j = 0; j < items.length; j++) {
                            if(items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }
        
                // exit if index not found
                if( isNaN(options.index) ) {
                    return;
                }
        
                if(disableAnimation) {
                    options.showAnimationDuration = 0;
                }
        
                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            };
        
            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll( gallerySelector );
        
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }
        
            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if(hashData.pid && hashData.gid) {
                openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
            }
        };
        
        // execute above function
        initPhotoSwipeFromDOM('.pswipe-galery');
        


});


