/**
 *
 * @param {string[]} guessedLetters
 * @param {string} targetWord
 * @returns {number}
 */
export default function countNumberOfMistakes(guessedLetters, targetWord) {
    // return the number of guessed letters that are not in the target word
    let mistakeCount = 0;

    function isNotInTargettedWord(letter){
        return !targetWord.includes(letter)
    }

    return guessedLetters.filter(isNotInTargettedWord).length;
}
