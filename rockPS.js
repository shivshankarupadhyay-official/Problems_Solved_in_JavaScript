let player1 = "ROCK";
let player2 = "SCISSORS";

if(player1 === player2){
    console.log("DRAW");
}else if(
    (player1 === "ROCK" && player2 ==="SCISSORS")||(player1==="paper" && player2 ==="ROCK" )||
    (player1 ==="SCISSORS" && player2 ==="PAPER")
){
    console.log("Player 1 wins");
    
}else{
    console.log("player 2 wins");
}