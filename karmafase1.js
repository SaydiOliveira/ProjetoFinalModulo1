function fase1()
{
    var resposta = prompt ("Digite sua resposta!");

    // A resposta tem que ser B ou 12
        if (resposta == "B" || resposta == "b" || resposta == "12")
        {
        alert("Parabéns! \n Respotas Correta! \n Vamos para a próxima fase");
        window.location.href ="./karmafase2.html";
        }else
        {
        alert("Fim das Tentativas");
        window.location.href ="./gameoverkarma.html";
        }
}
