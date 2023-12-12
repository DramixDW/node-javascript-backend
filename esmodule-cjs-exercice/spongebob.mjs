export function toSpongeBobCase(sentence) {
    let result = '';
    for (let index = 0; index < sentence.length; index++) {
        const humanFactor = Math.ceil(Math.random() * 100);
        if (index % 2 === 0) {
           result += humanFactor > 20 ? sentence.charAt(index).toUpperCase() : sentence.charAt(index).toLowerCase();
        } else {
           result += humanFactor > 20 ? sentence.charAt(index).toUpperCase() : sentence.charAt(index).toLowerCase();
        }
    }
    return result;
}