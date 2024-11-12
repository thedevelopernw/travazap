
# WhatsApp Web Loop

Para você conseguir ver e copiar o código, [clique aqui](https://github.com/thedevelopernw/wpp_loop/blob/main/wpp.js)

## Funcionamento

- Abra o WhatsApp Web de preferência em uma aba nova no Google Chrome

- Para fins de teste abri o chat com o Meta AI, porém você pode abrir qualquer chat com qualuqer contato seu que irá funcionar.

- Na tela do chat, vá na caixinha onde você digita as mensagens que quer mandar normalmente para um contato, clique com o botão direito em cima dela, e depois, clique na opção "Inspect" ou "Inspecionar":

![inspect](https://github.com/thedevelopernw/wpp_loop/blob/main/screenshots/inspect.png?raw=true)

- Uma tela com o título "Dev Tools" deverá aparecer para você, se você não estiver acostumado com programação, essa téla será estranha. Mas não se preocupe, você não precisa entender ela!

- Na tela que abriu, procure a opção como na foto abaixo:

![console](https://github.com/thedevelopernw/wpp_loop/blob/main/screenshots/textBox.png?raw=true)

- O importante é, no passo anterior quando você clicou com o botão direito em cima da caixinha de texto e clicou em inspecionar, a tela que abriu estará bem próxima do local que você deve localizar, descrito na foto acima. Uma dica, observe que na foto existe alguma informações, dentre elas a palavra "contenteditable". Isso facilitará você encontrar seu objetivo.

- Localizado o objetivo, clique com o botão direto exatamente em cima dele e vá na opção "Store as global variable" ou "Armazenar como uma variavel global".

![global](https://github.com/thedevelopernw/wpp_loop/blob/main/screenshots/globalVariable.png?raw=true)

- Vocẽ irá perceber que aparecerá uma informação na parte de baixo do Dev Tools, escrito temp1:

![temp](https://github.com/thedevelopernw/wpp_loop/blob/main/screenshots/temp1.png?raw=true)

- Feito isso, deixe a tela do Dev Tools aberta, pois você vai precisar dela!!!

- Abra o código pelo [link](https://github.com/thedevelopernw/wpp_loop/blob/main/wpp.js) e copie da linha 2 à linha 27, ou se preferir, o trecho abaixo dispõe o código exato para copiar:

```js
var interval = null;

var executeMassiveSendMessage = (message, input) => {
    var sendMessage = (message, input) => {

        if (input) {
            input.focus();
            document.execCommand("insertText", false, message);
        }

        setTimeout(() => {
            const event = new KeyboardEvent('keydown', {
                key: 'Enter',
                code: 'Enter',
                which: 13,
                keyCode: 13,
            });

            input.dispatchEvent(event)
        }, 2000)
    }

    interval = setInterval(() => {
        sendMessage(message, input)
    }, 1000)
} 
```


- Em seguida, vá ao cosole aberto na página do seu WhatsApp Web e cole o trecho de código copiado, e dê "enter":

![shot1](https://github.com/thedevelopernw/wpp_loop/blob/main/screenshots/console.png?raw=true)

- Após dar "enter", copie e cole o comando abaixo no mesmo console. Dê enter novamente, e imediatamente após, as mensagens serão eviadas ao destinatário: ```executeMassiveSendMessage("mensagem desejada entre aspas", temp1)```

- Para parar de enviar as mensagens, feche o navegador onde a aba do WhatsApp Web está aberta ou copie e cole o código abaixo no mesmo console:
```clearInterval(interval)```

