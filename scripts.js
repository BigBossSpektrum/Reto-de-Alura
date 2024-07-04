const areaEncrypt = document.querySelector('#area-encrypt')
const textEncrypt = document.querySelector('#text-encrypt')
const textAreaDi = document.querySelector('#text-di')
const imagenAreaDi = document.querySelector('#imagen-di')

function copyText() {
    areaEncrypt.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles")
}

function switchImage() {
    textAreaDi.style.display = 'flex'
    imagenAreaDi.style.display = 'none'
}

function encryptText() {
    switchImage()
    const text = textEncrypt.value
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    areaEncrypt.value = encryptedText
}

function decryptText() {
    switchImage()
    // let text = document.getElementById("inputText").value;
    const text = textEncrypt.value
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    areaEncrypt.value = decryptedText;
}

