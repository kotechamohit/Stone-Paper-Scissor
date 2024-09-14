let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
constmsg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
    //Rock,Paper,Scissors

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win!");
        msg.innerText=`You win! 🍻 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose!");
        msg.innerText=`You lose! 😔${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawGame=()=>{
    // console.log("Game was draw.");
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
}

const playGame=(userChoice)=>{
    console.log("User Choice= ",userChoice);
    //Generate Computer Choice
    const compChoice=genCompChoice();
    console.log("Computer Choice= ",compChoice);
    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);    
    }
}

choices.forEach((choice) => {
    console.log(choice);
    //User Choice
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked ",userChoice);
        playGame(userChoice);
    });
});