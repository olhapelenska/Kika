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
}

//

//

let links = document.querySelectorAll("a"),
  cursor = document.querySelector(".cursor"),
  homeGal = document.querySelector(".our-works-home__gal"),
  worksGal = document.querySelector(".our-works__gal"),
  servicesItems = document.querySelector(".our-services__item"),
  sliderUs = document.querySelector(".slider-about-us"),
  banner = document.querySelector(".banner");

if (cursor) {
  let cursorCoords = getCoords(cursor),
    cursorRadius = cursorCoords.width / 2;

  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY - cursorRadius + "px";
    cursor.style.left = e.pageX - cursorRadius + "px";

    let f = false;

    links.forEach((el) => {
      if (
        e.pageY >= getCoords(el).top &&
        e.pageY <= getCoords(el).bottom &&
        e.pageX >= getCoords(el).left &&
        e.pageX <= getCoords(el).right
      ) {
        f = true;
        cursor.style.transform = "scale(2)";
      }

      if (sliderUs) {
        let sliderUsCoords = getCoords(sliderUs);

        if (e.pageY >= sliderUsCoords.top && e.pageY <= sliderUsCoords.bottom) {
          cursor.style.transform = "scale(0)";
        }
      } else if (homeGal || servicesItems) {
        let homeGalCoords = getCoords(homeGal),
          servicesItemsCoords = getCoords(servicesItems);

        if (
          (e.pageY >= homeGalCoords.top &&
            e.pageY <= homeGalCoords.bottom &&
            e.pageX >= homeGalCoords.left &&
            e.pageX <= homeGalCoords.right) ||
          (e.pageY >= servicesItemsCoords.top &&
            e.pageY <= servicesItemsCoords.bottom &&
            e.pageX >= servicesItemsCoords.left &&
            e.pageX <= servicesItemsCoords.right)
        ) {
          cursor.style.transform = "scale(0)";
        }
      } else if (worksGal) {
        let worksGalCoords = getCoords(worksGal);

        if (
          e.pageY >= worksGalCoords.top &&
          e.pageY <= worksGalCoords.bottom &&
          e.pageX >= worksGalCoords.left &&
          e.pageX <= worksGalCoords.right
        ) {
          cursor.style.transform = "scale(0)";
        }
      } else if (servicesItems) {
        //   servicesItems.forEach(function (el) {
        //     if (
        //       e.pageY >= getCoords(el).top &&
        //       e.pageY <= getCoords(el).bottom &&
        //       e.pageX >= getCoords(el).left &&
        //       e.pageX <= getCoords(el).right
        //     ) {
        //       cursor.style.transform = "scale(0)";
        //     } else {
        //       cursor.style.transform = "none";
        //     }
        //   });
        //   let servicesItemsCoords = getCoords(servicesItems);
        //   console.log(servicesItemsCoords);
        //   if (
        //     e.pageY >= servicesItemsCoords.top &&
        //     e.pageY <= servicesItemsCoords.bottom &&
        //     e.pageX >= servicesItemsCoords.left &&
        //     e.pageX <= servicesItemsCoords.right
        //   ) {
        //     cursor.style.transform = "scale(0)";
        //   } else {
        //     cursor.style.transform = "none";
        //   }
      }
    });
    if (!f) {
      cursor.style.transform = "none";
    }
  });
}

// let cursor = document.querySelector(".cursor"),
//   link = [...document.querySelectorAll("a")],
//   homeGal = document.querySelector(".our-works-home__gal"),
//   worksGal = document.querySelector(".our-works__gal"),
//   servicesItems = document.querySelector(".our-services__item"),
//   sliderUs = document.querySelector(".slider-about-us"),
//   banner = document.querySelector(".banner");

// if (cursor) {
//   let linkCoords = link.map((el) => getCoords(el)),
//     cursorCoords = getCoords(cursor),
//     cursorRadius = cursorCoords.width / 2;

//   document.addEventListener("mousemove", (e) => {
//     cursor.style.top = e.pageY - cursorRadius + "px";
//     cursor.style.left = e.pageX - cursorRadius + "px";
//     // linkCoords.forEach((el) => {

//     if (
//       e.pageY >= linkCoords[0].top &&
//       e.pageY <= linkCoords[0].bottom &&
//       e.pageX >= linkCoords[0].left &&
//       e.pageX <= linkCoords[0].right
//     ) {
//       cursor.style.transform = "scale(2)";
//     } else if (sliderUs) {
//       let sliderUsCoords = getCoords(sliderUs);

//       if (e.pageY >= sliderUsCoords.top && e.pageY <= sliderUsCoords.bottom) {
//         cursor.style.transform = "scale(0)";
//       } else {
//         cursor.style.transform = "none";
//       }
//     } else if (homeGal) {
//       let homeGalCoords = getCoords(homeGal);
//       if (
//         e.pageY >= homeGalCoords.top &&
//         e.pageY <= homeGalCoords.bottom &&
//         e.pageX >= homeGalCoords.left &&
//         e.pageX <= homeGalCoords.right
//       ) {
//         cursor.style.transform = "scale(0)";
//       } else {
//         cursor.style.transform = "none";
//       }
//     } else if (worksGal) {
//       let worksGalCoords = getCoords(worksGal);

