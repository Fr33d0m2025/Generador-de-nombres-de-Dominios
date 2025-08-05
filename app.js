// let pronoun = ['the', 'our'];
// let adj = ['great', 'big'];
// let noun = ['jogger', 'racoon'];

// function domainGenerator(){
//     let result = [];
    
//     for (let j = 0; j < adj.length; j++) {
//         for (let i = 0; i < pronoun.length; i++) {
//             for (let k = 0; k < noun.length; k++) {
//                 let domain = pronoun[i] + adj[j] + noun[k] + ".com";
//                 result.push(domain);
//             }
//         }
//     }

//     return result.join("\n");
// }

//  console.log(domainGenerator());

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = [ '.com', '.net', '.us', '.io', '.etc']

function domainGenerator() {
    let result = "";
    for (let i = 0; i < pronoun.length; i++) {
        for (let x = 0; x < adj.length; x++) {            
            for(let z = 0; z < noun.length; z++) {
                for (let c = 0; c < ext.length; c++) {
                    result += pronoun[i] + adj[x] + noun[z] + ext[c] + "\n";
                }
            }
        }
    }
    return result;
}

console.log(domainGenerator());