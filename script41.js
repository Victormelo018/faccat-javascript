// o pensamento computacional funciona nos seguintes passos
/* 
entrada de dados
processamento de dados
saida de dados 
*/

let n1, n2, n3, media, media_apro;

n1 = parseFloat(prompt("Qual foi a nota da sua 1- prova ? "));

n2 = parseFloat(prompt("Qual foi a nota da sua 2- prova ? "));

n3 = parseFloat(prompt("Qual foi a nota da sua 3- prova ? "));

media = parseFloat(prompt("Qual foi a media dos exercicios  ? "));



media_apro =( n1 + n2 * 2 + n3 * 3 + media )/ 7 ;

if (media_apro >= 9.0) {
  alert(`A`);
} else if (media_apro >= 7.5 && media_apro < 9.0) {
  alert(`B`);
} else if ((media_apro >= 6.0 && media_apro < 7.5)) {
  alert(`C`);
} else {
  alert(`D`);
}
