var nome = readLine("Qual é o nome do seu herói? ");
var exp = readInt("Qual é a experiência do seu herói? ");
// Verifica se a variavel exp é numero.
if (isNaN(exp)){
    console.log("O valor de experiência informado não é válido")
} else if (exp <= 1000){
    var rank = "Ferro";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
} else if ((exp > 1000 ) && (exp <=2000)){
    var rank = "Bronze";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
} else if ((exp > 2000 ) && (exp <=5000)){
    var rank = "Prata";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
} else if ((exp > 5000 ) && (exp <=7000)){
    var rank = "Ouro";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
} else if ((exp > 7000 ) && (exp <=8000)){
    var rank = "Platina";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
} else if ((exp > 8000 ) && (exp <=9000)){
    var rank = "Ascendente";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
} else if ((exp > 9000 ) && (exp <=10000)){
    var rank = "Imortal";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
} else{
    var rank = "Radiante";
    console.log("O herói de nome " + nome +" está no nível de " + rank);
}