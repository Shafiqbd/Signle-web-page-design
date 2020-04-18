
$(document).ready(function(){
    
    $(".service_for_sticky").waypoint(function(direction){
        if(direction=="down"){
           $("nav").addClass("sticky");
           }else{
             $("nav").removeClass("sticky");  
           }
            
    });
    
    //Mixitup for filter pic
    var mixer=mixitup('.container');
    
    //Smooth scroll for IE/EDGE/SAFARi
$("a").on('click', function(event){
          if(this.hash !==""){
            event.preventDefault();
    
            var hash=this.hash;
            
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
               window.location.hash = hash; 
            });
            }
});

});

// for mobile menu
function openNav(){
    document.getElementById("myNav").style.width="100%";
}

function closeNav(){
    document.getElementById("myNav").style.width="0%";
}

