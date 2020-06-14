const arr = [];
const secretCode = 'qwerty';

window.addEventListener('keydown', e => {
    arr.push(e.key);
    if (arr.length > 6) arr.shift();
    if (arr.join('') === secretCode) cornify_add();
});