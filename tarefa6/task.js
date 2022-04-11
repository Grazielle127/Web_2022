var prods = [{
    id: 1,
    name: "Peixe"
},
{
    id: 2,
    name: "Parmegiana"
},
{
    id: 3,
    name: "frango"
},
{
    id: 4,
    name: "Salada"
},
{
    id: 5,
    name: "Farofa"
},
{
    id: 6,
    name: "Salada de grão de Bico"
},
];

var thePrices = [25, 45, 35, 15,15, 12]

function start() {
saida.innerHTML = '';

var customerName, customerNumber, customerEmail;

customerName = document.getElementById('customerName').value
customerNumber = document.getElementById('phone').value
customerEmail = document.getElementById('email').value

if (customerName == "" || customerNumber == "" || customerEmail == "") {
    document.getElementById("cor").style.backgroundColor = "#FE667A"
    saida.innerHTML += "Por favor, insira todos os dados para continuar";

} else {
    saida.innerHTML += "Caro <b>" + customerName + "</b><br><br> Seguem os dados do seu pedido. <br><br> O seu pedido é: <br><br>"
    var finalPrice = 0,
        quantSum = 0;

    for (i = 0; i < 6; i++) {
        quant = document.getElementById(i + 1).value

        if (quant != 0) {
            var totalPrice = thePrices[i] * quant
            finalPrice += totalPrice;
            quantSum += quant

            saida.innerHTML += "<li>Prato: " + prods[i].name + " - Preço unitário: R$ " + thePrices[i] + ",00 - Quantidade: " + quant + " - Total: R$ " + totalPrice + ",00";
        }
    }
    $('html,body').animate({
        scrollTop: document.body.scrollHeight
    }, "slow");
    
    if (quantSum == 0) {
        document.getElementById("cor").style.backgroundColor = "#FE667A"
        
        saida.innerHTML = "Atenção, Pedido vazio! ";
    }
    else{ document.getElementById("cor").style.backgroundColor = "#F8F8FF"
        saida.innerHTML += "<br><br><b>Preço final R$ " + finalPrice + ",00<b>";}
}
}
