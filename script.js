const exp = document.getElementById("experience");
const edu = document.getElementById("education");

function education() {
  edu.style.display = "block";
  exp.style.display = "none";
}

function experience() {
  edu.style.display = "none";
  exp.style.display = "block";
}

var typed = new Typed(".element", {
  strings: ["Frontend Developer", "Web Developer "],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

const skill = document.getElementById("skill");
const about = document.getElementById("about");
const project = document.getElementById("project");
const contact = document.getElementById("contact");

skill.addEventListener("click", function () {
  document.getElementById("skill-tab").style.display = "block";
  document
    .querySelectorAll("#about-tab, #project-tab, #contact-tab")
    .forEach((element) => {
      element.style.display = "none";
    });
});

about.addEventListener("click", function () {
  document.getElementById("about-tab").style.display = "block";
  document
    .querySelectorAll("#skill-tab, #project-tab, #contact-tab")
    .forEach((element) => {
      element.style.display = "none";
    });
});

project.addEventListener("click", function () {
  document.getElementById("project-tab").style.display = "block";
  document
    .querySelectorAll("#skill-tab, #about-tab, #contact-tab")
    .forEach((element) => {
      element.style.display = "none";
    });
});
contact.addEventListener("click", function () {
  document.getElementById("contact-tab").style.display = "block";
  document
    .querySelectorAll("#skill-tab, #project-tab, #about-tab")
    .forEach((element) => {
      element.style.display = "none";
    });
});

const msg = document.getElementById("msg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.innerHTML = "Message sent successfully";
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
  contactForm.reset();
});

let btn = document.getElementsByClassName("btn");
let active = document.getElementsByClassName("active");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";
  });
}
