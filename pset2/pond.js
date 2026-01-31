const maxFrogCapacity = 15;
let numFrogs = prompt('How many frogs?');
let isPondOverCapacity = numFrogs > 15;
let message = isPondOverCapacity ? "It's too crowded!" : 'Come on in!';

print(message);