function hesabla() {
    let amount = parseInt(document.getElementById('amount').value);
    const imageFolder = './money/';
    const pul = [500, 200, 100, 50, 20, 10, 5, 1];
    const imagesDiv = document.getElementById('images');
    imagesDiv.innerHTML = '';

    pul.forEach(pul => {
        const count = Math.floor(amount / pul);
        amount -= count * pul;
        if (count > 0) {
            imagesDiv.innerHTML += `<img src="${imageFolder}${pul}.jpeg"> x${count}`;
        }
    });
}
