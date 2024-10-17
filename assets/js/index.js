
document.getElementById('gerarBtn').addEventListener('click', function(){
    const url = document.getElementById('urlInput').value;
    const imagemQr = document.getElementById('qrCode');
    const baixarImg = document.getElementById('baixarBtn');

    imagemQr.innerHTML = '';

    if(url){
        const qrcode = new QRCode(imagemQr,{
            text: url,
            width: 256,
            height: 256,
        });
    }

    baixarImg.classList.remove('d-none');
});

document.getElementById('baixarBtn').addEventListener('click', function(){
    const qrCanvas = document.querySelector('#qrCode canvas');

    const baixarLink = document.createElement('a');

    baixarLink.href = qrCanvas.toDataURL = 'image/png';

    baixarLink.download = 'qrcode.png';

    baixarLink.click();
})
