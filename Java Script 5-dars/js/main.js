/* DOM in JS */

/*let headTag = document.head;*/
/*let bodyTag = document.body;*/
/*let havola = document.documentURI;*/
/*let formalar = document.forms;*/
/*let havolalar = document.links;*/
/*console.log(havolalar);*/

/* Events in JS (JSda hodisalar) */

/*function meniBirMartaBos(){
    alert("Siz buttonni bir marta bostingiz!");
}*/
/*function meniIkkiMartaBos(){
    alert("Siz buttonni ikki marta bosdingiz!");
}*/
/*function tanlash(event){
    let event1 = event.target.value
    alert("Siz "+event1+"-mashinasini tanladingiz!")
}*/
/*function inputgaBosish(){
    console.log("Inputda bosildi!");
}*/
/*function inputdanChiqish(){
    console.log("Inputdan chiqish!");
}*/
/*function yozish(event){
    console.log(event.target.value)
}*/
/*
document.querySelector(".matinTegi").addEventListener('copy',function (event){
    console.log("Diqqat! Sizdan "+ event.target.value + " nomli xujjatlar kochitilyapti!");
})*/

/*function kirish(){
    console.log("Hududga kirildi!")
}*/
/*function chiqish(){
    console.log("Hududdan chiqildi!")
}*/
/*function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}*/

document.querySelector(".ochirish").addEventListener('delete',function(event){
    console.log("Diqqat! Sizdan "+ event.target.value + " nomli xujjatlar o'chirilyapti!");
})
