const view = document.querySelector(".hirebtn1");
view.addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1UMeNnoUMy_CZBsPK9F9eAWlPkjxzfvbH/view?usp=drive_link",
    "_blank"
  );
});
const view2 = document.querySelector(".hirebtn2");
view2.addEventListener("click", () => {
  window.open("/contact", "_blank");
});

const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const navtoggle = () => {
  header.classList.toggle("active");
};
hamburger.addEventListener("click", () => navtoggle());

document.querySelectorAll(".listitems").forEach((n) =>
  n.addEventListener("click", () => {
    header.classList.remove("active");
  })
);
