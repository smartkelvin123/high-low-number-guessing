const tries = 10;
const lowNum = 1 
const highNum = 100 ;
let answer = math.floor(math.random() * (highNum - lowNum + 1)) + lowNum
let guess = 0 
let tryCount = 1 ;
let clue = '';

document.querySelector('#guessButton').addEventListener('click',guessCheck)

function guessCheck() {
    guess = document.querySelector('#guessInput').value
    clue = '' ;
    if (isNaN(guess) || guess == '') {
        document.querySelector('#guessOutput').innerText = 'please enter a real number'


    }else if(guess > highNum || guess < lowNum){
        document.querySelector('#guessOutput').innerText = 'please enter a number between 1 and 100'
    }else if (tryCount > tries){
        document.querySelector('#guessOutput'). innerText = ' you are out of tries ! click Reset to set a new game .'
    }else if ( guess == answer){
        document.querySelector('#guessOutput').innerText = ` you guessed correct ! ${answer} is the right answer !. good job.`
        endGame();

    }else{
        if(guess < answer) {
            document.querySelector ('#guessOutput').innerText = ' you guess is too low .try again'
            clue = ' too low'
        } else if(guess > answer) {
            document.querySelector ('#guessOutput').innerText = ' you guess is too high .try again'
            clue = ' too high'
        }else {
            document.querySelector('#guessOutput').innerText = ' unknown exception'
        }
        let node = document.createElement('li')
        node.appendChild(document.createTextNode(guess + clue));
        document.querySelector('ol'). appendChild(node)

        tryCount++

    }
}

function endGame(){
       resetButton =  document.createElement('button')
       resetButton.textContent = 'Start New Game'
       document.body.append(resetButton)
       resetButton.addEventListener('click'. resetGame)
}

function resetGame() {
    answer = math.floor(math.random() * (highNum - lowNum + 1 )) + lowNum ;
    guess = 0 ;
    tryCount = 1 ;
    let guessList = document.getElementById('guessLiat');
    guessList.innerHTML = '' ;
    document.querySelector('#guessOutput').innerText = '' ;

    resetButton.parentNode.removeChild(resetButton)


}