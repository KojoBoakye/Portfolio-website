 console.log('active')
 let barsEl =  document.getElementById("bars-el")
 
 function toggle(){
  
    document.getElementById("icon").innerHTML="     <i  id='times-el' class=' fa fa-times' style='font-size:30px;'></i>"
    document.getElementById("nav-el").style="position: fixed;top:20%; height:fit-content;width: 100%;  color: #ffffff; "
   

    document.getElementById("times-el").addEventListener('click' , function(){
  
        document.getElementById("icon").innerHTML="     <i  id='bars-el' class=' fa fa-bars' onclick='toggle()' style='font-size:30px;'></i>"
        document.getElementById("nav-el").style.cssText="position: fixed;top:-120%; height:  fit-content;width: 100vw;  color: #ffffff;"
     
    })
 

    toggle()


 }

 
window.onscroll = function() {myFunction()};
 
let header = document.getElementById("header-el");

 
let sticky = header.offsetTop;
 
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

 