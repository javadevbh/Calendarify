import { days as weakDays } from "./days.mjs";
import { times } from "./times.mjs";

const selectDay = document.getElementById("selectDay");
const selectTime = document.getElementById("selectTime");
const btn = document.getElementById("submit");
const result = document.getElementById("show-result");
let days, time, extractedSubstring , extractedSubstringForDays ;

const convertTime = (fullName) => {
  if (
    fullName === "even-first" ||
    fullName === "even-second" ||
    fullName === "even-third" ||
    fullName === "even-fourth" ||
    fullName === "even-fifth" ||
    fullName === "even-sixth" ||
    fullName === "even-seventh"
  ) {
    let startIndex = 5;
    let endIndex = 15;
    extractedSubstring = fullName.substring(startIndex, endIndex);
    return extractedSubstring;
  } else {
    let startIndex = 4;
    let endIndex = 15;
    extractedSubstring = fullName.substring(startIndex, endIndex);
    return extractedSubstring;
  }
};
const convertDay = (fullName) => {
  if (
    fullName === "even-first" ||
    fullName === "even-second" ||
    fullName === "even-third" ||
    fullName === "even-fourth" ||
    fullName === "even-fifth" ||
    fullName === "even-sixth" ||
    fullName === "even-seventh"
  ) {
    let startIndex = 0;
    let endIndex = 4;
    extractedSubstringForDays = fullName.substring(startIndex, endIndex);
    return extractedSubstringForDays;
  } else {
    let startIndex = 0;
    let endIndex = 3;
    extractedSubstringForDays = fullName.substring(startIndex, endIndex);
    return extractedSubstringForDays;
  }
};

btn.addEventListener("click", (e) => {
  console.log(selectTime.value)
  e.preventDefault();
  convertTime(selectTime.value);
  convertDay(selectTime.value);
  console.log(extractedSubstringForDays)
  switch (selectDay.value) {
    case "Saturday": {
      if (extractedSubstringForDays == "even") {
        days = weakDays[0].date.even.join(" , ");
      } else {
        days = weakDays[0].date.odd.join(" , ");
      }
      time = times.time[extractedSubstring];
      break;
    }

    case "Sunday":
      if (extractedSubstringForDays == "even") {
        days = weakDays[1].date.even.join(" , ");
      } else {
        days = weakDays[1].date.odd.join(" , ");
      }
      time = times.time[extractedSubstring];

      break;

    case "Monday":
      if (extractedSubstringForDays == "even") {
        days = weakDays[2].date.even.join(" , ");
      } else {
        days = weakDays[2].date.odd.join(" , ");
      }
      time = times.time[extractedSubstring];

      break;

    case "Tuesday":
      if (extractedSubstringForDays == "even") {
        days = weakDays[3].date.even.join(" , ");
      } else {
        days = weakDays[3].date.odd.join(" , ");
      }
      time = times.time[extractedSubstring];

      break;

    case "Wednesday":
      if (extractedSubstringForDays == "even") {
        days = weakDays[4].date.even.join(" , ");
      } else {
        days = weakDays[4].date.odd.join(" , ");
      }
      time = times.time[extractedSubstring];

      break;

    case "Thursday":
      if (extractedSubstringForDays == "even") {
        days = weakDays[5].date.even.join(" , ");
      } else {
        days = weakDays[5].date.odd.join(" , ");
      }
      time = times.time[extractedSubstring];

      break;

    case "Friday":
      if (extractedSubstringForDays == "even") {
        days = weakDays[6].date.even.join(" , ");
      } else {
        days = weakDays[6].date.odd.join(" , ");
      }
      time = times.time[extractedSubstring];

      break;
  }
  result.innerHTML = `کلاست ساعت ${time} در روز های ${days} برگزار میشه&#10024`;
});
