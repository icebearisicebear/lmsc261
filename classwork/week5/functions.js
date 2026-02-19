/*
function greet(phrase, nameToPrint){
print(phrase + ', ' + nameToPrint + '!');
}

greet('Hello', 'Peter'); 
*/

/*
function square(numberToSquare){
    let squaredNumber = numberToSquare * numberToSquare;
    return squaredNumber
}
print(
    square(
        prompt('Number to square: ')
    )
)
*/


function cakeDivision(numOfAttendees){
    if (numOfAttendees === 0){
        return 6.28;
    }
    let cakeInRadian = 6.28;
    return cakeInRadian / numOfAttendees;
}

print(cakeDivision(prompt('How many people?')))