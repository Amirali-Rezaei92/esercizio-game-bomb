
for (let i = 0; i < 100; i++) {
    tabello.innerHTML += ` <div class=" border border-dark "
    value="${i + 1}"><button class="button-table"></button></div>`;
}




const randomNumero = [];


while (randomNumero.length < 16) {
    let num = Math.floor(Math.random() * 100) + 1;

    if (!randomNumero.includes(num)) {
        randomNumero.push(num);
    }
}
console.log(randomNumero);
let count = 1;
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
        const score = document.querySelector('#score');
        score.innerHTML = `SCORE: ${count}`;

        console.log(`Hai cliccato sulla cella ${cellValue}`);
    });
});

