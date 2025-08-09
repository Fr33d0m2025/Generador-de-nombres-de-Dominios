let pronouns = ['the', 'our'];
let adjetives = ['great', 'big'];
let nouns = ['choco', 'racoon', 'time', 'print', 'alien', 'fires', 'ghost', 'clown', 'penguin'];
let extensions = ['.com', '.org', '.co', '.io', '.me', '.in', '.es'];

function domainGenerator() {

    let arrayResult = "";
    let arrayDomainHack = "";

    for (let i = 0; i < pronouns.length; i++) {
        for (let x = 0; x < adjetives.length; x++) {
            for (let z = 0; z < nouns.length; z++) {
                for (let c = 0; c < extensions.length; c++) {
                    if (nouns[z].endsWith(extensions[c].slice(1))) {
                        arrayDomainHack += pronouns[i] + adjetives[x] + nouns[z].replace(extensions[c].slice(1), extensions[c])  + "\n";
                    }
                    arrayResult += pronouns[i] + adjetives[x] + nouns[z] + extensions[c] + "\n";
                }
            }
        }
    }
    return arrayResult + arrayDomainHack;
}

console.log(domainGenerator());