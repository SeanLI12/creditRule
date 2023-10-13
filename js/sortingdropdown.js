const queryString = window.location.search,
  urlParams = new URLSearchParams(queryString),
  lang = urlParams.get("lang").toUpperCase();
var sportsViewer = document.getElementById("sports-viewer");
for (let i = 0; i < localization["All Terms"].length; i++) "o_SPORTSRULES" == localization["All Terms"][i]._CMSKEY && (title = localization["All Terms"][i][lang], localization["All Terms"].splice(i, 1)), "o_POPULAR" == localization["All Terms"][i]._CMSKEY && localization["All Terms"].splice(i, 1), "o_ALLSPORTSATOZ" == localization["All Terms"][i]._CMSKEY && localization["All Terms"].splice(i, 1);
document.getElementById("myDropdown").innerHTML = "";
let selectContainer = document.createElement("select");
selectContainer.setAttribute("id", "selectContainer");
for (let i = 0; i < popularlist.length; i++) {
  let e = popularlist[i];
  localization["All Terms"].forEach((t, l) => {
    if (t._CMSKEY == e) {
      let n = document.createElement("option");
      n.innerHTML = t[lang], n.setAttribute("id", t.FILE), selectContainer.appendChild(n);
      let r = document.createElement("button");
      r.setAttribute("class", "menu-item"), r.setAttribute("id", t.FILE), r.innerHTML = t[lang], document.getElementById("myDropdown").appendChild(r), localization["All Terms"].splice(l, 1)
    }
  })
}
for (let i = 0; i < localization["All Terms"].length; i++) {
  document.createElement("div").innerHTML = localization["All Terms"][i][lang];
  let t = document.createElement("option");
  t.innerHTML = localization["All Terms"][i][lang], t.setAttribute("id", localization["All Terms"][i].FILE), selectContainer.appendChild(t);
  let l = document.createElement("button");
  l.setAttribute("class", "menu-item"), l.setAttribute("id", localization["All Terms"][i].FILE), l.innerHTML = localization["All Terms"][i][lang], document.getElementById("myDropdown").appendChild(l)
}
selectContainer.onchange = function (e) {
  e.preventDefault(), e.stopPropagation();
  let t = e.target.children[e.target.selectedIndex].id;
  document.getElementById("dropdown-button").innerText = document.getElementById(t).textContent, window.parent.parent.postMessage({
    topic: "changeTitle",
    data: {
      title: "",
      pageName: document.getElementById(t).textContent
    }
  }, "*");

  let rTheme=urlParams.get('theme');
  let l ;
  if(rTheme!=null){
    
     l = "./sports/" + t + ".html?v=" + Date.now()+"&theme="+rTheme;
  }else{
    l = "./sports/" + t + ".html?v=" + Date.now();
  }
  
  sportsViewer.style.height = 0, sportsViewer.src = l
}, document.getElementsByClassName("rules-dropdown")[0].appendChild(selectContainer);