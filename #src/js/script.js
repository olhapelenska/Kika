function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("html").classList.add("_webp");
  } else {
    document.querySelector("html").classList.add("_no-webp");
  }
});

//burger

let iconMenu = document.querySelector(".header__burger");
if (iconMenu) {
  let delay = 500;
  let menuBody = document.querySelector(".header__nav");
  let bodyHide = document.querySelector("body");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    bodyHide.classList.toggle("_lock");
    header.classList.toggle("_active");
    // document.querySelector("body").addEventListener('click', menu_close)
  });
}
function menu_close() {
  let iconMenu = document.querySelector(".header__burger");
  let menuBody = document.querySelector(".header__nav");
  let bodyHide = document.querySelector("body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
  bodyHide.classList.remove("_lock");
  header.classList.remove("_active");

  // document.querySelector("body").removeEventListener('click', menu_close)
}

//

//
let cursor = document.querySelector(".cursor"),
  link = document.querySelector("a"),
  homeGal = document.querySelector(".our-works-home__gal"),
  servicesTable = document.querySelector(".services__table"),
  worksGal = document.querySelector(".our-works__gal"),
  sliderUs = document.querySelector(".slider-about-us");

// console.log(linkCoords);
if (cursor) {
  let linkCoords = getCoords(link),
    cursorCoords = getCoords(cursor),
    cursorRadius = cursorCoords.width / 2;

  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY - cursorRadius + "px";
    cursor.style.left = e.pageX - cursorRadius + "px";

    if (
      e.pageY >= linkCoords.top &&
      e.pageY <= linkCoords.bottom &&
      e.pageX >= linkCoords.left &&
      e.pageX <= linkCoords.right
    ) {
      cursor.style.transform = "scale(2)";
    } else {
      cursor.style.transform = "none";
    }

    if (sliderUs) {
      let sliderUsCoords = getCoords(sliderUs);

      if (e.pageY >= sliderUsCoords.top && e.pageY <= sliderUsCoords.bottom) {
        cursor.style.transform = "scale(0)";
      } else {
        cursor.style.transform = "none";
      }
    }

    if (homeGal) {
      let homeGalCoords = getCoords(homeGal);

      if (
        e.pageY >= homeGalCoords.top &&
        e.pageY <= homeGalCoords.bottom &&
        e.pageX >= homeGalCoords.left &&
        e.pageX <= homeGalCoords.right
      ) {
        cursor.style.transform = "scale(0)";
      } else {
        cursor.style.transform = "none";
      }
    }
    if (worksGal) {
      let worksGalCoords = getCoords(worksGal);

      if (
        e.pageY >= worksGalCoords.top &&
        e.pageY <= worksGalCoords.bottom &&
        e.pageX >= worksGalCoords.left &&
        e.pageX <= worksGalCoords.right
      ) {
        cursor.style.transform = "scale(0)";
      } else {
        cursor.style.transform = "none";
      }
    }

    if (servicesTable) {
      let servicesTableCoords = getCoords(servicesTable);

      if (
        e.pageY >= servicesTableCoords.top &&
        e.pageY <= servicesTableCoords.bottom &&
        e.pageX >= servicesTableCoords.left &&
        e.pageX <= servicesTableCoords.right
      ) {
        cursor.style.transform = "scale(0)";
      } else {
        cursor.style.transform = "none";
      }
    }
  });
}

function changeCursor(block) {
  let blockCoords = getCoords(block),
    eCursor = document.querySelector(".e-cursor"),
    eCursorDrag = document.querySelector(".e-cursorDrag");

  if (eCursor) {
    document.addEventListener("mousemove", (e) => {
      let y = e.clientY + "px",
        x = e.clientX + "px";
      eCursor.style.transform = `translate3d(${x}, ${y}, 0px)`;

      if (
        e.pageY >= blockCoords.top &&
        e.pageY <= blockCoords.bottom &&
        e.pageX >= blockCoords.left &&
        e.pageX <= blockCoords.right
      ) {
        eCursorDrag.style.transform = "rotate(0deg) scale(1, 1)";
        eCursorDrag.style.opacity = "1";
      } else {
        eCursorDrag.style.transform = "rotate(90deg) scale(0, 0)";
        eCursorDrag.style.opacity = "0";
      }
    });
  }
}

