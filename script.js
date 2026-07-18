const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
buttons.forEach(button=>{button.addEventListener("click", ()=>{
 const value= button.textContent
 if(value=="C")
{
    display.value="";
}

else if(value==="="){
display.value =eval(display.value)
}
else
    display.value+=value;})}) 


document.addEventListener("keydown",event=>{
    const key=event.key
    if("0123456789+-*/.".includes(key))
   
    display.value+=key;
   else if(key=="Enter"||key=="=")
   {
    display.value =eval(display.value);
   }
   else if(key==="Backspace")
   {
     display.value=display.value.slice(0,-1);
   }
   else if(key==="Escape"||key==="C"||key==="c")
   {
    display.value="";
   }


   

});