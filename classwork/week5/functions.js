/*
function greet(phrase, nameToPrint){
print(phrase + ', ' + nameToPrint + '!');
}

greet('Hello', 'Peter'); 
*/

function square(numberToSquare){
    let squaredNumber = numberToSquare * numberToSquare;
    return squaredNumber
}
print(
    square(
        prompt('Number to square: ')
    )
)