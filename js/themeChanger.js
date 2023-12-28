let querySt = window.location.search;
let urlPas = new URLSearchParams(querySt);
let rTheme=urlPas.get('theme');
let page=urlPas.get('page');

console.log("Theme changer test.")

if(page!=null){
  if(rTheme!=null){
    let ctTheme=rTheme.toUpperCase();
    console.log("Page !== null = " + ctTheme);
    ctTheme=="DARK" ? document.querySelectorAll("link")[0].href=`../css/rules-style_${ctTheme}.css` : false;
  }
}else{
  if(rTheme!=null){
    let ctTheme=rTheme.toUpperCase();
    console.log("Page === null = " + ctTheme);
    ctTheme=="DARK" ? document.querySelectorAll("link")[0].href=`../../css/rules-style_${ctTheme}.css` : false;
  }

}


