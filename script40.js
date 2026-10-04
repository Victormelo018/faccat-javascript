// o pensamento computacional utiliza uma sequencia de operaçoes sendo elas :
/*
entrada de dados
processamento de dados
saida de dados
*/
alert("condicão");

let nome_produto, quant_adquirida, preco_unitario, total, total_pagar, desconto;

nome_produto = prompt("qual o nome o produto ? ");

quant_adquirida = parseInt(prompt(" qual  a  quantidade adquirida ? "));

preco_unitario = parseFloat(prompt("qual o preço do produto ? "));

total = quant_adquirida * preco_unitario;

if (quant_adquirida <= 5) {
  total_pagar = total * 0.98;
  desconto = total - total_pagar;
  alert(`o total ficou $ ${total_pagar.toFixed(2)} e o desconto foi $ ${desconto.toFixed(2)}`);
} else if (quant_adquirida > 5 && quant_adquirida <= 10) {
  total_pagar = total * 0.97;
  desconto = total - total_pagar;
  alert(`o total ficou $ ${total_pagar.toFixed(2)} e o desconto foi $ ${desconto.toFixed(2)}`);
} else {
  total_pagar = total * 0.95;
  desconto = total - total_pagar;
  alert(`o total ficou $ ${total_pagar.toFixed(2)} e o desconto foi $ ${desconto.toFixed(2)}`);
}

location.reload();