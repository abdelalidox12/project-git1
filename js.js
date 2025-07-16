

let boat        = document.getElementById('boat');
let river       = document.getElementById('river');
let mountains4  = document.getElementById('mountains4');
let mountains3  = document.getElementById('mountains3');
let moon        = document.getElementById('moon');
let stars       = document.getElementById('stars');
let      dox       = document.getElementById('dox');
let             = document.getElementById('');

window.onscroll = function(){

    let valuey = scrollY;

    stars.style.left = valuey + 'px';
    moon.style.top = valuey * 4 + 'px';
    mountains3.style.top = valuey * 2 + 'px';
    mountains4.style.top = valuey * 1.5 + 'px';
   river.style.top = valuey + 'px';
   boat.style.top = valuey + 'px';
    boat.style.left = valuey * 3 + 'px';
    dox.style.fontSize = valuey + 'px';
    if( scrollY >= 70 ){
       dox.style.fontSize = 70 + 'px';
       dox.style.position = 'fixed';
    }
 if( scrollY >= 362 ){
 dox.style.display = 'none';

 }else{
     dox.style.display = 'block';
 }

 if(scrollY >= 100){
    stars.style.cssText =`
    background: linear-gradient(#345a78,#253a58);
    ` 
 }else{    stars.style.cssText =`
    background:linear-gradient(#1a0818,#1a0818);
    ` }
}