if (homeGal) {
  let homeGalCoords = getCoords(homeGal);
  changeCursor(homeGal);
}

if (worksGal) {
  let worksGalCoords = getCoords(worksGal);
  changeCursor(worksGal);
}

if (sliderUs) {
  let sliderUsCoords = getCoords(sliderUs);
  changeCursor(sliderUs);
}

if (servicesTable) {
  let servicesTableCoords = getCoords(servicesTable);
  changeCursor(servicesTable);
}

//banner animation

let cursPos = document.querySelector(".banner");

if (cursPos) {
  let bannerCords = cursPos.getBoundingClientRect();

  cursPos.style.setProperty("--x", "42%");
  cursPos.style.setProperty("--y", "57%");
  cursPos.style.setProperty("--r", "150px");
  cursPos.addEventListener("mousemove", (e) => {
    cursPos.style.setProperty("--x", e.pageX + "px");
    cursPos.style.setProperty("--y", e.pageY + "px");
  });

  document.addEventListener("mousemove", (e) => {
    if (bannerCords.height < e.pageY) {
      cursPos.style.setProperty("--r", "0px");
    } else {
      cursPos.style.setProperty("--r", "150px");
    }
  });
}

//

// let galItem = document.querySelector(".our-works-home__gal-item"),
//   galImg = document.querySelector(".our-works__gal-img");

// if (galItem) {
//   galItem.addEventListener("mouseover", (e) => {
//     galImg.style.transform = "scale(1.1)";
//   });
// }

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

  return {
    top: box.top + window.pageYOffset,
    right: box.right,
    bottom: box.bottom + window.pageYOffset,
    left: box.left,
    width: box.width,
    height: box.height,
  };
}

