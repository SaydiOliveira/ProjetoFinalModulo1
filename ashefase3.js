function fase3()
{
    var resposta = prompt ("Digite sua resposta!");

    // A resposta tem que ser Ziilean ou D
        if (resposta == "Ziilean" || resposta == "d" || resposta == "ziilean" || resposta == "D")
        {
            alert("Parabéns! \n Respotas Correta!");
            window.location.href ="./victory.html";
        }else
        {
        alert("Fim das Tentativas");
        window.location.href ="./gameoverashe.html";
        }
}