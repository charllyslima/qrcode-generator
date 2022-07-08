const uriApi = "https://api.qrserver.com/v1/create-qr-code/";

/* elements */
let buttonGenerate = document.getElementById("generate");
let imgQrCode = document.getElementById("qr");
let inputText = document.getElementById("text");
let spanError = document.getElementById("error");

buttonGenerate.addEventListener("click", (e) => {
    clear();
    let text = document.getElementById("text").value;
    if (text) {
        generateQrCode(text, "500x500");
        spanError.classList.add("d-none");
        imgQrCode.classList.remove("d-none");
    } else {
        spanError.innerHTML = "Text is not a valid";
        spanError.classList.remove("d-none");
    }
});

function generateQrCode(text, size) {
    const uri = `${uriApi}?data=${text}&size=${size}`;
    imgQrCode.setAttribute("src", uri);
}

function clear() {
    spanError.innerHTML = "";
    imgQrCode.setAttribute("src", "");

    imgQrCode.classList.add("d-none");
    spanError.classList.add("d-none");
}
