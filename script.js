//Crie uma estrutura que receba 3 arrays:
//Cada array deve receber 3 objects:
//cria uma variavel com uma condição que exiba a mensagem:
/*if: "My favorit movie is..."
else:"Not even 5 stars...*/

let comedy = [{
    title: 'The perfect choice(A escolha perfeita)',
    director: 'Jason Moore',
    year: 2012,

}, {
    title:'legally blonde(Legalmente loiras)' ,
    director: 'Savage Steve Holland',
    year: 2009,

}, {
    title: 'Deadpool',
    director: 'Tim Miller',
    year: 2016,

}];
console.table(comedy)

if (comedy = 'Deadpool'){
    console.log('My favorit movie is Deadpool')

}else{
    console.log('Not even 5 stars')
}

//-------------*****---------------------------------

let action = [{
    title: 'Black Widow(Viuva negra)',
    director: 'Cate Shortland',
    year: 2021,

}, {
    title: 'Lucy',
    director: 'Luc Besson',
    year: 2014,

}, {
    title: 'Divergent',
    director: 'Neil Burger',
    year: 2014,

}];
console.table(action)

if (action = 'Black Widow(Viuva negra)'){
    console.log('My favorit movie is Black Widow(Viuva negra)')

}else{
    console.log('Not even 5 stars')
}

//---------------------*****-------------------------

let fantasy = [{
    title: 'Doctor strange (Doutor estranho)',
    director: 'Scott Derrickson',
    year: 2016,

}, {
    title: 'fantastic animals (Animais fantásticos)',
    director: 'David Yates',
    year: 2018,

}, {
    title: 'Aladdin',
    director: 'Guy Ritchie',
    year: 2019,

}];

console.table(fantasy)

if (fantasy = 'fantastic animals (Animais fantásticos)'){
    console.log('My favorit movie is fantastic animals (Animais fantásticos)')

}else{
    console.log('Not even 5 stars')
}