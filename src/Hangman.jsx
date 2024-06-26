import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import generateKeys from "./utils/keyboard";
import { generateHangmanLetters } from "./utils/hangman-logic";
import countMistakes from "./utils/count-mistakes";

export default function Hangman() {
    const randomWord = getRandomWord();
    const [targetWord, setTargetWord] = useState(randomWord);
    const [guessedLetters, setGuessedLetters] = useState([]);

    let revealedGuesses = generateHangmanLetters(guessedLetters, targetWord);
    let numberOfMistakes = countMistakes(guessedLetters, targetWord);

    const missLimit = targetWord.length;

    function calculateWinState() {
        if (!revealedGuesses.includes("_")) {
            return "win";
        }

        if (numberOfMistakes > missLimit) {
            return "lose";
        }

        return "in-progress";
    }

    const winState = calculateWinState();

    const keysLetters = generateKeys();

    function handleTileClicked(letter) {
        setGuessedLetters((currArr) => {
            return [...currArr, letter];
        });
    }

    const renderedKeyboard = keysLetters.map((letter, index) => {
        const letterHasBeenGuessed = guessedLetters.includes(letter);

        const isDisabled = letterHasBeenGuessed || winState !== "in-progress";

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

    function handleNewGame() {
        setGuessedLetters([]);
        setTargetWord(getRandomWord());
    }
    return (
        <div className="game">
            <h1>Hangman Game</h1>
            {winState === "win" && <h2>You Win!</h2>}
            {winState === "lose" && <h2>You lose, too many guesses</h2>}
            <h2 className="revealed-guesses">
                {winState === "in-progress" ? revealedGuesses : targetWord}
            </h2>
            <h3>Guessed Letters: {guessedLetters}</h3>
            <p>Number of mistakes: {numberOfMistakes}</p>
            <div className="keyboard">{renderedKeyboard}</div>
            <button onClick={handleNewGame}>New Game</button>
        </div>
    );
}
