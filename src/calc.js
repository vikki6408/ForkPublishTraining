function addition(a, b) {
    let somme = a + b;
    return somme;
}

function multiplication(a, b) {
    let produit = a * b;
    return produit;
}

function soustraction(a, b){
    let difference = a - b;
    return difference;
}

function main() {
    let x = 5;
    let y = 10;
    let resultatAdd = addition(x, y);
    let resultatMult = multiplication(x, y);
    let resultatSous = soustraction(x, y);
    console.log(`Addition: ${resultatAdd}, Multiplication: ${resultatMult}, Soustraction: ${resultatSous}`);
}

main();