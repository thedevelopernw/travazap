
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

clearInterval(interval)