const displayMonths = document.querySelector(".calendar_year_month");
const displayWeeks = document.querySelector(".calendar_weeks");
const allDays = ["일", "월", "화", "수", "목", "금", "토"];

let year = new Date().getFullYear();
let month = new Date().getMonth();
let pickedate = null;

const setMonth = () => {
  if (month < 0) {
    month = 11;
    year -= 1;
  } else if (month >= 12) {
    month = 0;
    year += 1;
  }

  displayMonths.textContent = `${month + 1}   ${year}`;
};

const setWeek = () => {
  for (let i = 0; i < allDays.length; i++) {
    if (i === 0 || i === 6) {
      let weekend = document.createElement("div");
      weekend.classList.add("weekend");

      weekend.textContent = allDays[i];

      displayWeeks.append(weekend);
    } else {
      let day = document.createElement("div");
      day.classList.add("weekdays");
      day.id = i;
      day.textContent = allDays[i];
      displayWeeks.append(day);
    }
  }
};

setMonth();
setWeek();
