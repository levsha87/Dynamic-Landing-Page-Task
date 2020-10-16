// Get variable
const time = document.getElementById("time"),
  greet = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

const showAmPM = true;

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour < 12 ? "AM" : "PM";

  //12h
  if (hour > 12) {
    hour = hour - 12;
  } else if (hour === 0) {
    hour = 12;
  }

  //out time
  time.innerHTML = `${hour}<span>:</span>${plusZero(min)}<span>:</span>${plusZero(sec)} ${showAmPM ? amPm : ""}`;
  setTimeout(showTime, 1000);
}

function plusZero(n){
    return (parseInt(n, 10)<10 ? "0" : "") + n;
}
// out NameDay

function showDay() {
  let today = new Date(),
    day = today.getDay();

  switch (day) {
    case 1:
      day = "Monday";
      day.innerHTML = `${day}`;
      break;
    case 2:
      day = "Tuesday";
      day.innerHTML = `${day}`;
      break;
    case 3:
      day = "Wednesday";
      day.innerHTML = `${day}`;
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      dayToday.innerHTML = `${day}`;
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }
}
// Set Background and Greeting

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  switch (true) {
    case hour < 12:
      document.body.style.backgroundImage = "url(img/morning.jpg)";
      greeting.textContent = "Good Morning, ";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      break;
    case hour < 18:
      document.body.style.backgroundImage = "url(img/afternoon.jpg)";
      greeting.textContent = "Good Afternoon, ";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      break;
    default:
      document.body.style.backgroundImage = "url(img/night.jpg)";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
      greeting.textContent = "Good Evening, ";
      document.body.style.color = "white";
  }
}

//Get Name
function getName() {
  if (localStorage.getItem("name" === null)) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

//set Name
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
} //Get focus

function getFocus() {
  if (localStorage.getItem("focus" === null)) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);


showTime();
showDay();
setBgGreet();
getName();
getFocus();