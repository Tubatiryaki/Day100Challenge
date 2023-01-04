const buttonElement =document.querySelector(".btn");


let count=1;
buttonEvent=addEventListener("click",function(){

    buttonElement.innerHTML = count++;
});

 