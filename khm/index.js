const label = document.querySelectorAll(".label");
// const content = document.querySelectorAll(".content");

label.forEach(async (el, i) => {
  const p_h = el.parentNode.clientHeight + "px";
  el.parentNode.style.height = el.clientHeight + "px";
  const target = el.parentNode;
  if (i !== 0) {
    const h = target.children[1].clientHeight + "px";
    target.children[1].style.height = 0;
    el.addEventListener("click", async (e) => {
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
              if (!target.classList.value.includes("on")) reject();
              setTimeout(() => {
                result += text;
                stremTarget.innerHTML = result;
                resolve();
              }, 100);
            });
          for (let text of streamText) {
            await stream(text);
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

inputs.map((el) => {
  
});
