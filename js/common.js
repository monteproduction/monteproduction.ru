
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
});


