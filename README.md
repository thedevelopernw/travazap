
# WhatsApp Web Loop

Para você conseguir ver e copiar o código, [clique aqui](https://github.com/thedevelopernw/wpp_loop/blob/main/wpp.js)

## Funcionamento

Abra o código pelo [link](https://github.com/thedevelopernw/wpp_loop/blob/main/wpp.js) e copie da linha 2 à linha 27, ou se preferir, o trecho abaixo dispõe o código exato para copiar:

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
