const label = document.querySelectorAll(".label");
// const content = document.querySelectorAll(".content");
let triger = true;

label.forEach(async (el, i) => {
  const p_h = el.parentNode.clientHeight + "px";
  el.parentNode.style.height = el.clientHeight + "px";
  const target = el.parentNode;
  if (i !== 0) {
    const h = target.children[1].clientHeight + "px";
    target.children[1].style.height = 0;
    el.addEventListener("click", async (e) => {
      if (!triger) {
        alert("글자가 전부 출력 되기 전엔 클릭이 안되요!");
        return;
      }
      if (target.classList.value.includes("on")) {
        target.classList.remove("on");
        el.parentNode.children[1].style.height = 0;
        el.parentNode.style.height = el.clientHeight + "px";
      } else {
        target.classList.add("on");
        el.parentNode.style.height = p_h;
        el.parentNode.children[1].style.height = h;
        // stream
        if (target.classList.value.includes("stream")) {
          const stremTarget = target.children[1];
          const streamText = stremTarget.textContent.trim();
          stremTarget.innerHTML = "";
          let result = "";
          const stream = (text) =>
            new Promise((resolve, reject) => {
              try {
                setTimeout(() => {
                  result += text;
                  stremTarget.innerHTML = result;
                  resolve();
                }, 50);
              } catch (err) {
                console.log(err);
              }
            });
          for (let i = 0; i < streamText.length; i++) {
            triger = false;
            await stream(streamText[i]);
            if (i === streamText.length - 1) triger = true;
          }
        }
      }
    });
  }

  if (target.classList.value.includes("myName")) {
    target.addEventListener("click", () => {
      target.children[0].classList.toggle("skyblue");
    });
  }
});

const inputs = document.querySelectorAll("input");

[...inputs].map((el) => {
  // console.log(el);
  el.addEventListener("keyup", (e) => {
    console.log(e.target.value.length);
    if (e.target.value.length > 10) el.style.backgroundColor = "skyblue";
    else el.style.backgroundColor = "#fff";
  });
});

const myMind = document.querySelector(".myMind");
myMind.addEventListener("mouseover", () => {
  myMind.style.backgroundColor = "red";
  myMind.innerHTML = "😠";
});
myMind.addEventListener("mouseout", () => {
  myMind.style.backgroundColor = "blue";
  myMind.innerHTML = "😭";
});

const el = document.createElement("div");
el.innerHTML = "New Div";
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 30) {
    el.classList.add("newDiv");
    document.body.append(el);
  }
});
