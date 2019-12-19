let mod = document.getElementById("modal");
let image = document.getElementById("image");
let clickBtn = 0;
let all= document.getElementById("all");
let active= document.getElementById("active");
let past= document.getElementById("past");
let past_con= document.getElementById("pastCon");
let active_con= document.getElementById("activeCon");
let apast_con= document.getElementById("apastCon");
let apast_con2= document.getElementById("apastCon2");
let apast_con3= document.getElementById("apastCon3");

function checkScroll(){
  var startY = $('.navbar').height() * 5; //The point where the navbar changes in px

  if($(window).scrollTop() > startY){
      $('.head').addClass("scrolled");
      $('.navbar').addClass("nshadow");
  }else{
      $('.head').removeClass("scrolled");
      $('.navbar').removeClass("nshadow");
  }
}

if($('.head').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("topBar").style.background = "#082e4f";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("topBar").style.background = "#ffffff00";
}

function port_all(){
  past_con.style.display="none";
  apast_con.style.display="block";
  
  apast_con2.style.display="block";
  apast_con3.style.display="block";

  active_con.style.display="block";
}

function port_active(){
  past_con.style.display="none";
  apast_con.style.display="none";

  apast_con2.style.display="none";
  apast_con3.style.display="none";

  active_con.style.display="block";
}

function port_past(){
  past_con.style.display="block";
  apast_con.style.display="none";

  apast_con2.style.display="none";
  apast_con3.style.display="none";

  active_con.style.display="none";
}

function img(){
  window.location.href = "index.html";
}