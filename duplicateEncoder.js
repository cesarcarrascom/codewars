/**
 * The goal of this exercise is to convert a string to a new string where
 * each character in the new string is "(" if that character appears only once in the original string,
 * or ")" if that character appears more than once in the original string.
 * Ignore capitalization when determining if a character is a duplicate.
 */

 function duplicateEncode(word){
    word = word.split("").toLowerCase()
    const uniqueArr = [... new Set(word)]
    let uniqueChar = [];
    let result = [];

    uniqueArr.map((e) => {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            const b = word[i];
            if (e == b) {
                count++;
            }
        }
        if (count == 1) {
             uniqueChar.push(e)
        }
    })

    word.map((e) => {
        uniqueChar.includes(e) ? result.push("(") : result.push(")")
    })
    console.log(result.join(""))

}

function duplicateEncoder(word) {
    let unique = ''
    word = word.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
            unique += "("
        } else {
            unique += ")"
        }
    }

    console.log(unique)
}

function duplicateEncoderI(word) {
    let unique = ''
    word = word.toLowerCase()

    for (let i = 0; i < word.length; i++) {
        const e = word[i];

        if (word.lastIndexOf(e) == word.indexOf(e)) {
            unique += word.indexOf(e)
            break
        }
    }
    console.log(unique)
}

duplicateEncoderI('din') // "((("
duplicateEncoderI('recede') // "()()()"
duplicateEncoderI('Success') // ")())())"
duplicateEncoderI('statistics') // "))()))))()"