document.addEventListener("mousemove", (e) => {
  let x = centerX.map((el) => e.pageX - el),
    y = centerY.map((el) => e.pageY - el),
    theta = x.map((el, index) => Math.atan2(y[index], el)),
    angle = theta.map((el) => (el * 180) / Math.PI + 360);

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
  headerBurger = document.querySelectorAll(".banner-work .header__burger span"),
  homeButton = document.querySelector(".our-works-home__all-works-button"),
  servicesButton = document.querySelector(".services__order-service-button"),
  brandwall = document.querySelector(".brandwall__img"),
  clientsBrandwall = document.querySelector(".clients__brandwall"),
  clients = document.querySelector(".clients"),
  rowTop = document.querySelector(".gallery-work__row-top"),
  rowBottom = document.querySelector(".gallery-work__row-bottom"),
  bannerLineHome = document.querySelector(".icon-line-banner-home"),
  bannerLineWorkYellow = document.querySelector(".icon-y-line-works-banner"),
  bannerLineWorkRed = document.querySelector(".icon-r-line-works-banner"),
  bannerLineServices = document.querySelector(".icon-services-banner-line"),
  headerButtonWork = document.querySelector(".banner-work .header__btn"),
  galleryWork = document.querySelector(".gallery-work"),
  footerBlock = document.querySelector(".footer"),
  footerString = document.querySelector(".footer__string");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  if (brandwall) {
    // let brandwallCords = brandwall.getBoundingClientRect();
    // console.log(brandwallCords);
    // if (
    //   $(brandwall).offset().top <=
    //   $(window).scrollTop() + $(window).height()
    // ) {
    //   // console.log("el = ", $(brandwall).offset().top);
    //   // console.log("window = ", $(window).scrollTop());
    //   brandwall.style.transform = "translateX(-20%)";
    //   console.log("down");
    // } else if (scrollTop < lastScrollTop) {
    //   brandwall.style.transform = "translateX(0)";
    //   console.log("up");
    // }
    let scrollTop = $(window).scrollTop(),
      viewportBottom = scrollTop + $(window).height();
    console.log("jljk");
    console.log("offset = ", $(brandwall).offset().top);
    console.log("outerheight = ", $(brandwall).outerHeight);
    console.log("scrolltop = ", scrollTop);
    if (
      $(brandwall).offset().top + $(brandwall).outerHeight() > scrollTop &&
      $(brandwall).offset().top < viewportBottom
    ) {
      if (scrollTop < lastScrollTop) {
        brandwall.style.transform = "translateX(-20%)";
        console.log("down");
      } else {
        brandwall.style.transform = "translateX(0)";
        console.log("up");
      }
    }
  }

  if (footerBlock) {
    let footerCoords = footerBlock.getBoundingClientRect();
    if (footerCoords.top <= footerCoords.height) {
      footerString.style.transform = "translateX(-10%)";
    }
  }

  if (galleryWork) {
    let galleryWorkCords = galleryWork.getBoundingClientRect();
    // console.log(galleryWorkCords);

    if (galleryWorkCords.top <= galleryWorkCords.height) {
      if (rowTop) {
        rowTop.style.transform = "translateX(-20%)";
      }

      if (rowBottom) {
        rowBottom.style.transform = "translateX(20%)";
      }
    }
  }

  if (clientsBrandwall) {
    let clientsCords = clients.getBoundingClientRect();
    if (clientsCords.top <= clientsCords.height) {
      clientsBrandwall.style.transform = "translateX(-20%)";
    }
  }

  if (scrollTop > lastScrollTop) {
    header.style.top = "-77px";

    if (homeButton) {
      homeButton.style.top = "40px";
    }

    if (servicesButton) {
      servicesButton.style.top = "40px";
    }

    if (bannerLineHome) {
      bannerLineHome.style.bottom = "-290px";
    }

    if (bannerLineWorkYellow) {
      bannerLineWorkYellow.style.bottom = "-130px";
    }

    if (bannerLineWorkRed) {
      bannerLineWorkRed.style.bottom = "-130px";
    }

    if (bannerLineServices) {
      bannerLineServices.style.bottom = "-205px";
    }
  } else {
    header.style.top = "0";

    if (footerBlock) {
      footerString.style.transform = "translateX(0)";
    }

    if (homeButton) {
      homeButton.style.top = "117px";
    }

    if (servicesButton) {
      servicesButton.style.top = "117px";
    }

    if (bannerLineHome) {
      bannerLineHome.style.bottom = "0";
    }

    if (bannerLineWorkYellow) {
      bannerLineWorkYellow.style.bottom = "-91px";
    }

    if (bannerLineWorkRed) {
      bannerLineWorkRed.style.bottom = "8px";
    }

    if (bannerLineServices) {
      bannerLineServices.style.bottom = "0px";
    }

    // if (brandwall) {
    //   console.log("ggsdgw");
    // }

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
    header.style.color = "#131612";
    header.style.fill = "#131612";

    if (headerButtonWork) {
      headerButtonWork.style.backgroundColor = "#131612";
      headerButtonWork.style.color = "#fff";
    }

    if (headerBurger) {
      headerBurger.forEach((el) => {
        el.style.backgroundColor = "#131612";
      });
    }
  } else {
    header.style.backgroundColor = "transparent";
    header.style.color = "inherit";
    header.style.fill = "inherit";

    if (headerButtonWork) {
      headerButtonWork.style.backgroundColor = "#fff";
      headerButtonWork.style.color = "#131612";
    }

    if (headerBurger) {
      headerBurger.forEach((el) => {
        el.style.backgroundColor = "#fff";
      });
    }
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

$(".move-area").mousemove(function (event) {
  var eye = $(".eye");
  var x = eye.offset().left + eye.width() / 2;
  var y = eye.offset().top + eye.height() / 2;
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 180;
  eye.css({
    "-webkit-transform": "rotate(" + rot + "deg)",
    "-moz-transform": "rotate(" + rot + "deg)",
    "-ms-transform": "rotate(" + rot + "deg)",
    transform: "rotate(" + rot + "deg)",
  });
});

//slider

$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1000,
    easing: "ease",
    infinite: true,
    initialSlide: 0,
    pauseOnHover: false,
  });
});
