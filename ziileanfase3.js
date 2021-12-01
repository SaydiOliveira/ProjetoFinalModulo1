function fase3()
{
    var resposta = prompt ("Digite sua resposta!");
    while(true)
    {
    // A resposta tem que ser Ziilean ou D
        if (resposta == "Ziilean" || resposta == "d" || resposta == "ziilean" || resposta == "D")
        {
            alert("Parabéns! \n Respotas Correta!");
            window.location.href ="./victory.html";
            break;
        }else
        {
            alert("Resposta incorreta! \n Leia com atenção, e responda com calma.");
            resposta = prompt ("Digite sua resposta");
        }
    }  
}