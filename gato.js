var con=1;
var b1="b1",b2="b2",b3="b3",b4="b4",b5="b5",b6="b6",b7="b7",b8="b8",b9="b9";
function actions(boton){
 if(boton.className=="buttons"){
//  alert(boton.name);
  boton.className="clicked";
  var text;
  if(con%2==0){
   text="X";
  }else{
   text="O";
  }
  boton.value=text;
//  alert(boton.value);
  boton.appendChild(document.createTextNode(text));
  con++;
  asignation(text,boton);
 }else{
//  alert("Yei!!!");
//  alert(boton.value);
 }
}
function asignation(text,boton){
 if(b1==boton.name){
  b1=text;
 }
 else if(b2==boton.name){
  b2=text;
 }
 else if(b3==boton.name){
  b3=text;
 }
 else if(b4==boton.name){
  b4=text;
 }
 else if(b5==boton.name){
  b5=text;
 }
 else if(b6==boton.name){
  b6=text;
 }
 else if(b7==boton.name){
  b7=text;
 }
 else if(b8==boton.name){
  b8=text;
 }
 else if(b9==boton.name){
  b9=text;
 }
 validation(text);
}
function validation(text){
 if((b1==b2 && b2==b3)||(b1==b5 && b5==b9)||(b3==b5 && b5==b7)||(b4==b5 && b5==b6)||(b7==b8 && b8==b9)||(b1==b4 && b4==b7)||(b2==b5 && b5==b8)||(b3==b6 && b6==b9)){
  var con=confirm(text+" has won!!!\nDo you wanna play again?");
  if(con==true){
   window.location.reload();
  }
 }
}
