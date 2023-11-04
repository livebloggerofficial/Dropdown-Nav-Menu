const menuBg = document.querySelector(".main-menu .menu-bg");
const menuContainerAll = document.querySelectorAll(
  ".main-menu .menu-items .menu-container"
);
const menuContentAll = document.querySelectorAll(
  ".main-menu .menu-items .content"
);

menuContainerAll.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    menuContentAll.forEach((content) => {
      content.classList.remove("active");
    });
    menuContentAll[index].classList.add("active");
    menuBg.style.width = menuContentAll[index].offsetWidth + "px";
    menuBg.style.height = menuContentAll[index].offsetHeight + "px";
  });

  item.addEventListener("mouseout", () => {
    menuContentAll.forEach((content) => {
      content.classList.remove("active");
    });
    menuBg.style.height = "0";
    menuBg.style.minWidth = "500px";
  });
});

const menuIcon = document.querySelector(".main-menu-mobile .menu-icon");
const closeIcon = document.querySelector(".main-menu-mobile .close-icon");
const mainMenuMobile = document.querySelector(".main-menu-mobile");
const mobileMenuContentAll = document.querySelectorAll(
  ".main-menu-mobile .content"
);
const mobileMenuTitleAll = document.querySelectorAll(
  ".main-menu-mobile .menu-title"
);
const menuTitleIcons = document.querySelectorAll(
  ".main-menu-mobile .menu-container span"
);

menuIcon.addEventListener("click", () => {
  mainMenuMobile.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mainMenuMobile.classList.remove("active");
  mobileMenuContentAll.forEach((c) => {
    c.classList.remove("active");
  });

  menuTitleIcons.forEach((i) => {
    i.classList.remove("active");
  });
});

mobileMenuTitleAll.forEach((title, index) => {
  title.addEventListener("click", () => {
    mobileMenuContentAll[index].classList.toggle("active");
    menuTitleIcons[index].classList.toggle("active");
  });
});
