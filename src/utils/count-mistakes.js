/**
 *
 * @param {string[]} guessedLetters
 * @param {string} targetWord
 * @returns {number}
 */
export default function countMistakes(guessedLetters, targetWord) {
    // return the number of guessed letters that are not in the target word
    function isNotInTargetWord(letter){
        return !targetWord.includes(letter);
    }
    
    return guessedLetters.filter(isNotInTargetWord).length;
}
