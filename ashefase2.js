function fase2()
{
    var resposta = prompt ("Digite sua resposta!");

    // A resposta tem que ser Ziilean ou C
        if (resposta == "Ziilean" || resposta == "c" || resposta == "ziilean" || resposta == "C")
        {
        alert("Parabéns! \n Respotas Correta! \n Vamos para a próxima fase");
        window.location.href ="./ashefase3.html";
        }else
        {
        alert("Fim das Tentativas");
        window.location.href ="./gameoverashe.html";
        }
}
