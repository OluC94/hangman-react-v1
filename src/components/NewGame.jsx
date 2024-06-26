export default function NewGame(props) {
    function handleNewGame() {
        props.setGuessedLetters([]);
        props.setTargetWord(props.getRandomWord());
    }
    return <button onClick={handleNewGame}>New Game</button>;
}
