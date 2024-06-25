import generateKeys from "../utils/keyboard";

export default function Keyboard(props) {
    const keys = generateKeys();

    const renderedKeyboard = keys.map((tile, index) => {
        function handleTileClicked(letter) {
            props.setNumberOfGuesses((currVal) => currVal + 1);
            props.setGuessedLetters((currArr) => {
                const updatedOutput = props.generateHangmanLetters(
                    [...currArr, letter],
                    props.targetWord,
                );
                props.setRevealedGuesses(updatedOutput);

                return [...currArr, letter];
            });
        }

        const letterHasBeenGuessed = props.guessedLetters.includes(tile.letter);

        if (letterHasBeenGuessed || props.isGameOver) {
            tile.isClicked = true;
        }

        return (
            <button
                key={index}
                className="tile"
                onClick={() => {
                    handleTileClicked(tile.letter);
                }}
                disabled={tile.isClicked}
            >
                {tile.letter}
            </button>
        );
    });
    return <div className="keyboard">{renderedKeyboard}</div>;
}
