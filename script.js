$(document).ready(function(){
    $('#owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        margin: 30,
        dots: false,
        //nav: true,
        items: 1,
        autoplayTimeout:7000
    })


 
    

});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }