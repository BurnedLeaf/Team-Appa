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



