let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['choco', 'racoon', 'time', 'print', 'alien', 'fires', 'ghost', 'clown', 'penguin'];
let ext = ['.com', '.org', '.co', '.io', '.me', '.in', '.es'];



function domainGenerator() {

    let arrayResult = "";
    let arrayDomainHack = "";

    for (let i = 0; i < pronoun.length; i++) {
        for (let x = 0; x < adj.length; x++) {
            for (let z = 0; z < noun.length; z++) {
                for (let c = 0; c < ext.length; c++) {
                    if (noun[z].endsWith(ext[c].slice(1))) {
                        arrayDomainHack += pronoun[i] + adj[x] + noun[z].replace(ext[c].slice(1), ext[c])  + "\n";
                    }
                    arrayResult += pronoun[i] + adj[x] + noun[z] + ext[c] + "\n";
                }
            }
        }
    }
    return arrayResult + arrayDomainHack;
}

console.log(domainGenerator());