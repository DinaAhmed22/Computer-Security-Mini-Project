function encryptText(event) {
    event.preventDefault();

    const plainTextInput = document.getElementById('plain-text-input');
    const keyInput = document.getElementById('key-input');
    const encryptionResult = document.getElementById('encryption-result');

    const plainText = plainTextInput.value.toUpperCase();
    const key = keyInput.value.toUpperCase();

    const encryptedText = encrypt(plainText, key);
    encryptionResult.textContent = "Encrypted Text: " + encryptedText;
}

function decryptText(event) {
    event.preventDefault();

    const cipherTextInput = document.getElementById('plain-text-input');
    const keyInput = document.getElementById('key-input');
    const decryptionResult = document.getElementById('decryption-result');

    const cipherText = cipherTextInput.value.toUpperCase();
    const key = keyInput.value.toUpperCase();

    const decryptedText = decrypt(cipherText, key);
    decryptionResult.textContent = "Decrypted Text: " + decryptedText;
}

function encrypt(plainText, key) {
    let encryptedText = '';
    const keyLength = key.length;

    for (let i = 0; i < plainText.length; i++) {
        const plainChar = plainText[i];
        const keyChar = key[i % keyLength];

        if (plainChar.match(/[A-Z]/)) {
            const plainCharCode = plainChar.charCodeAt(0) - 65;
            const keyCharCode = keyChar.charCodeAt(0) - 65;

            const encryptedCharCode = (plainCharCode + keyCharCode) % 26;
            const encryptedChar = String.fromCharCode(encryptedCharCode + 65);

            encryptedText += encryptedChar;
        } else {
            encryptedText += plainChar;
        }
    }
    function encryptText(event) {
        event.preventDefault();
        var selectedTechnique = document.getElementById("technique-select").value;
        var plainText = document.getElementById("text-input").value;
        var key = document.getElementById("key-input").value;
        var encryptedText = "";
        document.getElementById("output-text").textContent = "Encrypted Text: " + encryptedText;
    }
    return encryptedText;
}

function decrypt(encryptedText, key) {
    let decryptedText = '';
    const keyLength = key.length;

    for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % keyLength];

        if (encryptedChar.match(/[A-Z]/)) {
            const encryptedCharCode = encryptedChar.charCodeAt(0) - 65;
            const keyCharCode = keyChar.charCodeAt(0) - 65;

            const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26;
            const decryptedChar = String.fromCharCode(decryptedCharCode + 65);

            decryptedText += decryptedChar;
        } else {
            decryptedText += encryptedChar;
        }
    }

    return decryptedText;
}

