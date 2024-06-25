import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import { generateHangmanLetters } from "./utils/hangman-logic";
import Keyboard from "./components/Keyboard";
import NewGame from "./components/NewGame";

export default function Hangman() {
    const randomWord = getRandomWord();
    const [targetWord, setTargetWord] = useState(randomWord);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [revealedGuesses, setRevealedGuesses] = useState(
        generateHangmanLetters([], targetWord),
    );
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);

    const missLimit = targetWord.length + 3;
    const isGameLost = guessedLetters.length > missLimit;
    const isGameWon = !revealedGuesses.includes("_");
    const isGameOver = isGameWon || isGameLost;

    return (
        <div className="game">
            <h1>Hangman Game</h1>
            {isGameWon && <h2>You Win!</h2>}
            {isGameLost && !isGameWon && <h2>You lose, too many guesses</h2>}
            <h2 className="revealed-guesses">
                {!isGameOver ? revealedGuesses : targetWord}
            </h2>
            <h3>Guessed Letters: {guessedLetters}</h3>
            <p>Number of guesses: {numberOfGuesses}</p>
            <Keyboard
                setNumberOfGuesses={setNumberOfGuesses}
                setGuessedLetters={setGuessedLetters}
                generateHangmanLetters={generateHangmanLetters}
                targetWord={targetWord}
                setRevealedGuesses={setRevealedGuesses}
                guessedLetters={guessedLetters}
                isGameOver={isGameOver}
            />
            <NewGame 
                setNumberOfGuesses={setNumberOfGuesses}
                setGuessedLetters={setGuessedLetters}
                setTargetWord={setTargetWord}
                setRevealedGuesses={setRevealedGuesses}
                generateHangmanLetters={generateHangmanLetters}
                targetWord={targetWord}
            />
        </div>
    );
}
