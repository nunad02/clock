function showTime() {
  const date = new Date();
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourDeg = hours * 30 + 0.5 * minutes;
  const minuteDeg = minutes * 6 + 0.1 * seconds;
  const secondDeg = seconds * 6;

  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  const digitalClock = document.querySelector("#digital-clock");
  const session = date.getHours() < 12 ? "AM" : "PM";
  const hour = hours < 10 ? "0" + hours : hours;
  const minute = minutes < 10 ? "0" + minutes : minutes;
  const second = seconds < 10 ? "0" + seconds : seconds;
  digitalClock.textContent = hour + ":" + minute + ":" + second + " " + session;

  setTimeout(showTime, 1000);
}

showTime();
