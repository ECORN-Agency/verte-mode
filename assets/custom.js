var navclick = document.getElementsByClassName("menu-drawer-container");
for (var i = 0; i < navclick.length; i++) {
 navclick[i].onclick = function() {
    document.getElementById('Details-menu-drawer-container').classList.toggle("menu-opening");
  }
}
