let availableSeat = 40;
let selectTotalSeat = 0;
let fare = 0;
const seats = document.querySelectorAll(".seat");
for(let i = 0;i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener('click', function(e) {
        if(selectTotalSeat >= 4) {
            alert("You can't buy more more than 4");
            removeEventListener;
        }
        const nowAvailableSeat = getNumberById('available-seat');
        setNumberById('available-seat', nowAvailableSeat-1);
        setNumberById('selected-seat-number', ++selectTotalSeat);
        const updatedTable= document.getElementById("selected-table");
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        h1.innerText = seat.innerText;
        h2.innerText = 'Economy';
        h3.innerText = '550';
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        makeItFlexByContainer(div);
        updatedTable.appendChild(div);
        setBackgroundByElement(seat);
        fare+= 550;
        setNumberById('total-price', fare);
        if(fare>2000) {
            const apply = document.querySelector('#apply-btn');
            apply.classList.remove('cursor-not-allowed');
        }
        const phone = document.getElementById('input-phone').value;
        if(phone.length  && selectTotalSeat) {
            const apply = document.querySelector('#modal-open');
            apply.classList.remove('cursor-not-allowed');
        }
        
    })
}