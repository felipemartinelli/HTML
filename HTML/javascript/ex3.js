var salMin = prompt("Digite o valor do salario minimo: ");
var qtdeKw = prompt("Digite a quantidade de Kw");
var total;
var unidadeKw;
var totalDesconto;

unidadeKw = salMin / 700;
total = unidadeKw * qtdeKw;
totalDesconto = total - (total * 0.10);

document.write("Valor de 1Kw: R$"+unidadeKw+"<br>");
document.write("Valor total da conta: R$"+total+"<br>");
document.write("Valor com 10% de desconto: R$"+totalDesconto+"<br>");