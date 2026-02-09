const priceOfIceCream = 333333.33;
let paymentReceived = prompt('How much cash do you have?');
let isPaymentEnough = paymentReceived >= priceOfIceCream;
let changeAmount = paymentReceived - priceOfIceCream;

if (isPaymentEnough) {
    print('Thanks! Enjoy the ice cream.');
    print('Your change is ' + changeAmount + ' dollars.');
}else{
    print('Not enough cash.');
}

