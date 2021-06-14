import './sass/main.scss';
const refs = {
  time: document.querySelector(`#time`),
  greeting: document.querySelector(`#greeting`),
  name: document.querySelector(`#name`),
  focus: document.querySelector(`#focus`),
};
const { time, greeting, name, focus } = refs;

// options
const showAmPm = true;

function showTime() {
    // let today = new Date(2021, 11, 15, 19, 30, 41);
    let today = new Date(), //here we got comas instead of dots and comas - need to understand it
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // show AM or PM 
    const amPm = hour >= 12 ? `pm` : `am`;

    // 12hr format date
    hour = hour % 12 || 12;

    // time output
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ``}`;
    setTimeout(showTime, 1000);
}

// run
showTime()

//  we add zeros to numbers
function addZero(number) {
    return (parseInt(number, 10) < 10 ? `0` : ``) + number;
}

// set backgr and greeting
function setBcgrAndGreet() {
    // let today = new Date(2021, 11, 15, 19, 30,41)
    let today = new Date(),
        hour = today.getHours(),
    min = today.getMinutes(),
        sec = today.getSeconds();
    
    if (hour < 21) {
        // morning
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = `Good morning`;
    } else if (hour < 22) {
        // afternoon
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = `Good afternoon`;
    } else {
        // evening
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = `Good evening`;
        document.body.style.color = `white`;
    }
}

setBcgrAndGreet();

// get name func
function getName() {
    if (localStorage.getItem(`name`) === null) {
        name.textContent = `[what is your name?]`;
    } else {
        name.textContent = localStorage.getItem(`name`)
    }
}

getName();

// get focus
function getFocus() {
  if (!localStorage.getItem(`focus`)) {
    focus.textContent = `[what is your focus?]`;
  } else {
    focus.textContent = localStorage.getItem(`focus`);
  }
}
getFocus();

// set name
name.addEventListener(`keypress`, setNameHandler)
name.addEventListener(`blur`, setNameHandler);

function setNameHandler(event) {
    if (event.type === `keypress`) {
        // make sure enter is pressed
        if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem(`name`, event.target.innerText);
            name.getBoundingClientRect();
        }
    } else {
        localStorage.setItem(`name`, event.target.innerText)
    }
}

focus.addEventListener(`keypress`, setFocusHandler);
focus.addEventListener(`blur`, setFocusHandler);

function setFocusHandler(event) {
      if (event.type === `keypress`) {
        // make sure enter is pressed
        if (event.which == 13 || event.keyCode == 13) {
          localStorage.setItem(`focus`, event.target.innerText);
          focus.blur();
        }
      } else {
        localStorage.setItem(`focus`, event.target.innerText);
      }
}




















