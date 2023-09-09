const lavaRain = document.getElementById("lavaRain");

let count = 1;

function createRain() {
  const rain = document.createElement("span");
  rain.id = `chiled${count}`;

  rain.classList = "rain";
  let size = Math.random() * 70;
  rain.style.width = 20 + size + "px";
  rain.style.height = 20 + size + "px";

  rain.style.left = Math.random() * innerWidth + "px";

  lavaRain.appendChild(rain);

  setTimeout(() => {
    lavaRain.remove();
  }, 10000);

  count++;
  console.log(count);
  if (count == 40) {
    clearInterval(intervalId);
  }
}
const intervalId = setInterval(createRain, 40);
