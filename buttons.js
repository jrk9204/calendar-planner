const beforeBtn = document.querySelector(".beforeBtn");
const afterBtn = document.querySelector(".afterBtn");
const confirm_btn = document.querySelector(".confirm_btn");
const cancle_btn = document.querySelector(".cancle_btn");
const modal_input = document.querySelector(".modal_input");

function buttonsEvents() {
  function handleMonthBtn(event) {
    const buttonName = event.target.textContent;

    if (buttonName === "<") {
      month -= 1;
    } else if (buttonName === ">") {
      month += 1;
    }
    setMonth();
    setDays();
  }

  function handleModalBtn(event) {
    const buttonName = event.target.textContent;
    let originData = JSON.parse(localStorage.getItem("MyEvents"));

    if (buttonName === "확인" && modal_input.value) {
      originData.push({
        date: [year, month + 1, pickedDate],
        content: modal_input.value,
      });

      localStorage.setItem("MyEvents", JSON.stringify(originData));
    }

    modal_input.value = "";
    pickedModal.style.display = "none";
    setDays();
  }

  beforeBtn.addEventListener("click", handleMonthBtn);
  afterBtn.addEventListener("click", handleMonthBtn);
  confirm_btn.addEventListener("click", handleModalBtn);
  cancle_btn.addEventListener("click", handleModalBtn);
}
buttonsEvents();
