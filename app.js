'use strict'

const body=document.querySelector('body');
const first =document.querySelector('.first');
const eventkey=document.querySelector('.event-key');
const eventkeycode=document.querySelector('.event-key-code');
const eventcode=document.querySelector('.event-code');
const eventlocation=document.querySelector('.event-location');


body.addEventListener('keydown',function(e){
    // e.preventDefault();

    console.log(e);
    console.log(e.key);
    console.log(e.keyCode);
    let t=e.code;
    console.log(t);
    console.log(e.location);
   
  if(e.keyCode==32){
    first.textContent=e.keyCode;
    eventkey.style.fontSize="20px";
    eventkey.textContent="space character";
    eventkeycode.textContent=e.keyCode;
    eventcode.textContent=e.code;
    eventlocation.textContent=e.location;
  }
  else if(e.code.length>=10){
    eventcode.style.fontSize="20px";
    first.textContent=e.keyCode;
    eventkey.textContent=e.key;
    eventkeycode.textContent=e.keyCode;
    eventcode.textContent=e.code;
    eventlocation.textContent=e.location;
  
  }

  else{
    eventkey.style.fontSize="150%"
    eventcode.style.fontSize="150%";
    first.textContent=e.keyCode;
    eventkey.textContent=e.key;
    eventkeycode.textContent=e.keyCode;
    eventcode.textContent=e.code;
    eventlocation.textContent=e.location;
  }

    
})


