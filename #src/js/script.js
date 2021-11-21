let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
  let delay = 500;
  let menuBody = document.querySelector(".menu__body");
  let bodyHide = document.querySelector("body");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    bodyHide.classList.toggle("_lock");
    // document.querySelector("body").addEventListener('click', menu_close)
  });
}
function menu_close() {
  let iconMenu = document.querySelector(".icon-menu");
  let menuBody = document.querySelector(".menu__body");
  let bodyHide = document.querySelector("body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  bodyHide.classList.remove("_lock");
  // document.querySelector("body").removeEventListener('click', menu_close)
}

//banner animation

let cursPos = document.querySelector(".banner");
cursPos.style.setProperty("--x", "42%");
cursPos.style.setProperty("--y", "57%");
cursPos.addEventListener("mousemove", (e) => {
  cursPos.style.setProperty("--x", e.pageX + "px");
  cursPos.style.setProperty("--y", e.pageY + "px");
});

//form animation

$("input").on("focusin", function () {
  $(this).parent().find("label").addClass("active");
});

$("input").on("focusout", function () {
  if (!this.value) {
    $(this).parent().find("label").removeClass("active");
  }
});

//eyeball animation

let eyeBall = document.querySelector(".eyeball"),
  pupil = document.querySelector(".pupil"),
  eyeArea = getCoords(eyeBall),
  pupilArea = getCoords(pupil),
  R = eyeArea.width / 2,
  r = pupilArea.width / 2,
  centerX = eyeArea.left + R,
  centerY = eyeArea.top + R;

function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  // console.log(box);

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
    width: box.width,
    height: box.height,
  };
}

console.log(eyeArea);
console.log(pupilArea);

document.addEventListener("mousemove", (e) => {
  let x = e.pageX - centerX,
    y = e.pageY - centerY,
    theta = Math.atan2(y, x),
    angle = (theta * 180) / Math.PI + 360;

  pupil.style.transform = `translateX(${R - r + "px"}) rotate(${
    angle + "deg"
  })`;
  pupil.style.transformOrigin = `${r + "px"} center`;
});

//header scroll animation

let lastScrollTop = 0,
  header = document.querySelector(".header"),
  button = document.querySelector(".our-works-home__all-works-button"),
  brandwall = document.querySelector(".brandwall__img");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-77px";
    button.style.top = "40px";

    if (brandwall != null) {
      brandwall.style.left = "-20%";
    }
  } else {
    header.style.top = "0";
    button.style.top = "117px";

    if (brandwall != null) {
      brandwall.style.left = "0";
    }
  }

  if (scrollTop > 77) {
    header.style.backgroundColor = "#f3f3f3";
  } else {
    header.style.backgroundColor = "transparent";
  }

  lastScrollTop = scrollTop;
});

//scroll-up footer

$(".flowing-scroll").on("click", function () {
  let el = $(this);
  let dest = el.attr("href"); // получаем направление
  if (dest !== undefined && dest !== "") {
    // проверяем существование
    $("html").animate(
      {
        scrollTop: $(dest).offset().top, // прокручиваем страницу к требуемому элементу
      },
      1000 // скорость прокрутки
    );
  }
  return false;
});

//
