function loadHome(){
    window.location.href = "index.html";
}
 const M = sessionStorage.getItem("mD");
console.log(M)
let params = new URLSearchParams(window.location.search);

let rideName = params.get("tit");
let ticketPrice = params.get("pr");
const nT = document.getElementById('numTick')

document.getElementById('rideName').innerText = rideName;
document.getElementById('ticprice').innerText = `Price : Rs ${ticketPrice}`;
let price1 = Number.parseInt(ticketPrice);

const numberOfTicketButton = document.getElementById('numTick');
numberOfTicketButton.addEventListener('keyup', (e) => {
    e.preventDefault();
    
    const st = subtotal(nT.value);
    document.getElementById('subTotal').innerHTML = `<div>Subtotal :   Rs ${st}</div>`;
})

