var myarray = [10,'Daciuk',null,{a:1},function(){}];

function myFunction( arr ){
return arr;
}

//console.log(myFunction(myarray)[1]);

function book( bookName ){
    var allBooks = {
        'Segredos do Ninja Javascript':{
            quantidadePaginas:448,
            autor:'Jonh Resig & Bear Bibeault',
            editora: 'Novatec'
        },
        'Introdução ao HTML5':{
            quantidadePaginas:220,
            autor:'Bruce Lawson & Remy Sharp',
            editora: 'Alta Books'
        },
        'Smashing CSS':{
            quantidadePaginas:283,
            autor:'Erick A. Meyer',
            editora: 'Bookman'
        },

    }
return !bookName ? allBooks: allBooks[ bookName ];

}

//console.log( book() );
var bookName = "Introdução ao HTML5";
// console.log( 'O livro '+bookName+' tem ' + book( bookName ).quantidadePaginas + ' páginas!' );

function myFunc(){
    var x = 0;
    return (x += 1, x);
}

//console.log(myFunc());

