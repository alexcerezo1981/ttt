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
}

function CheckBoxUsed(BoxUsed){
    if (BoardGame[i-1]!=BoxUsed)
        return BoxUsed = true
    else
        return BoxUsed = false
}

function CheckIfWinner(){

    if (BoardGame[0]===BoardGame[1] && BoardGame[1]===BoardGame[2] || BoardGame[3]===BoardGame[4] && BoardGame[4]===BoardGame[5] || BoardGame[6]===BoardGame[7] && BoardGame[7]===BoardGame[8] || BoardGame[0]===BoardGame[3] && BoardGame[3]===BoardGame[6] || BoardGame[1]===BoardGame[4] && BoardGame[4]===BoardGame[7] || BoardGame[2]===BoardGame[5] && BoardGame[5]===BoardGame[8] || BoardGame[0]===BoardGame[4] && BoardGame[4]===BoardGame[8] || BoardGame[4]===BoardGame[6] && BoardGame[6]===BoardGame[2])  
    {
        console.log (turn + " WINS THE GAME!!!")
        process.exit()
    }else{
        if (turn==="X"){
            turn="O"
        }else{
            turn="X"
        }
        TurnCounter=TurnCounter+1 
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

    // We checked if the pressed key is a number between 1 and 9
    for (i=1;i<10;i++){
        if(key.sequence === i.toString ()) {

            // Check if the box is already in use
            BoxUsed=CheckBoxUsed(i.toString())
            if (BoxUsed=false){
            //if (BoardGame[i-1]!=i.toString ()){
                console.log ("This box is already in used, please select another one")
                BoxUsed = true
            }else{
                BoardGame[i-1]=turn         // Update the array with the new value
 
                // Check if there is a winner
                CheckIfWinner() 

                // Update the board
                DisplayBoard()
                
                // If we don't have a winner yet, check if all the boxes are used ("Drawn"), if not display the turn of the next player
                if (TurnCounter===9){
                    console.log ("DRAW!")
                    process.exit();        
                }else if (BoxUsed===false)
                    console.log ("it's the turn for " + turn + ". Press one of the numbers displayed on the board. Press 'e' for Exit")
            }
            WrongKey=false
        }
    }

    // Control if we pressed a key not avialable on the game
    if (WrongKey===true){
        console.log ("They key pressed is not avialable on this game, please try again")
    }
});
