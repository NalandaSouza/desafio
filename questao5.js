/*
5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU .
*/

let original = "otorrinolaringologista"
let inverso = ""

for(let i = original.length - 1; i >= 0; i--) {

	inverso += original.charAt(i)

}

console.log(inverso)