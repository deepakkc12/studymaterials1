var press_times=0;
    var won=false;
    var child=document.querySelectorAll(".container div h1");
    var div_childrens=document.querySelectorAll(".container div");


    for(i=0;i<div_childrens.length;i++){
        div_childrens[i].addEventListener('click',eventRmv);
    }

    function eventRmv(){
        place(this);
    }



function place(element){
        // variable declarations.................................

      const h1=element.firstElementChild;
      var fill=false;
      press_times+=1;

    //   adding 'x' and 'o' altarnatively................................

      if(press_times%2==0) {
          h1.innerHTML="o";
          h1.style.color="rgb(32, 240, 236)"
          document.getElementById("turn").innerHTML="player <span class='xspan'>X</span>'s turn"
          element.classList.add("clicked1")
          setTimeout(function(){
          element.classList.remove("clicked1")
          },100)
        }
        else{
          h1.innerHTML="x"
          h1.style.color="rgb(194, 45, 211)"
          document.getElementById("turn").innerHTML="player <span class='ospan'>O</span>'s turn"
          element.classList.add("clicked2")
          setTimeout(function(){
          element.classList.remove("clicked2")
          },100)
        }

    //  checking whether the winning condition is met.............................................................

     if(child[0].innerHTML==child[1].innerHTML && child[1].innerHTML==child[2].innerHTML){
        if(child[0].innerHTML=="x"){
         document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!";
         won=true;
        }
        else if(child[0].innerHTML=="o"){
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!";
         won=true;
        }
     }
     else if(child[3].innerHTML==child[4].innerHTML && child[4].innerHTML==child[5].innerHTML){
        if(child[3].innerHTML=="x"){
         document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!";
         won=true;
        }
        else if(child[3].innerHTML=="o"){
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!";
         won=true;
        }
     }
     else if(child[6].innerHTML==child[7].innerHTML && child[7].innerHTML==child[8].innerHTML){
        if(child[6].innerHTML=="x"){
         document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!";
         won=true;
        }
        else if(child[6].innerHTML=="o"){
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!";
         won=true;
        }
     }
     else if(child[0].innerHTML==child[3].innerHTML && child[3].innerHTML==child[6].innerHTML){
        if(child[0].innerHTML=="x"){
         document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!";
         won=true;
        }
        else if(child[0].innerHTML=="o"){
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!";
         won=true;
        }
     }
     else if(child[1].innerHTML==child[4].innerHTML && child[4].innerHTML==child[7].innerHTML){
        if(child[1].innerHTML=="x"){
         document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!"
         won=true;
        }
        else if(child[1].innerHTML=="o"){
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!";
         won=true;
        }
     }
     else if(child[2].innerHTML==child[5].innerHTML && child[5].innerHTML==child[8].innerHTML&&child[2]=="x"){
        if(child[2].innerHTML=="x"){
         document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!";
         won=true;
        }
        else if(child[2].innerHTML=="o"){
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!";
         won=true;
        }
     }
     else if(child[6].innerHTML==child[4].innerHTML && child[4].innerHTML==child[2].innerHTML){
        
        if(child[6].innerHTML=="x"){
         document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!"
         won=true;
        }
        else if(child[6].innerHTML=="o") {
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!"
         won=true;
        }
     }
     else if(child[0].innerHTML==child[4].innerHTML && child[4].innerHTML==child[8].innerHTML){
         if(child[0].innerHTML=="x"){
             document.getElementById("wonStatus").innerHTML="player <span class='xspan'>X</span> won!!";
             won=true;
        }
    else if(child[0].innerHTML=="o"){
         document.getElementById("wonStatus").innerHTML="player <span class='ospan'>O</span> won!!";
         won=true;
        }
    }

    // to remove the eventHandler when the winning condition is met...................................................................... 

    if(won){
        for(i=0;i<div_childrens.length;i++){
            div_childrens[i].removeEventListener('click',eventRmv);
        }
        document.getElementById("reset").style.backgroundColor="green";
        document.getElementById("reset").style.color="white";
    }

    // checking whether all divs are filled without winning......................................................

    for(let i=0; i<child.length; i++){
        if(child[i].innerHTML==""){
            fill=false;
            break;
        }
        else{
            fill=true;
        }
    }
    if(fill){
        for(i=0;i<div_childrens.length;i++){
            div_childrens[i].removeEventListener('click',eventRmv);
        }
        document.getElementById("wonStatus").innerHTML="Game Tie!";
        document.getElementById("reset").style.backgroundColor="green";
        document.getElementById("reset").style.color="white";
    }
    
}
    function reset(){
        for(let i=0; i<child.length; i++){
            child[i].innerHTML=""
        }
        for(let i=0; i<div_childrens.length; i++){
            div_childrens[i].addEventListener('click',eventRmv);
        }
        document.getElementById("wonStatus").innerHTML="";
        won=false;
          //   making the reset button to default state......................
          document.getElementById("reset").style.backgroundColor="white";
        document.getElementById("reset").style.color="black";
        // making the divs flash for 0.5 sec...........................
        for( let i=0; i<div_childrens.length; i++){
            div_childrens[i].classList.add("borderflash")
        }
        setTimeout(function(){
            for( let i=0; i<div_childrens.length; i++){
            div_childrens[i].classList.remove("borderflash")
            }
        },150)
    }