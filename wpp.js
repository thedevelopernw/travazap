// Variável responsável por armazenar a referência do setInterval,
// para que seja possível parar a sequência de mensagens sendo enviadas, pelo console 
var interval = null; 

// Função responsável por fazer acontecer a mágica
var executeMassiveSendMessage = (message, input) => {
    // Função que realiza o envio da mensagem em sí
    var sendMessage = (message, input) => {
        //se existe um input, dar fóco para ele e executar o comando de inserção de texto
        if (input) {
            input.focus();
            // Apesar de ser uma função em depreciação, ainda é funcional até a versão testada,
            // mencionada no readme
            document.execCommand("insertText", false, message);
        }

        // Foi utilizado um timeOut pois o envio em loop tem um delay no pressionamento do botão enter
        setTimeout(() => {
            // criação de evento de pressionamento do botão enter
            const event = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                which: 13,
                keyCode: 13,
            });
            // execução do pressionamento do botão enter em si
            input.dispatchEvent(event)
        }, 2000) // Altere esse número para aumentar o delay do botão enter
    }

    // loop em si, em intervalos de 1 segundo
    interval = setInterval(() => {
        sendMessage(message, input)
    }, 1000) // altere esse valor para alterar o tempo entre um envio e outro
}

// apenas usado para parar o loop, não é necessário copiar para o código funcionar
clearInterval(interval)