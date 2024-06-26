import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import generateKeys from "./utils/keyboard";
import { generateHangmanLetters } from "./utils/hangman-logic";
import countMistakes from "./utils/count-mistakes";
import Keyboard from "./components/Keyboard";
import NewGame from "./components/NewGame";
import GuessDisplay from "./components/GuessDisplay";

export default function Hangman() {
    const randomWord = getRandomWord();
    const [targetWord, setTargetWord] = useState(randomWord);
    const [guessedLetters, setGuessedLetters] = useState([]);

    const revealedGuesses = generateHangmanLetters(guessedLetters, targetWord);
    const numberOfMistakes = countMistakes(guessedLetters, targetWord);

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

    return (
        <div className="game">
            <h1>Hangman</h1>
            <GuessDisplay
                winState={winState}
                revealedGuesses={revealedGuesses}
                targetWord={targetWord}
                guessedLetters={guessedLetters}
                numberOfMistakes={numberOfMistakes}
            />
            <Keyboard
                winState={winState}
                guessedLetters={guessedLetters}
                setGuessedLetters={setGuessedLetters}
            />
            <NewGame
                setGuessedLetters={setGuessedLetters}
                setTargetWord={setTargetWord}
                getRandomWord={getRandomWord}
            />
        </div>
    );
}
