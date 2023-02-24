const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let mor = [];
    for (let i = 0; i < expr.length; i += 10) {
        mor.push(expr.slice(i, i + 10))
    }
    let morDec = mor.map(a => {
    let b = '';
    for (let i = 0; i < a.length; i += 2){
        if (a[i] == '0') {
        b += '';
        } else if (a[i + 1] == '0') {
        b += '.';
        } else if (a[i + 1] == '1') {
        b += '-';
        } else {
        b = a;
        }
    }
    return MORSE_TABLE[b]
    })
    return morDec.join('')
}

module.exports = {
    decode
}