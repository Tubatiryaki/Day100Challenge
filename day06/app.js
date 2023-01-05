
const buttonMessage=document.querySelector(".btn-message");
const buttonLike=document.querySelector(".btn-like");
const buttonFollow = document.querySelector(".btn-follow");

const followerCount=document.querySelector(".count-follower");
const postsCount=document.querySelector(".count-posts");
const likesCount=document.querySelector(".count-likes");

let count= document.querySelector(".count-follower").innerText;
let count2=document.querySelector(".count-posts").innerText;
let count3=document.querySelector(".count-likes").innerText;

// console.log(count);
// let follower="146";
buttonFollow.addEventListener("click",function(){
    followerCount.innerHTML=count++;

})
buttonMessage.addEventListener("click",function(){
    postsCount.innerHTML=count2++;
})
buttonLike.addEventListener("click",function(){
    likesCount.innerHtml=count3++;
    console.log(count3);
})