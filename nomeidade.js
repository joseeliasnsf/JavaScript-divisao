class Pessoa{
    #nome = "";
    constructor(nome,idade){
        this.#nome = nome;
        this.idade = idade;
    }

get nome(){
    return this.#nome;
}
set nome(nome){
    this.#nome = nome;
}
}
let p = new Pessoa("Jose Elias",42);
p.nome = "Jose Elias";
console.log("Nome: "+ p.nome);
console.log("Idade: "+ p.idade);