//       if (
//         e.pageY >= worksGalCoords.top &&
//         e.pageY <= worksGalCoords.bottom &&
//         e.pageX >= worksGalCoords.left &&
//         e.pageX <= worksGalCoords.right
//       ) {
//         cursor.style.transform = "scale(0)";
//       } else {
//         cursor.style.transform = "none";
//       }
//     } else if (servicesItems) {
//       let servicesItemsCoords = getCoords(servicesItems);

//       if (
//         e.pageY >= servicesItemsCoords.top &&
//         e.pageY <= servicesItemsCoords.bottom &&
//         e.pageX >= servicesItemsCoords.left &&
//         e.pageX <= servicesItemsCoords.right
//       ) {
//         cursor.style.transform = "scale(0)";
//       } else {
//         cursor.style.transform = "none";
//       }
//     } else {
//       cursor.style.transform = "none";
//     }
//   });
// }

function changeCursor(block, cursorWrapper, cursorInner) {
  let cursorWrapperCoords = getCoords(cursorWrapper),
    cursorWrapperRadius = cursorWrapperCoords.width / 2;
  if (cursorWrapper) {
    document.addEventListener("mousemove", (e) => {
      // let y = e.clientY + "px",
      //   x = e.clientX + "px";
      // cursorWrapper.style.transform = `translate3d(${x}, ${y}, 0px)`;

      cursorWrapper.style.top = e.clientY - cursorWrapperRadius + "px";
      cursorWrapper.style.left = e.clientX - cursorWrapperRadius + "px";

      // let sliderUsCoords = getCoords(sliderUs);
      let blockCoords = getCoords(block),
        headerCoords = getCoords(header);

      if (
        e.pageY >= blockCoords.top &&
        e.pageY <= blockCoords.bottom &&
        e.pageX >= blockCoords.left &&
        e.pageX <= blockCoords.right
        // &&
        // e.pageY <= headerCoords.top &&
        // e.pageY >= headerCoords.bottom &&
        // e.pageX <= headerCoords.left &&
        // e.pageX >= headerCoords.right
      ) {
        cursorInner.style.transform = "rotate(0deg) scale(1, 1)";
        cursorInner.style.opacity = "1";
      } else {
        cursorInner.style.transform = "rotate(90deg) scale(0, 0)";
        cursorInner.style.opacity = "0";
      }
    });
  }
}

let lookWrap = document.querySelector(".look-wrap"),
  look = document.querySelector(".look");

if (homeGal) {
  changeCursor(homeGal, lookWrap, look);
}
if (worksGal) {
  changeCursor(worksGal, lookWrap, look);
}

let findOutWrap = document.querySelector(".find-out-wrap"),
  findOut = document.querySelector(".find-out");
if (servicesItems) {
  changeCursor(servicesItems, findOutWrap, findOut);
}

let dragWrap = document.querySelector(".drag-wrap"),
  drag = document.querySelector(".drag");

if (sliderUs) {
  changeCursor(sliderUs, dragWrap, drag);
}

//banner animation

if (banner) {
  let bannerCords = banner.getBoundingClientRect();

  banner.style.setProperty("--x", "42%");
  banner.style.setProperty("--y", "57%");
  banner.style.setProperty("--r", "150px");
  banner.addEventListener("mousemove", (e) => {
    banner.style.setProperty("--x", e.pageX + "px");
    banner.style.setProperty("--y", e.pageY + "px");
  });

  document.addEventListener("mousemove", (e) => {
    if (bannerCords.height < e.pageY) {
      banner.style.setProperty("--r", "0px");
    } else {
      banner.style.setProperty("--r", "150px");
    }
  });
}

// form animation

$("input").on("focusin", function () {
  $(this).parent().find("label").addClass("active");
});

$("input").on("focusout", function () {
  if (!this.value) {
    $(this).parent().find("label").removeClass("active");
  }
});

$("textarea").on("focusin", function () {
  $(this).parent().find(".label").addClass("active");
});

$("textarea").on("focusout", function () {
  if (!this.value) {
    $(this).parent().find(".label").removeClass("active");
  }
});

function textAreaAdjust(element) {
  element.style.height = "0px";
  element.style.height = 0 + element.scrollHeight + "px";
}

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

