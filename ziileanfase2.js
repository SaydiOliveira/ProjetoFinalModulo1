function fase2()
{
    var resposta = prompt ("Digite sua resposta!");
    while(true)
    {
    // A resposta tem que ser Ziilean ou C
        if (resposta == "Ziilean" || resposta == "c" || resposta == "ziilean" || resposta == "C")
        {
            alert("Parabéns! \n Respotas Correta! \n Vamos para a próxima fase");
            window.location.href ="./ashefase3.html";
            break;
        }else
        {
            alert("Resposta incorreta! \n Leia com atenção e responda com calma.");
            resposta = prompt ("Digite sua resposta");
        }
    }  
}