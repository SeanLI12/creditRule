toggleDropdownSub = e => {
  e.preventDefault(), e.stopPropagation();
  document.getElementById("myDropdownSub").classList.toggle("show"), window.parent.postMessage({
    topic: "closeDropdown",
    data: ""
  }, "*")
};
clickfuc = e => {
  e.preventDefault(), e.stopPropagation();
  document.getElementById("myDropdownSub").classList.remove("show");
  let t = {
    topic: "setScrollValue",
    data: getPosition(e.target.getAttribute("href").substring(1))[1]
  };
  window.parent.window.parent.window.postMessage(t, "*")
};
getPosition = e => {
  let t = document.getElementById(e),
    o = 0,
    n = 0;
  do o += t.offsetLeft, n += t.offsetTop; while (t = t.offsetParent);
  return [o, n]
};
window.onload = e => {
  let t = document.getElementById("myDropdownSub").getElementsByTagName("a");
  for (var o = 0; o < t.length; o++) t[o].addEventListener("click", clickfuc, !1);
  if (document.body.addEventListener("click", () => {
    document.getElementById("myDropdownSub").classList.remove("show")
  }, !1), document.documentElement.clientWidth < 640) {
    let n = document.getElementById("linktable").getElementsByTagName("a");
    var a = document.createElement("select");
    a.classList.add("dropdownIOS");
    for (var o = 0; o < n.length; o++) {
      let l = n[o].attributes.href.value,
        s = n[o].innerHTML,
        r = document.createElement("option");
      r.innerHTML = s, r.value = l, a.appendChild(r)
    }
    a.onchange = function (e) {
      e.preventDefault(), e.stopPropagation();
      let t = {
        topic: "setScrollValue",
        data: getPosition(e.target.value.substring(1))[1]
      };
      window.parent.window.parent.window.postMessage(t, "*"), document.getElementsByClassName("dropdownIOS")[0].selectedIndex = 0
    }, document.getElementById("myDropdownSub").appendChild(a)
  }
};
window.onmessage = function (e) {
  "closeDropdown" == e.data.topic && document.getElementById("myDropdownSub").classList.remove("show")
};