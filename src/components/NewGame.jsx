import getRandomWord from "../utils/get-random-word";

export default function NewGame(props) {
    function handleNewGame() {
        props.setNumberOfGuesses(0);
        props.setGuessedLetters([]);
        props.setTargetWord(getRandomWord());
        props.setRevealedGuesses(
            props.generateHangmanLetters([], props.targetWord),
        );
    }
    return <button onClick={handleNewGame}>New Game</button>;
}
