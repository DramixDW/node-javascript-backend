exports.reverse = function (wordArray) {
    return wordArray.map(word => word.split('').reverse().join(''));
}