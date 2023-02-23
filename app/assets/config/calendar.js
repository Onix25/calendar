const currentDate = document.querySelector('.current-date'),
daysTags = document.querySelector('.days'),
prevNextIcon = document.querySelectorAll('.icons span');

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

// console.log(daysTags);

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const rendercalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofPrevMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";
   console.log(firstDayofMonth);

    for(let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class = "inactive" >${lastDateofPrevMonth - i + 1}</li>`;  // adding empty li tags to the days
    }
    for(let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                     && currYear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class = "${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.textContent = `${months[currMonth]} ${currYear}`;

    daysTags.innerHTML = liTag;
}
rendercalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {  // adding the click event to the icons
        // console.log(icon);
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
        console.log( new Date(currYear , currMonth).getDate())
        // if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
        //     // creating a new date of current year & month and pass it as date value
        //     date = new Date(currYear, currMonth, new Date().getDate());
        //     currYear = date.getFullYear(); // updating current year with new date year
        //     currMonth = date.getMonth(); // updating current month with new date month
        // } else {
        //     date = new Date(); // pass the current date as date value
        // }
        rendercalendar();
    });
});
