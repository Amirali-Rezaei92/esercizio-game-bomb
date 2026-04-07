
for (let i = 0; i < 100; i++) {
    tabello.innerHTML += ` <div class=" border border-dark "
    value="${i + 1}"><button class="button-table"></button></div>`;
}




const randomNumero = [];

for (let j = 0; j < 16; j++) {
    randomNumero.push(Math.floor(Math.random() * 100) + 1);
}
console.log(randomNumero);
let count = 0;
const cells = document.querySelectorAll('.button-table');
cells.forEach((cell) => {
    cell.addEventListener('click', () => {


        const cellValue = Number(cell.parentElement.getAttribute('value'));
        if (randomNumero.includes(cellValue)) {
            cell.classList.add('color-red');
            console.log('Finish game');
            document.querySelector('#base').innerHTML = `<div class="finish text-center pt-5">
        <h1>GAME OVER <br> Score :${count}</h1>
        </div>`
        } else {
            if (count < 84) {
                cell.classList.add('color-blu');
                console.log('ok');
                count++;
            }
            else {
                document.querySelector('#base').innerHTML = `<div class="win text-center pt-5">
        <h1>YOU WIN <br> Score :${count}</h1>
        </div>`;
            }

        }
        console.log(`Hai cliccato sulla cella ${cellValue}`);
    });
}); 
