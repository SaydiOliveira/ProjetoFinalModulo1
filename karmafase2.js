function fase2()
{
    var resposta = prompt ("Digite sua resposta!");
    {
    // A resposta tem que ser Falsa ou B
        if (resposta == "Falsa" || resposta == "falsa" || resposta == "B" || resposta == "b")
        {
            alert("Parabéns! \n Respotas Correta! \n Vamos para a próxima fase");
            window.location.href ="./karmafase3.html";
        }else
        {
        alert("Fim das Tentativas");
        window.location.href ="./gameoverkarma.html";
        }
    }
}
