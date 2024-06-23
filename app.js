let btnEncrypt = getHTML("#btn-encrypt");
let btnDecrypt = getHTML("#btn-decrypt");
let btnClean = getHTML("#btn-trash");
let btnCopy = getHTML("#btn-copy");
let encryptText = getHTML("#text-encrypted");
let auxTextEncrypt = encryptText.innerHTML


btnClean.addEventListener("click", () => {
    cleanText();
});

btnEncrypt.addEventListener("click", () => {
    encrypt()
});

btnDecrypt.addEventListener("click", () => {
    decrypt();
});

btnCopy.addEventListener("click", () => {
let textArea = getHTML("#area");
let textEncrypted =  getHTML("#text-encrypted").innerHTML;
textArea.value = textEncrypted;
btnCopy.value = "¡Copiado!"
});

function encrypt() {
    if (!validate()) return;
    let texto = replaceEncryptText(getHTML("#area").value);
    animateText(texto, "CODIFICANDO MENSAJE...", "¡MENSAJE CODIFICADO CON ÉXITO!");

}

function validate() {
    let error = getHTML("#text-error")
    let errorContainer = getHTML("#error-container");
    if (validateError() != undefined) {
        error.innerHTML = validateError();
        errorContainer.classList.add("error-container");
        return false
    } else {
        errorContainer.classList.remove("error-container");
        errorContainer.classList.add("ocultar");
        return true
    }
}

function validateError() {
    let text = getText().trim();
    if (text == "") {
        return "El texto no debe estar vacío."
    }
    for (let i = 0; i < text.length; i++) {
        if (text[i] == text[i].toUpperCase() && text.charCodeAt(i) != 32
            || ((text.charCodeAt(i) != 32 && text.charCodeAt < 97)
                || text.charCodeAt(i) > 122)) {
            return "No debe contener mayúsculas, números o caracteres especiales."
        }
    }

}

function replaceEncryptText(texto) {

    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            resultado += "ai";
        }
        else if (texto[i] == "e") {
            resultado += "enter";
        }
        else if (texto[i] == "i") {
            resultado += "imes";
        }
        else if (texto[i] == "o") {
            resultado += "ober";
        }
        else if (texto[i] == "u") {
            resultado += "ufat";
        }
        else {
            resultado += texto[i]
        }
    }

    return resultado;
}

function decrypt() {
    if (!validate()) return;

    let textToDecrypt = getHTML("#area").value;
    let text = replaceDecrypText(textToDecrypt);
    animateText(text, "DESCIFRANDO CÓDIGO...", "¡CÓDIGO DESCIFRADO CON ÉXITO!");
}

function replaceDecrypText(texto) {

    let result = "";
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            result += texto[i];
            i = i + 1;
        }
        else if (texto[i] == "e") {
            result += texto[i];
            i = i + 4;
        }
        else if (texto[i] == "i") {
            result += texto[i];
            i = i + 3;
        }
        else if (texto[i] == "o") {
            result += texto[i];
            i = i + 3;
        }
        else if (texto[i] == "u") {
            result += texto[i];
            i = i + 3;
        }
        else {
            result += texto[i]
        }

    }
    return result;

}


function animateText(text, message, finalMessage) {
    let title = getHTML("#code-title")
    title.innerHTML = message;
    encryptText.classList.remove("animation");
    title.classList.remove("transparencia")
    title.classList.remove("ocultar")
    setTimeout(() => {
        title.classList.add("transparencia")
        encryptText.innerHTML = "";
        encryptText.innerHTML = auxTextEncrypt;
        encryptText.classList.add("animation");

    }, 10)
    setTimeout(() => {

        title.innerHTML = finalMessage;
        encryptText.innerHTML = text;
    }, 3500)
}

function getText() {
    return getHTML("#area").value;
}

function getHTML(elemento) {
    return document.querySelector(elemento);
}

function cleanText() {
    let errorContainer = getHTML("#error-container");
    let texto = getHTML("#area");
    texto.value = ""
    errorContainer.classList.remove("error-container");
    errorContainer.classList.add("ocultar");
    btnCopy.value = "Copiar"
}

