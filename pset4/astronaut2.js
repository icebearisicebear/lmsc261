const maxLifespan = 1000;

function checkLifespan(hoursUsed){
    //if (typeof hoursUsed != number) { return "please enter valid number" } 
    if (hoursUsed < 800){
        return 'Suit in working condition.';
    } else if (hoursUsed < 1000 && hoursUsed >= 800){
        return 'Suit needs replacement soon.';
    } else if (hoursUsed >= 1000){
        return 'Suit no longer safe to use.';
    }
}

print(
    checkLifespan(
        prompt('Enter number of hours used:')
    )
)
