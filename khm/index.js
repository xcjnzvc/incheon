const label = document.querySelectorAll(".label");
const content = document.querySelectorAll(".content");

label.forEach((el, i) => {
  const p_h = el.parentNode.clientHeight + "px";
  el.parentNode.style.height = el.clientHeight + "px";
  if (i !== 0) {
    const h = el.parentNode.children[1].clientHeight + "px";
    el.parentNode.children[1].style.height = 0;
    el.addEventListener("click", (e) => {
      const target = el.parentNode;
      console.log(target.children[1].clientHeight);
      if (target.classList[0] === "on") {
        target.classList.remove("on");
        el.parentNode.children[1].style.height = 0;
        el.parentNode.style.height = el.clientHeight + "px";
      } else {
        target.classList.add("on");
        el.parentNode.style.height = p_h;
        el.parentNode.children[1].style.height = h;
      }
    });
  }
});
