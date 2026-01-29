let plate = prompt('Enter License plate: ');
let plateLength = plate.length;
let isLengthLegal = plate.length <= 6;
let message = isLengthLegal ? 'Thanks for the order!' : 'Invalid plate.';

// this should also work
let messageAlt = plate.length <= 6 ? 'Thanks for the order!' : 'Invalid plate.';

print(message);
print(messageAlt);