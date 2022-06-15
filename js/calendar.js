const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  // Setup last days of last month
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<button class="prev-date day">${prevLastDay - x + 1}</button>`;
  }

  // Setup days of the current month
  dateTemp = new Date(date.getFullYear(), date.getMonth(), 1);

  for (let i = 1; i <= lastDay; i++) {
    if ( i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
      dateTemp.setDate(i);
      days += `<button class="day ofMonth" id="today" value="${dateTemp.toDateString()}">${i}</button>`;
    } else {
      dateTemp.setDate(i);
      days += `<button class="day ofMonth" value="${dateTemp.toDateString()}">${i}</button>`;
    }
  }

  // Setup days of the next month
  for (let j = 1; j <= nextDays; j++) {
    days += `<button class="next-date day">${j}</button>`;
  }

  monthDays.innerHTML = days;

  // Add event listeners to each day of the current month
  buttons = document.querySelectorAll("button.day.ofMonth");

  buttons.forEach(button => {
    button.addEventListener("click", showDate, false);
  });

};

const showDate = (e) => {
  alert(`${e.target.value} was clicked.`)
}

renderCalendar();

// Previous month button "<" 
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

// Next month button ">"
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});