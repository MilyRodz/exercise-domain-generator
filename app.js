let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.com', '.net'];

pronoun.forEach( (valorPronoun, indexPronoun) => {    
    adj.forEach( (valorAdj, indexAdj) => {                
        noun.forEach( (valorNoun, indexNoun) => {
            console.log(pronoun[indexAdj] +  adj[indexPronoun] + valorNoun  + extension[indexNoun]);
        });
    });
});

