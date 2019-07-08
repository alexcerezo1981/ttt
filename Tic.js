// Readline lets us tap into the process events
const readline = require('readline');
// Allows us to listen for events from stdin
readline.emitKeypressEvents(process.stdin);
// Raw mode gets rid of standard keypress events and other
// functionality Node.js adds by default
process.stdin.setRawMode(true);

// This is the array that control the values of the board
var BoardGame = []
for (x=1; x<10;x++){
    BoardGame[x-1]=x.toString()
}

var turn = "X"          // Variable to control the turn
//var i=0               // Variable for the loop for
var TurnCounter=0       // Variable to control when we got to the maximum of turns
var WrongKey =true      // Variable to control if the press a wrong key
var BoxUsed = false     // Variable to control if the box is already used



    
// Function to Display the board

function DisplayBoard() {
    console.clear ()
    console.log ("Tic Tac Toe")
    console.log ("")
    console.log("--- --- ---")
    console.log(" " + BoardGame[0] + " | " + BoardGame[1] + " | " + BoardGame[2])
    console.log("--- --- ---")
    console.log(" " + BoardGame[3] + " | " + BoardGame[4] + " | " + BoardGame[5])
    console.log("--- --- ---")
    console.log(" " + BoardGame[6] + " | " + BoardGame[7] + " | " + BoardGame[8])
    console.log("--- --- ---")
    console.log ("")

    // If we don't have a winner yet, check if all the boxes are used ("Drawn"), if not display the turn of the next player
    if (TurnCounter===9){
        console.log ("DRAW!")
        process.exit();
    }else{
        if (BoxUsed===false)
        console.log ("it's the turn for " + turn + ". Press one of the numbers displayed on the board. Press 'e' for Exit")
    }}

function CheckIfWinner(){
    if (BoardGame[0]===BoardGame[1] && BoardGame[1]===BoardGame[2]){
        console.log (BoardGame[0] + " WINS THE GAME!!!")
        process.exit()
    }else if (BoardGame[3]===BoardGame[4] && BoardGame[4]===BoardGame[5]){
        console.log (BoardGame[3] + " WINS THE GAME!!!")
        process.exit()
    }else if (BoardGame[6]===BoardGame[7] && BoardGame[7]===BoardGame[8]){
        console.log (BoardGame[6] + " WINS THE GAME!!!")
        process.exit()
    }else if (BoardGame[0]===BoardGame[3] && BoardGame[3]===BoardGame[6]){
        console.log (BoardGame[0] + " WINS THE GAME!!!")
        process.exit()
    }else if (BoardGame[1]===BoardGame[4] && BoardGame[4]===BoardGame[7]){
        console.log (BoardGame[1] + " WINS THE GAME!!!")
        process.exit()
    }else if (BoardGame[2]===BoardGame[5] && BoardGame[5]===BoardGame[8]){
        console.log (BoardGame[2] + " WINS THE GAME!!!")
        process.exit()
    }else if (BoardGame[0]===BoardGame[4] && BoardGame[4]===BoardGame[8]){
        console.log (BoardGame[0] + " WINS THE GAME!!!")
        process.exit()
    }else if (BoardGame[4]===BoardGame[6] && BoardGame[6]===BoardGame[2]){
        console.log (BoardGame[4] + " WINS THE GAME!!!")
        process.exit()
    }
}

DisplayBoard()

process.stdin.on('keypress', (str, key) => {

    WrongKey = true
    BoxUsed = false

    // To Exit the Game
    if(key.sequence === "E" || key.sequence === "e") {
        process.exit();
    }

    // We checked if the pressed key is a number between 0 and 8
    for (i=1;i<10;i++){
        if(key.sequence === i.toString ()) {

            // Check if the box is already in use
            if (BoardGame[i-1]!=i.toString ()){
                console.log ("This box is already in used, please select another one")
                BoxUsed = true
            }else{
                BoardGame[i-1]=turn         // Update the array with the new value
                
                // Change the turn
                if (turn==="X"){
                    turn="O"
                }else{
                    turn="X"
                }
                TurnCounter=TurnCounter+1    
                
                // Update the board
                DisplayBoard()

                // Check if there is a winner
                CheckIfWinner() 
            }
            WrongKey=false
        }
    }

    // Control if we pressed a key not avialable on the game
    if (WrongKey===true){
        console.log ("They key pressed is not avialable on this game, please try again")
    }
});
