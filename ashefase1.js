function fase1()
{
    var tentativas = 1;
    var respostaCerta = 8;

    while(tentativas <= 3)
    {
    var resposta = prompt ("Digite sua resposta!");
     
    if(resposta == respostaCerta)
    {
        alert("Parabéns! \n Respotas Correta! \n Vamos para a próxima fase");
        window.location.href ="./ashefase2.html";
        break;
    }
        else
        {
            if(tentativas <= 3)
            {
                alert("Resposta incorreta! \n Leia com atenção e responda com calma. \n Se necessário utilize a calculadora"); 
            }
                if(tentativas >= 3)
                    {
                    alert("Fim das Tentativas");
                    window.location.href ="./gameoverashe.html";
                    }
        }
        tentativas++;
    }        
}