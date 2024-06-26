import generateKeys from "../utils/keyboard";

export default function Keyboard(props) {
    const keysLetters = generateKeys();

    function handleTileClicked(letter) {
        props.setGuessedLetters((currArr) => {
            return [...currArr, letter];
        });
    }

    const renderedKeyboard = keysLetters.map((letter, index) => {
        const letterHasBeenGuessed = props.guessedLetters.includes(letter);

        const isDisabled =
            letterHasBeenGuessed || props.winState !== "in-progress";

        return (
            <button
                key={index}
                className="tile"
                onClick={() => {
                    handleTileClicked(letter);
                }}
                disabled={isDisabled}
            >
                {letter}
            </button>
        );
    });

    return <div className="keyboard">{renderedKeyboard}</div>;
}
