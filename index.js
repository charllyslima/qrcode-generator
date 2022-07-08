const uriApi = "https://api.qrserver.com/v1/create-qr-code/";

/* elements */
let buttonGenerate = document.getElementById("generate");
let buttonDownload = document.getElementById("download");

let imgQrCode = document.getElementById("qr");
let inputText = document.getElementById("text");
let msgError = document.getElementById("error");


buttonGenerate.addEventListener("click", (e) => {
    clear();
    let text = document.getElementById("text").value;
    if (text) {
        generateQrCode(text, "500x500");
        msgError.classList.add("d-none");
        imgQrCode.classList.remove("d-none");
        buttonDownload.classList.remove("d-none");
    } else {
        msgError.innerHTML = "Text is not a valid";
        msgError.classList.remove("d-none");
    }
});

buttonDownload.addEventListener("click", (e) => {
    download(imgQrCode.getAttribute("src"));
})

function generateQrCode(text, size) {
    const uri = `${uriApi}?data=${text}&size=${size}`;
    imgQrCode.setAttribute("src", uri);
}

function clear() {
    msgError.innerHTML = "";
    imgQrCode.setAttribute("src", "");

    imgQrCode.classList.add("d-none");
    msgError.classList.add("d-none");
    buttonDownload.classList.add("d-none");
}

function download(uriImage){
    var a = document.createElement('a');
    a.href = uriImage;
    a.target = "_blank";
    a.download = "qrcode.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
