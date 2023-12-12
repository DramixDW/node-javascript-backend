
function toKebabCase(someString) {
    return someString.toLowerCase().replaceAll(" ", '-');
}

function toVegetarianKebabCase(someString) {
    return someString.toLowerCase().replaceAll(" ", '-').replaceAll('meat', 'vegetables');
}

exports.toKebab = toKebabCase;
exports.toVegetarianKebab = toVegetarianKebabCase;