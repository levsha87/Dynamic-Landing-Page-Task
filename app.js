// Get variable
const time = document.getElementById('time'),
  greet = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  buttonReset = document.getElementById('reset'),
  dayToday = document.getElementById('dayToday');

const showAmPM = true;

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const amPm = hour < 12 ? 'AM' : 'PM';

  // 12
  if (hour > 12) {
    hour = hour - 12;
    // } else if (hour === 0) {
    // hour = 12;
  }

  //out time
  time.innerHTML = `${hour}<span>:</span>${plusZero(
    min
  )}<span>:</span>${plusZero(sec)} ${showAmPM ? amPm : ''}`;
  setTimeout(showTime, 1000);
}

function plusZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
// out NameDay

function showDay() {
  let today = new Date(),
    day = today.getDay();

  switch (day) {
    case 1:
      day = 'Monday';
      dayToday.innerHTML = `${day}`;
      break;
    case 2:
      day = 'Tuesday';
      dayToday.innerHTML = `${day}`;
      break;
    case 3:
      day = 'Wednesday';
      dayToday.innerHTML = `${day}`;
      break;
    case 4:
      day = 'Thursday';
      dayToday.innerHTML = `${day}`;
      break;
    case 5:
      day = 'Friday';
      dayToday.innerHTML = `${day}`;
      break;
    case 6:
      day = 'Saturday';
      dayToday.innerHTML = `${day}`;
      break;
    case 0:
      day = 'Sunday';
      dayToday.innerHTML = `${day}`;
      break;
  }
}
// Set Background and Greeting

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  switch (true) {
    case hour < 12:
      document.body.style.backgroundImage = 'url(img/morning.jpg)';
      greet.textContent = 'Good Morning, ';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
      break;
    case hour < 18:
      document.body.style.backgroundImage = 'url(img/afternoon.jpg)';
      greet.textContent = 'Good Afternoon, ';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
      break;
    default:
      document.body.style.backgroundImage = 'url(img/night.jpg)';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
      greet.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
  }
}

//Get Name
function getName() {
  if (
    localStorage.getItem('name') === '' ||
    localStorage.getItem('name') === null
  ) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

//set Name
function setNameListener() {
  name.addEventListener('keyup', function (e) {
    if (e.key !== 'Enter') {
      localStorage.setItem('name', e.target.innerText);
    }
  });
  name.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if (
        localStorage.getItem('name') === '' ||
        localStorage.getItem('name') === null
      ) {
        name.textContent = '[Enter Name]';
      }
      name.blur();
    } 
  });
} 
//Get focus

function getFocus() {
  if (
    localStorage.getItem('focus') === '' ||
    localStorage.getItem('focus') === null
  ) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocusListener() {
  focus.addEventListener('keyup', function (e) {
    if (e.key !== 'Enter') {
      localStorage.setItem('focus', e.target.innerText);
    }
  });
  focus.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if (
        localStorage.getItem('focus') === '' ||
        localStorage.getItem('focus') === null
      ) {
        focus.textContent = '[Enter Focus]';
      }
      focus.blur();
    } 
  });
}

function reset() {
  localStorage.clear();
  name.textContent = '[Enter Name]';
  focus.textContent = '[Enter Focus]';
}


setNameListener();
setFocusListener(); 
buttonReset.addEventListener('click', reset);
showTime();
showDay();
setBgGreet();
getName();
getFocus();
