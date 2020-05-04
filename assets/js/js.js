
// Exercises

for (let i = 1; i <= 11; i+=2) {
    if (i > 5) {
        console.log(i - 1);
    } else {
        console.log(i)
    }
}


// My version

for (let i = 0; i <= 10; i++) {

    if (i <= 5 && i % 2 == 1) {
        console.log(i);
    }

    if (i >= 5 && i % 2 == 0) {
        console.log(i);
    }

}

