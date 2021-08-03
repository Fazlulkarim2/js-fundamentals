var gotJob = false;
var moneySaved = 50000;
var hasFlat = false;
var hasHouse = true;
// if (gotJob == true && moneySaved > 200000) {
//     console.log('Cholo bia kore feli');
// }
// else {
//     console.log('Tor kopale bia nai');
// }

// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('Cholo bia kore feli');
// }
// else {
//     console.log('Tor kopale bia nai');
// }

// if (gotJob == true || moneySaved > 200000) {
//     console.log('Cholo bia kore feli');
// }
// else {
//     console.log('Tor kopale bia nai');
// }

if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('Cholo bia kore feli');
}
else {
    console.log('Tor kopale bia nai');
}