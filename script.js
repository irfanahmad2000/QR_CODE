// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Data to be encoded in the QR code (URL of the form page)
    var formUrl = "form.html";

    // Generate QR code with the form URL
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: formUrl,
        width: 128,
        height: 128
    });
});
