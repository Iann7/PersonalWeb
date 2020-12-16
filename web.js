let i = 0;
let arr = [{text:'Ignacio Iannello',id:"#mainTitle"},{text:'Soluciones Informaticas',id:"#secondTitle"}]
let text = arr.shift();
let timer = setInterval(writeText, 90);

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
    }
  }
}
