let iconMenu = document.querySelector(".icon-menu");
if (iconMenu) {
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

if (cursPos) {
  cursPos.style.setProperty("--x", "42%");
  cursPos.style.setProperty("--y", "57%");
  cursPos.addEventListener("mousemove", (e) => {
    cursPos.style.setProperty("--x", e.pageX + "px");
    cursPos.style.setProperty("--y", e.pageY + "px");
  });
}

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

let eyeBall = [...document.querySelectorAll(".eyeball")],
  pupil = [...document.querySelectorAll(".pupil")],
  eyeArea = eyeBall.map((el) => getCoords(el)),
  pupilArea = pupil.map((el) => getCoords(el)),
  R = eyeArea.map((el) => el.width / 2),
  r = pupilArea.map((el) => el.width / 2),
  centerX = eyeArea.map((el, index) => el.left + R[index]),
  centerY = eyeArea.map((el, index) => el.top + R[index]);

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

console.log(centerX);
console.log(eyeArea);
console.log(pupilArea);

document.addEventListener("mousemove", (e) => {
  let x = centerX.map((el) => e.pageX - el),
    y = centerY.map((el) => e.pageY - el),
    theta = x.map((el, index) => Math.atan2(y[index], el)),
    angle = theta.map((el) => (el * 180) / Math.PI + 360);
  console.log(x);

  pupil.forEach(
    (el, index) =>
      (el.style.transform = `translateX(${R[index] - r[index] + "px"}) rotate(${
        angle[index] + "deg"
      })`)
  );
  pupil.forEach(
    (el, index) => (el.style.transformOrigin = `${r[index] + "px"} center`)
  );
});

//header scroll animation

let lastScrollTop = 0,
  header = document.querySelector(".header"),
  button = document.querySelector(".our-works-home__all-works-button"),
  brandwall = document.querySelector(".brandwall__img"),
  clientsBrandwall = document.querySelector(".clients__brandwall"),
  rowTop = document.querySelector(".gallery-work__row-top"),
  rowBottom = document.querySelector(".gallery-work__row-bottom");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-77px";

    if (button) {
      button.style.top = "40px";
    }

    if (brandwall) {
      brandwall.style.left = "-20%";
    }

    if (clientsBrandwall) {
      clientsBrandwall.style.transform = "translateX(-20%)";
    }

    if (rowTop) {
      rowTop.style.transform = "translateX(-20%)";
    }

    if (rowBottom) {
      rowBottom.style.transform = "translateX(20%)";
    }
  } else {
    header.style.top = "0";

    if (button) {
      button.style.top = "117px";
    }

    if (brandwall) {
      brandwall.style.left = "0";
    }

    if (clientsBrandwall) {
      clientsBrandwall.style.transform = "translateX(0)";
    }

    if (rowTop) {
      rowTop.style.transform = "translateX(0)";
    }

    if (rowBottom) {
      rowBottom.style.transform = "translateX(0)";
    }
  }

  if (scrollTop > 77) {
    header.style.backgroundColor = "#f3f3f3";
    header.style.color = "#000";
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
