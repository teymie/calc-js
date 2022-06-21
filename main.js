let arithmetic = prompt('What operation do you want to perform: + or - or * or / : ')
let val1 = parseInt(prompt('Enter a value : '))
let val2 = parseInt(prompt('Enter another value : '))

if (arithmetic == '+') {
    alert(val1 + val2);
    console.log(val1 + val2);
    
}
else if (arithmetic == '-') {
    alert(val1 - val2);
    console.log(val1 - val2)
}
else if (arithmetic == '*') {
    alert(val1 * val2);
    console.log(val1 * val2)
}
else if (arithmetic == '/') {
    alert(val1 / val2);
    console.log(val1 / val2)
}
else{
    console.log('invalid operation');
    
}