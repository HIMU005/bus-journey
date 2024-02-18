const phone = document.getElementById('input-phone');
let availableSeat = 40;
let selectTotalSeat = 0;
let availableForYou = 4;
let fare = 0;
let phoneNumberLength = 0;
const selectedSeat =[];

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
        if(selectedSeat.includes(seat.innerText))
        {
            alert("You can't select a seat multiple time");
        }
        if(availableForYou > 0 && !selectedSeat.includes(seat.innerText)){
                selectedSeat.push(seat.innerText);
            
            const nowAvailableSeat = getNumberById('available-seat');
            setNumberById('available-seat', nowAvailableSeat-1);
            setNumberById('selected-seat-number', ++selectTotalSeat);
            updatedTable.appendChild(div);
            setBackgroundByElement(seat);
            fare+= 550;
            setNumberById('total-price', fare);
            document.getElementById('grand-price').innerText = fare;
        }
        else {
            availableForYou++;
        }
        if(fare>2000) {
            makeButtonAble('apply-btn');
        }
        // const phone = document.getElementById('input-phone');
        // phoneNumber = phone.addEventListener("change", function(e) {
        //     phoneNumberLength = e.target.value;
        //     console.log(phoneNumberLength);
        // })

        // if(phone.length  && selectTotalSeat) {
        //     makeButtonAble('modal-open');
        // }



        availableForYou--;
        
    })
}

phoneNumber = phone.addEventListener("input", function(e) {
    phoneNumberLength = e.target.value.length;
    if(phoneNumberLength  && selectTotalSeat) {
        makeButtonAble('modal-open');
    }
})




