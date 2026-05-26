const popup = document.querySelector("#popup");
const popupCloseBtn = popup.querySelector("button");
const agree = document.querySelector("#agree");

if (document.cookie.includes("popup=안볼래")) {
  popup.close();
} else {
  popup.showModal();
}

popupCloseBtn.addEventListener("click", () => {
  popup.close();
  if (agree.checked) {
    createCookie("popup", "안볼래", 1);
  } else {
    createCookie("popup", "안볼래", -1);
  }
});

function createCookie(name, value, expireDays) {
  let today = new Date();
  today.setDate(today.getDate() + expireDays);
  const currentPath = window.location.pathname.substring(
    0,
    window.location.pathname.lastIndexOf("/") + 1,
  );
  document.cookie = `${name}=${value}; expires=${today.toUTCString()}; path=${currentPath}`;
}