let lastScrollTop = 0,
  header = document.querySelector(".header"),
  headerEyeLogo = document.querySelector(".header__eye-logo"),
  headerLogo = document.querySelector(".header__logo"),
  headerBurger = document.querySelectorAll(".banner-work .header__burger span"),
  homeButton = document.querySelector(".our-works-home__all-works-button"),
  servicesButton = document.querySelector(".services__order-service-button"),
  brandwall = document.querySelector(".brandwall__img"),
  clientsBrandwall = document.querySelector(".clients__brandwall"),
  // clients = document.querySelector(".clients"),
  rowTop = document.querySelector(".gallery-work__row-top"),
  rowBottom = document.querySelector(".gallery-work__row-bottom"),
  bannerLineHome = document.querySelector(".icon-line-banner-home"),
  bannerLineWorkYellow = document.querySelector(".icon-y-line-works-banner"),
  bannerLineWorkRed = document.querySelector(".icon-r-line-works-banner"),
  bannerLineServices = document.querySelector(".icon-services-banner-line"),
  headerButtonWork = document.querySelector(".banner-work .header__btn"),
  galleryWork = document.querySelector(".gallery-work"),
  footerBlock = document.querySelector(".footer"),
  footerString = document.querySelector(".footer__string"),
  headerMask = document.querySelector(".header__mask"),
  media = window.matchMedia("(max-width: 768px)");

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  if (brandwall) {
    let brandwallCoords = brandwall.getBoundingClientRect();
    if (
      brandwallCoords.top <= innerHeight &&
      brandwallCoords.top >= -innerHeight
    ) {
      brandwall.style.transform =
        "translateX(" + (brandwallCoords.top - innerHeight) / 2 + "px)";
    }
  }

  if (footerBlock) {
    let footerCoords = footerBlock.getBoundingClientRect();
    if (footerCoords.top <= innerHeight) {
      footerString.style.transform =
        "translateX(" + (footerCoords.top - innerHeight) / 2 + "px)";
    }
  }

  if (galleryWork) {
    let galleryWorkCords = galleryWork.getBoundingClientRect();

    if (
      galleryWorkCords.top <= innerHeight &&
      galleryWorkCords.top >= -innerHeight
    ) {
      if (rowTop) {
        rowTop.style.transform =
          "translateX(" + (galleryWorkCords.top - innerHeight) / 2 + "px)";
      }

      if (rowBottom) {
        rowBottom.style.transform =
          "translateX(" + -(galleryWorkCords.top - innerHeight) / 2 + "px)";
      }
    }
  }

  if (clientsBrandwall) {
    let clientsBrandwallCords = clientsBrandwall.getBoundingClientRect();

    if (
      clientsBrandwallCords.top <= innerHeight &&
      clientsBrandwallCords.top >= -innerHeight
    ) {
      clientsBrandwall.style.transform =
        "translateX(" + (clientsBrandwall.top - innerHeight) / 2 + "px)";
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
      bannerLineWorkYellow.style.bottom = "-76px";
    }

    if (bannerLineWorkRed) {
      bannerLineWorkRed.style.bottom = "-76px";
    }

    if (bannerLineServices) {
      bannerLineServices.style.bottom = "-205px";
    }
  } else {
    header.style.top = "0";

    // if (footerBlock) {
    //   footerString.style.transform = "translateX(0)";
    // }

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
      if (media.matches) {
        bannerLineWorkYellow.style.bottom = "-30px";
      } else {
        bannerLineWorkYellow.style.bottom = "-91px";
      }
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
  }

  if (scrollTop > 77) {
    header.style.backgroundColor = "#f3f3f3";
    header.style.color = "#131612";
    header.style.fill = "#131612";
    // headerLogo.style.display = "none";
    // headerEyeLogo.style.display = "block";
    // headerLogo.style.opacity = "0";
    // headerEyeLogo.style.opacity = "1";
    headerLogo.style.transform = "translateY(-50%) scale(0)";
    headerEyeLogo.style.transform = "translateY(-50%) scale(1)";

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
    // headerLogo.style.display = "block";
    // headerEyeLogo.style.display = "none";
    // headerLogo.style.opacity = "1";
    // headerEyeLogo.style.opacity = "0";
    headerLogo.style.transform = "translateY(-50%) scale(1)";
    headerEyeLogo.style.transform = "translateY(-50%) scale(0)";

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

//slider

$(document).ready(function () {
  if ($(".slider").length) {
    $(".slider").slick({
      arrows: false,
      adaptiveHeight: true,
      slidesToShow: 7,
      slidesToScroll: 4,
      speed: 1000,
      easing: "ease",
      infinite: true,
      initialSlide: 0,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }
});

$(function () {
  $("a").each(function () {
    if ($(this).prop("href") == window.location.href) {
      $(this).addClass("active");
      $(this).parents("li").addClass("active");
    }
  });
});

const counters = document.querySelectorAll(".value");
const speed = 500;
if (counters) {
  counters.forEach((counter) => {
    const animate = () => {
      const value = +counter.getAttribute("akhi");
      const data = +counter.innerText;

      const time = value / speed;
      if (data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      } else {
        counter.innerText = value;
      }
    };

    animate();
  });
}

$(document).ready(function () {
  $.each($(".checkbox"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });
  $(document).on("click", ".checkbox", function (event) {
    if ($(this).hasClass("active")) {
      $(this).find("input").prop("checked", false);
    } else {
      $(this).find("input").prop("checked", true);
    }
    $(this).toggleClass("active");

    return false;
  });
});

document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball() {
  let eye = document.querySelectorAll(".eye");

  eye.forEach(function (eye) {
    let x = getCoords(eye).left + eye.clientWidth / 2;
    let y = getCoords(eye).top + eye.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = "rotate(" + rot + "deg)";
  });
}
