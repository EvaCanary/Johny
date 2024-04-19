let p = document.querySelector("p");

function addBubble() {
  let b = document.createElement("div");
  b.className = "bubble";
  b.style.width = Math.random() < 0.5 ? "10px" : "20px";
  b.style.left = Math.random() * 96 + "%";
  b.style.setProperty("--top", -(Math.random() * 50 + 50) + "px");
  b.onanimationend = function () {
    this.remove();
  };
  p.appendChild(b);
}

setInterval(addBubble, 1000 / 15);
