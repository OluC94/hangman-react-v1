import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import generateKeys from "./utils/keyboard";
import { generateHangmanLetters } from "./utils/hangman-logic";
import countMistakes from "./utils/count-mistakes";
import Keyboard from "./components/Keyboard";
import NewGame from "./components/NewGame";

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


    return (
        <div className="game">
            <h1>Hangman</h1>
            {winState === "win" && <h2>You Win!</h2>}
            {winState === "lose" && <h2>You lose, too many guesses</h2>}
            <h2 className="revealed-guesses">
                {winState === "in-progress" ? revealedGuesses : targetWord}
            </h2>
            <h3>Guessed Letters: {guessedLetters}</h3>
            <p>Number of mistakes: {numberOfMistakes}</p>
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
