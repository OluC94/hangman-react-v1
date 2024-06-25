
export default function GuessDisplay(props) {
    return (<div>
        {props.isGameWon && <h2>You Win!</h2>}
            {props.isGameLost && !props.isGameWon && <h2>You lose, too many guesses</h2>}
            <h2 className="revealed-guesses">
                {!props.isGameOver ? props.revealedGuesses : props.targetWord}
            </h2>
            <h3>Guessed Letters: {props.guessedLetters}</h3>
            <p>Number of guesses: {props.numberOfGuesses}</p>
    </div>)
}