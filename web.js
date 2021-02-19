let i = 0;
let arr = [{text:'Ignacio Iannello',id:"#mainTitle"},
{text:'Soluciones Informaticas',id:"#secondTitle"},
{text:'Ignacioiannello7@gmail.com',id:"#email"},
{text:'+541167929767',id:"#whatsapp"}];
let text = arr.shift();
let timer = setInterval(writeText, 60);

let timerMove;
let hasFinished = false;
let totalMoved =0;


//let divArr = [".about-me",".skills",".projects",".contact-me"];
//let onArr = 0;
//let timeScroll = 150;


function writeText(){
  if(i < text.text.length){
    let newText = $(text.id).text() + text.text[i];
    $(text.id).text(newText);
    i++;
  } else{
    if (arr.length > 0) {
      i=0;
      text = arr.shift();
    } else {
      clearInterval(timer);
      hasFinished = true;
    }
  }
}



/*document.addEventListener('keydown', function(event){

  if(event.keyCode === 39 && hasFinished && onArr < divArr.length-1){
    $(divArr[onArr]).animate({left:"-1500px"},timeScroll);
     $(divArr[onArr]).delay(240).queue(function(next){
       $(divArr[onArr]).css("visibility","hidden");
       $(divArr[onArr]).css("right","auto");
       $(divArr[onArr]).css("left","auto");

        onArr++;
       $(divArr[onArr]).css("right","-110%");
       $(divArr[onArr]).css("visibility","visible");
       $(divArr[onArr]).animate({right:"0%"},timeScroll);
       next();

  });
}

if(event.keyCode === 37 && hasFinished && onArr > 0){
  $(divArr[onArr]).css("right","auto");
  $(divArr[onArr]).css("left","auto");
  $(divArr[onArr]).animate({right:"-1500px"},timeScroll);
   $(divArr[onArr]).delay(240).queue(function(next){
     $(divArr[onArr]).css("visibility","hidden");


      onArr--;
     $(divArr[onArr]).css("left","-110%");
     $(divArr[onArr]).css("visibility","visible");
     $(divArr[onArr]).animate({left:"0%"},timeScroll);

     next();

});
}


  if(event.keyCode === 13 && hasFinished ){

     $(".overflow").animate({top:"-=1000px"},timeScroll);
     $(".about-me").delay(240).queue(function(next){
       $(".overflow").hide();
       $(this).css("visibility","visible");
       $(this).animate({top:"40%"},timeScroll);
       next();
     });
  }

/*if(event.keycode === 37 && onArr > 0 ){
$(divArr[onArr]).animate({left:"-=1000px"},200);
 $(divArr[onArr]).delay(240).queue(function(next){
   $(divArr[onArr]).hide().css("left","0");
    onArr--;
   $(divArr[onArr]).css("visibility","visible");
   $(divArr[onArr]).animate({right:"50%"},200);
   next();
 });
}
});

function moveDiv(){
  totalMoved+=20;
  $(".overflow").animate({top:totalMoved + "px"});
}
*/
