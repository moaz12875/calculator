let mybtn1=document.getElementById("btn1");
let mybtn2=document.getElementById("btn2");
let mybtn3=document.getElementById("btn3");
let mybtn4=document.getElementById("btn4");
let mybtn5=document.getElementById("btn5");
let mybtn6=document.getElementById("btn6");
let mybtn7=document.getElementById("btn7");
let mybtn8=document.getElementById("btn8");
let mybtn9=document.getElementById("btn9");
let mybtn10=document.getElementById("btn10");
let mybtn11=document.getElementById("btn11");
let mybtn12=document.getElementById("btn12");
let mybtn13=document.getElementById("btn13");
let mybtn14=document.getElementById("btn14");
let mybtn15=document.getElementById("btn15");
let mybtn16=document.getElementById("btn16");
let mybtn17=document.getElementById("btn17");
let mybtn18=document.getElementById("btn18");
let mybtn19=document.getElementById("btn19");
let mybtn20=document.getElementById("btn20");
let input1 = document.getElementById("input");
let count = document.getElementById("count");
window.onload = function(){
  input1.focus();
}
let colors = ["red", "green", "white", "black", "yellow", "pink", "purple","blue","gray","move"];
let index=0
document.addEventListener("click", function () {
  let color1 = "#" + Math.floor(Math.random()*16777215).toString(16);
  let color2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
  index++;
  if (index >= colors.length) {
    index = 0;
  }
});

mybtn9.addEventListener("click", function(){
   count =  input1.value+mybtn9.textContent;
     input1.value = count;
});mybtn10.addEventListener("click", function(){
   count =  input1.value+mybtn10.textContent;
     input1.value = count;
});mybtn11.addEventListener("click", function(){
   count =  input1.value+mybtn11.textContent;
     input1.value = count;
});mybtn12.addEventListener("click", function(){
   count =  input1.value+mybtn12.textContent;
     input1.value = count;
});mybtn13.addEventListener("click", function(){
   count =  input1.value+mybtn13.textContent;
     input1.value = count;
});mybtn14.addEventListener("click", function(){
   count =  input1.value+mybtn14.textContent;
     input1.value = count;
});mybtn15.addEventListener("click", function(){
   count =  input1.value+mybtn15.textContent;
     input1.value = count;
});mybtn16.addEventListener("click", function(){
   count =  input1.value+mybtn16.textContent;
     input1.value = count;
});mybtn17.addEventListener("click", function(){
   count =  input1.value+mybtn17.textContent;
     input1.value = count;
});mybtn18.addEventListener("click", function(){
   count =  input1.value+mybtn18.textContent;
     input1.value = count;
});
mybtn19.addEventListener("click", function(){
   count = Math.sqrt(eval(input1.value)) ;
     input1.value = count;
});
     mybtn20.addEventListener("click", function(){
   count = count.slice(0, -1) ;
     input1.value = count;
     });
     mybtn1.addEventListener("click", function(){
   count =  input1.value+mybtn1.textContent;
     input1.value = count;
});
mybtn2.addEventListener("click", function(){
   count =  input1.value+mybtn2.textContent;
     input1.value = count;
});
mybtn3.addEventListener("click", function(){
   count =  input1.value+mybtn3.textContent;
     input1.value = count;
});
mybtn4.addEventListener("click", function(){
   count =  input1.value+mybtn4.textContent;
     input1.value = count;
});
mybtn7.addEventListener("click", function(){
   count =  input1.value+mybtn7.textContent;
     input1.value = count;
});
mybtn8.addEventListener("click", function(){
   count =  input1.value+mybtn7.textContent;
     input1.value = count;
});

mybtn5.addEventListener("click", function(){
   count=eval( input1.value)
  input1.value = count;
});

mybtn6.addEventListener("click", function(){
     input1.value = "";
});
