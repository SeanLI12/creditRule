const queryString = window.location.search,
  urlParams = new URLSearchParams(queryString),
  lang = urlParams.get("lang").toUpperCase();

  let ruleTheme=urlParams.get('theme');
  if(ruleTheme!=null){
    let ctTheme=ruleTheme.toUpperCase();
    ctTheme=="DARK" ? document.querySelectorAll("link")[0].href=`./css/rules-style_${ctTheme}.css` : false;
  }

let title;
for (let i = 0; i < localization["All Terms"].length; i++) "o_SPORTSRULES" == localization["All Terms"][i]._CMSKEY && (title = localization["All Terms"][i][lang], localization["All Terms"].splice(i, 1)), "o_POPULAR" == localization["All Terms"][i]._CMSKEY && (document.getElementById("popularheader").innerHTML = localization["All Terms"][i][lang], localization["All Terms"].splice(i, 1)), "o_ALLSPORTSATOZ" == localization["All Terms"][i]._CMSKEY && (document.getElementById("atozheader").innerHTML = localization["All Terms"][i][lang], localization["All Terms"].splice(i, 1));
for (let i = 0; i < popularlist.length; i++) {
  let e = popularlist[i];
  localization["All Terms"].forEach((l, t) => {
    if (l._CMSKEY == e) {
      let a = document.createElement("div"),
        n = document.createElement("div");
      n.innerHTML = l[lang], n.addEventListener("click", () => {
        var e = l.FILE;
        let t;
        if(ruleTheme!=null){
           t = "./" + lang.toLowerCase() + "/rules.html?v=" + Date.now() + "&page=" + e + "&lang=" + lang+"&theme="+ruleTheme;
        }else{
           t = "./" + lang.toLowerCase() + "/rules.html?v=" + Date.now() + "&page=" + e + "&lang=" + lang;
        }
        
        window.location.href = t, window.parent.window.postMessage({
          topic: "changeTitle",
          data: {
            title: title,
            pageName: l[lang]
          }
        }, "*")
      }), a.appendChild(n), a.setAttribute("class", "items"), document.getElementById("popular").appendChild(a), localization["All Terms"].splice(t, 1)
    }
  })
}
for (let i = 0; i < localization["All Terms"].length; i++) {
  let l = document.createElement("div"),
    t = document.createElement("div");
  t.innerHTML = localization["All Terms"][i][lang], t.addEventListener("click", () => {
    var e = localization["All Terms"][i].FILE;
    let l;
    if(ruleTheme!=null){
     l= "./" + lang.toLowerCase() + "/rules.html?v=" + Date.now() + "&page=" + e + "&lang=" + lang+"&theme="+ruleTheme;
    }else{
     l= "./" + lang.toLowerCase() + "/rules.html?v=" + Date.now() + "&page=" + e + "&lang=" + lang;
    }
    
    window.location.href = l, window.parent.window.postMessage({
      topic: "changeTitle",
      data: {
        title: title,
        pageName: localization["All Terms"][i][lang]
      }
    }, "*")
  }), l.appendChild(t), l.setAttribute("class", "items"), document.getElementById("sportatoz").appendChild(l)
}

function postMessageToSetHeight(e) {
  window.parent.window.postMessage({
    topic: "changeContent",
    data: e
  }, "*")
}

window.onload = () => {
  postMessageToSetHeight(document.getElementById("landing").scrollHeight), window.parent.window.postMessage({
    topic: "changeTitle",
    data: {
      title: title,
      pageName: ""
    }
  }, "*")
};