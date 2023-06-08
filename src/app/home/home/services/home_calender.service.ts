import { Injectable } from "@angular/core";

@Injectable({ providedIn:'root'})
export class calenderService{
  calender(){
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

      document.querySelector(".date h1").innerHTML = months[date.getMonth()];

      document.querySelector(".date p").innerHTML = new Date().toDateString();

      let days = "";

      for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date"
        style="
        background-color: transparent;
        font-size: 12px;
        margin: 0.3rem;
        width: calc(20.2rem / 7);
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
        transition: background-color 0.2s;
        opacity: 0.5;
        "

        onmouseover="this.style.backgroundColor= '#383838';"
        onmouseout="this.style.backgroundColor= 'transparent';"
        >${prevLastDay - x + 1}</div>`;
      }

      for (let i = 1; i <= lastDay; i++) {
        if (
          i === new Date().getDate() &&
          date.getMonth() === new Date().getMonth()
        ) {
          days += `<div class="today" style="

          display: flex;
          flex-wrap: wrap;
          padding: 0.1rem;

          background-color: #167e56;
          font-size: 12px;
          margin: 0.3rem;
          width: calc(20.2rem / 7);
          height: 2rem;

          display: flex;
          justify-content: center;
          align-items: center;
          text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
          transition: background-color 0.2s;
          "

          onmouseover="this.style.backgroundColor= '#383838';"
          onmouseout="this.style.backgroundColor= '#167e56';"

          ">${i}</div>`;
        } else {
          days += `<div
          style="
          background-color: transparent;
          font-size: 12px;
          margin: 0.3rem;
          width: calc(20.2rem / 7);
          height: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
          transition: background-color 0.2s;
          "
          onmouseover="this.style.backgroundColor= '#383838';"
          onmouseout="this.style.backgroundColor= 'transparent';"

          >${i}</div>`;
        }
      }

      /*
      background-color: #262626;
      border: 0.2rem solid #777;
      cursor: pointer;
      */

      for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date"
        style="
        background-color: transparent;
        font-size: 12px;
        margin: 0.3rem;
        width: calc(20.2rem / 7);
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.5);
        transition: background-color 0.2s;
        opacity: 0.5;
        "

          onmouseover="this.style.backgroundColor= '#383838';"
          onmouseout="this.style.backgroundColor= 'transparent';"
        >${j}</div>`;
        monthDays.innerHTML = days;
      }
    };

    document.querySelector(".prev").addEventListener("click", () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });

    document.querySelector(".next").addEventListener("click", () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });


    renderCalendar();
  }

  mouseover() {
      document.getElementById("hov").style.color = "yellow";
  }

  mouseout() {
      document.getElementById("hov").style.color = "white";
  }

}
