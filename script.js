let userScore=0;
let copmScore=0;
const choices=document.querySelectorAll(".chosses");
const massage=document.querySelector("#msg");
const userScoren=document.querySelector("#user-score");
const compScoren=document.querySelector("#comp-score");
const DrawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw. play again/ ";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}
const showWinner=(userWin,Userchosses,compchoice)=>{
    if(userWin){
       // console.log("You win");
       userScore++;
       userScoren.innerText=userScore;
        msg.innerText=`You Win! Your ${Userchosses} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
       // console.log("You lose");
       copmScore++;
       compScoren.innerText=copmScore;
        msg.innerText=`You Lose! ${Userchosses} beats your ${compchoice}`;
        msg.style.backgroundColor="red";
    }

}
const gencomputer=()=>{
    let option=["rock","paper","scissor"];
  const randomIdx=  Math.floor(Math.random()*3);
    return option[randomIdx];

}
const playgame=(Userchosses)=>{
console.log("User choice=",Userchosses);
const compchoice=gencomputer();
console.log("Computer choice",compchoice);
if(Userchosses===compchoice){
    DrawGame();
}
else{
    let userWin=true;
    if(Userchosses==="rock"){
        // scissor,paper
        userWin=compchoice==="paper"?false:true;
    }else if(Userchosses==="paper"){
        userWin=compchoice==="scissor"?false:true;
    } else{
        userWin=compchoice==="rock"?false:true;
    }
    showWinner(userWin,Userchosses,compchoice);
}
};
choices.forEach((chosses)=>{
chosses.addEventListener("click",()=>{
    const Userchosses=chosses.getAttribute("id");

playgame(Userchosses);
})
});