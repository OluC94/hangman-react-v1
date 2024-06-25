import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import { generateHangmanLetters } from "./utils/hangman-logic";
import Keyboard from "./components/Keyboard";
import NewGame from "./components/NewGame";
import GuessDisplay from "./components/GuessDisplay";

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
            <GuessDisplay 
                isGameWon={isGameWon}
                isGameLost={isGameLost}
                isGameOver={isGameOver}
                revealedGuesses={revealedGuesses}
                targetWord={targetWord}
                guessedLetters={guessedLetters}
                numberOfGuesses={numberOfGuesses}
            />
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
