const a = document.getElementsByClassName('name')[0].innerHTML
let names = "";
let i = 1;
let turn = false;

setInterval(function(){
    if(i < a.length && turn == false)
{
    document.getElementsByClassName('name')[0].innerHTML = a.substring(0, i) + "|"
    i++
    }else if(i > 1 && turn == true)
    {
      document.getElementsByClassName('name')[0].innerHTML = a.substring(0, i) + "|"
      i--
    }
    else
    {

    if(turn){
       turn = false;
         }else{
        turn=true;
       }
    }


},200);

// get buger knop
const burger = document.querySelector(".burger");
// get navmenu
const navMenu = document.querySelector(
  ".nav-menu"
);

// get navMenuItems
const navMenuItems = document.querySelectorAll(
  ".nav-menu li"
);

burger.addEventListener("click", () => {
  // burger knop
  burger.classList.toggle("active");
  // navMenu open
  navMenu.classList.toggle("open");

  // animatie
  navMenuItems.forEach((item, index) => {
    // als animatie is toegevoegd,zal annuleren...
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `0.3s ease-in slideIn forwards ${index *
        0.1 +
        0.3}s`;
    }
  });
});



