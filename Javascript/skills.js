/* document.getElementById("sideImg").addEventListener("hover",function(){
    
    let getEle = document.getElementById("myImg");
    getEle.classList.toggle("visible");
    
  }); */


  function clickSideBar(){
    let nav=document.getElementById("navbar");
    if(nav.style.visibility=="visible"){
    nav.style.visibility="hidden";
 
    }else {
      nav.style.visibility="visible";
      nav.style.display="flex";
    }
  }
/*   
 let mySkills = document.querySelectorAll(".skills");
for (let index = 0; index < mySkills.length; index++) {
    mySkills[index].addEventListener('click',function(){
        alert('hey!');
    });
    
} */
  