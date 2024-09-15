
let saturate =document.getElementById("saturate");
let contrast =document.getElementById("contrast");
let brightness =document.getElementById("brightness");
let sepia =document.getElementById("sepia");
let grayscale =document.getElementById("grayscale");
let blure =document.getElementById("blur");
let huerotate =document.getElementById("hue-rotate");

let img =document.getElementById("img");
let upload =document.getElementById("upload");
let download =document.getElementById("download");
let boximg =document.querySelector(".imag");
let reste =document.querySelector("span");

const canvas =document.getElementById("canvas");
const ctx = canvas.getContext('2d');


function restValue(){
    img.style.filter="none"
    ctx.filter ='none'
    saturate.value="100"
    contrast.value="100"
    brightness.value="100"
    sepia.value="0"
    grayscale.value="0"
    blure.value="0"
    huerotate.value="0"
 
 }

window.onload =function(){

    reste.style.display="none";
    boximg.style.display="none";
    download.style.display="none";

}
upload.onchange = function(){
    restValue();
    reste.style.display="block";
    boximg.style.display="block";
    download.style.display="block";
    h2.style.display="block";


        let file = new FileReader;
        file.readAsDataURL(upload.files[0]);
            file.onload= function(){

                img.src=file.result;
            }
              
            img.onload = function(){
                canvas.width = img.width;
                canvas.height =img.height;
                ctx.drawImage(img,0,0,canvas.width,canvas.height);
                img.style.display='none';


            }

               

}
 let filters = document.querySelectorAll("ul li input");
 filters.forEach( filter =>{
      filter.addEventListener('input',function(){
            ctx.filter = `
            
            saturate(${saturate.value}%)
            contrast(${contrast.value}%)
            brightness(${brightness.value}%)
            sepia(${sepia.value}%)
            grayscale(${grayscale.value})
            blur(${blure.value}px)
            hue-rotate(${huerotate.value}deg)           
             
            
            `
                ctx.drawImage(img,0,0,canvas.width,canvas.height);


      })
     
      
      
 })

 download.onclick = function(){
  
    download.href = canvas.toDataURL();



 }
