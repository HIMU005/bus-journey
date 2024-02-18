let availableSeat = 40;
let selectTotalSeat = 0;
let availableForYou = 4;
let fare = 0;
let PhoneNumberLength = 0;
const seats = document.querySelectorAll(".seat");
for(let i = 0;i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener('click', function(e) {
        if(availableForYou <=0) {
            alert("You can't buy more more than 4");
        }
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
        if(availableForYou > 0){
            const nowAvailableSeat = getNumberById('available-seat');
            setNumberById('available-seat', nowAvailableSeat-1);
            setNumberById('selected-seat-number', ++selectTotalSeat);
            updatedTable.appendChild(div);
            setBackgroundByElement(seat);
            fare+= 550;
            setNumberById('total-price', fare);
        }
        else {
            availableForYou++;
        }

        if(fare>2000) {
            makeButtonAble('apply-btn');
        }
        const phone = document.getElementById('input-phone').value;
        if(phone.length  && selectTotalSeat) {
            makeButtonAble('modal-open');
        }



        availableForYou--;
        
    })
}

