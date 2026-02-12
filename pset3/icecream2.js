const conesSoldPerHour = 14;
const inventory = 333333333333

for (let i = 0; i < 12; i++) {
    print(conesSoldPerHour * i + ' cones sold at hour ' + i + '.');
    print(inventory - (conesSoldPerHour * i) + ' left.')
}