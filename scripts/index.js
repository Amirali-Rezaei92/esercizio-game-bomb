
const tabello = document.querySelector('#tabello');
for(let i=0 ; i<100 ; i++){
    tabello.innerHTML += ` <div class=" border border-dark " value="${i+1}"></div>`;
    
}