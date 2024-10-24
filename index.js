const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum-minNum + 1));

let guesses;
let attempts = 0;
let running = true;

while(running){
    guesses = window.prompt("Guess the number that I thought")
    guesses = Number(guesses)
    

    if(isNaN(guesses)){
        window.alert("Please enter a valid number")
    }

    else if(guesses < minNum || guesses > maxNum)
        window.alert("Please enter a valid number")

    else{
        attempts++;
        if(guesses > answer){
            window.alert("Too high! Try again")
        }
        
        

        else if(guesses < answer){
            window.alert("Too low! Try again")
        
        }
        else{
            window.alert(`You got it man. Your attempts are ${attempts}`)
            running = false;
        }

    }   
    
    


    
}