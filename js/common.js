 $(document).ready(function() {
    
    var cookie_date = new Date;
    var doc_title = document.title;

    function get_cookie ( cookie_name )
        {
            var results = document.cookie.match ( '(^|;)?' + cookie_name + '=([^;]*)(;|$)' );

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

    console.log( doc_title );
    console.log(get_cookie(doc_title));

    if (  !get_cookie ( doc_title ) )
        {
            console.log("entered Depreload Script");
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
            context.strokeStyle = '#fff';
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
                    console.log('Картинки загрузились!');

                    $("#depreload .perc").text("MONTE");
                    $("#depreload .loading").animate({ opacity: 0 },800);
                    setTimeout(function(){
                        $("#depreload" ).addClass( 'zoom-out-effect' );
                    }, 1100);
                    setTimeout(function(){
                        $("#depreload" ).remove();
                    }, 1700);
                    
                    
                    cookie_date.setTime ( cookie_date.getTime() + 60*60*24 );
                    set_cookie (doc_title, "preloaded-page", cookie_date);
                }
            });
        }
        else {
            $("#depreload" ).remove();
        }       
            
    });
$(function(){
    // $('.main_directions').hover(
    //     function() {
    //         $('#video').css( 'background-color', 'rgba(0, 112, 192, 0.8)' );
    //         $('#ivent').css( 'background-color', 'rgba(233, 203, 23, 0.8)' );
    //         $('#wedd').css( 'background-color', 'rgba(247, 21, 188, 0.8)' );
    //     }, 
    //     function() {
    //         $('#video').css( 'background-color', 'none' );
    //         $('#ivent').css( 'background-color', 'none' );
    //         $('#wedd').css( 'background-color', 'none' );
    //     }
    // );
    $('figure').hover(
            
        function() {

            $( this ).addClass( 'zoom-effect' );
            $( this ).find( '.figurecircle' ).addClass( 'scale-effect' );    

        }, function() {

            $( this ).removeClass( 'zoom-effect' );
            $( this ).find( '.figurecircle' ).removeClass( 'scale-effect' );     
        });

	return false;		
});

$(function(){

    var fotoblocks = ['#carousel-monte', '#fotoblock-2', '#fotoblock-3', '#fotoblock-4', '#fotoblock-5', '#fotoblock-6', '#fotoblock-7', '#fotoblock-8', '#fotoblock-9', '#fotoblock-10', '#fotoblock-11', '#fotoblock-12', '#fotoblock-13', '#fotoblock-14', '#fotoblock-15', '#fotoblock-16', '#fotoblock-17', '#fotoblock-18', '#fotoblock-19', '#fotoblock-20'];

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
    owl.trigger('owl.next');
    })
    $(".prev").click(function(){
    owl.trigger('owl.prev');
    })
    $(".play").click(function(){
    owl.trigger('owl.play',2500); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
    owl.trigger('owl.stop');
    })
    
});




