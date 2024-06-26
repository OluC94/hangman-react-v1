export default function GuessDisplay(props) {
    return (
        <div className="guess-display">
            {props.winState === "win" && <h2>You Win!</h2>}
            {props.winState === "lose" && <h2>You lose, too many guesses</h2>}
            <h2 className="revealed-guesses">
                {props.winState === "in-progress"
                    ? props.revealedGuesses
                    : props.targetWord}
            </h2>
            <h3>Guessed Letters: {props.guessedLetters}</h3>
            <p>Number of mistakes: {props.numberOfMistakes}</p>
        </div>
    );
}
