const displayDays = document.querySelector(".calendar_body");
const pickedModal = document.querySelector(".modal_container");
const displayModalDate = document.querySelector(".modal_content");
const modal_Date = document.querySelector(".modal_Date");

const handleDate = (date) => {
  const pickedDay = new Date(year, month, date).getDay();
  modal_Date.textContent = `${month + 1}월 ${date}일 ${allDays[pickedDay]}요일`;
  pickedDate = date;
  pickedModal.style.display = "block";
};

const printDays = (events, date, actuallDate) => {
  JSON.parse(events).forEach((el) => {
    const [searchYear, searchMonth, searchDay] = [...el.date];

    if (
      searchYear === year &&
      searchMonth === month + 1 &&
      searchDay === date
    ) {
      let myPlan = document.createElement("div");
      myPlan.classList.add("myPlan");
      myPlan.textContent = el.content;
      actuallDate.appendChild(myPlan);
      myPlan.style.backgroundColor =
        "#" + parseInt(Math.random() * 0xffffff).toString(16);
    }
  });
};

const setDays = () => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let events = localStorage.getItem("MyEvents");

  console.log("current local", events);

  displayDays.textContent = " ";

  for (let i = 1; i <= 42; i++) {
    let actuallDate = document.createElement("div");
    actuallDate.classList.add("actuallDate");
    let prevDate = document.createElement("div");
    prevDate.classList.add("prevDate");
    let restDate = document.createElement("div");
    restDate.classList.add("restDate");

    if (i <= firstDay) {
      prevDate.textContent = new Date(year, month, 0).getDate() - firstDay + i;
      displayDays.appendChild(prevDate);
    } else if (firstDay < i && i <= daysInMonth + firstDay) {
      let date = i - firstDay;
      actuallDate.textContent = date;
      actuallDate.addEventListener("click", () => {
        handleDate(date);
      });
      displayDays.appendChild(actuallDate);

      if (events !== null) {
        printDays(events, date, actuallDate);
      }
    } else {
      restDate.textContent = Math.abs(daysInMonth + firstDay - i);
      displayDays.appendChild(restDate);
    }
  }
};

setDays();
