function fase1()
{
    var resposta = prompt ("Digite sua resposta!");
    while(true)
    {
    // A resposta tem que ser 8
        if (resposta == 8)
        {
            alert("Parabéns! \n Respotas Correta! \n Vamos para a próxima fase");
            window.location.href ="./ashefase2.html";
            break;
        }else
        {
            alert("Resposta incorreta! \n Leia com atenção. \n Se necessário utilize a calculadora.");
            resposta = prompt ("Digite sua resposta");
        }
    }  
}