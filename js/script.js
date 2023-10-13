var distEvent,
  sportsViewer = document.getElementById('sports-viewer');
function toggleDropdown(e) {
  e.preventDefault(),
    e.stopPropagation(),
    document.getElementById('myDropdown').classList.toggle('show'),
    document.getElementById('sports-viewer').contentWindow.postMessage({ topic: 'closeDropdown', data: '' }, '*');
}
function getParameterByName(e, t = window.location.href) {
  var o = RegExp(
    '[?&]' + (e = e.replace(/[\[\]]/g, '\\$&')) + '(=([^&#]*)|&|#|$)'
  ).exec(t);
  return o ? (o[2] ? decodeURIComponent(o[2].replace(/\+/g, ' ')) : '') : null;
}

let theme= getParameterByName('theme');


function postMessageTo(e) {
  void 0 != e &&
    'setScrollValue' == e.topic &&
    ((e.containerheight = sportsViewer.contentWindow.innerHeight + 32),
    window.parent.window.postMessage(e, '*')),
    distEvent && distEvent.source.postMessage(e, distEvent.origin);
}
function postMessageToSetHeight() {
  postMessageTo({ topic: 'setHeight', data: document.body.scrollHeight });
}
function postMessageToChangeContent(e) {
  (e.contentDocument || e.contentWindow.document).querySelectorAll(
    '.maindiv'
  )[0].offsetHeight > 0
    ? window.parent.window.postMessage(
        {
          topic: 'changeContent',
          data:
            sportsViewer.contentDocument.querySelectorAll('.maindiv')[0]
              .offsetHeight + 200
        },
        '*'
      )
    : window.parent.window.postMessage(
        {
          topic: 'changeContent',
          data:
            sportsViewer.contentDocument.querySelectorAll('body')[0]
              .offsetHeight + 200
        },
        '*'
      ),
    postMessageTo({ topic: 'changeContent', data: null });
}
function postMessageToSetScrollValue(e) {
  postMessageTo({ topic: 'setScrollValue', data: e });
}
function updateIFrameHeight(e) {
  let t = e.contentDocument || e.contentWindow.document;
  e.style.height = t.scrollHeight + 'px';
}
(clickFrame = () => {
  document.getElementById('myDropdownSub').classList.remove('show'), a;
  for (
    var e, t = document.getElementsByClassName('dropdown-content'), e = 0;
    e < t.length;
    e++
  ) {
    var o = t[e];
    o.classList.contains('show') && o.classList.remove('show');
  }
}),
  (window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
      if (e.target.matches('.menu-item')) {
        var t,
          o = e.target.id;
        document.getElementById(
          'dropdown-button'
        ).innerText = document.getElementById(o).innerText;
        for (
          var n = 0;
          n < document.getElementById('selectContainer').children.length;
          n++
        )
          document.getElementById('selectContainer').children[n].innerText ==
            document.getElementById(o).innerText &&
            (document.getElementById('selectContainer').selectedIndex = n);
        window.parent.window.postMessage(
          {
            topic: 'changeTitle',
            data: { title: '', pageName: document.getElementById(o).innerText }
          },
          '*'
        );
        let s;

        if(theme!=null){
          s = './sports/' + e.target.id + '.html?v=' + Date.now()+"&theme="+theme;
        }else{
          s = './sports/' + e.target.id + '.html?v=' + Date.now();
        }

        
     
        (sportsViewer.style.height = 0), (sportsViewer.src = s);
      }
      var r = document.getElementsByClassName('dropdown-content');
      for (t = 0; t < r.length; t++) {
        var i = r[t];
        i.classList.contains('show') && i.classList.remove('show');
      }
    }
  }),
  sportsViewer.scrolling = 'no';
  sportsViewer.onload = function(e) {
    updateIFrameHeight(sportsViewer);
      postMessageToChangeContent(sportsViewer);
      sportsViewer.contentDocument.onclick = function(e) {
        document.getElementById('myDropdown').classList.remove('show');
      };
      sportsViewer.src.includes('/sports/football.html') &&
        sportsViewer.contentDocument.getElementById('linktable').addEventListener('click', function(e) {
            if (
              (e.preventDefault(), e.stopPropagation(), e.target.matches('a'))
            ) {
              var t = e.target.getAttribute('href').substring(1),
                o = sportsViewer.contentDocument.querySelector(
                  'a[id="' + t + '"]'
                );
              if (void 0 == o)
                var o = sportsViewer.contentDocument.querySelector(
                  'div[id="' + t + '"]'
                );
              postMessageToSetScrollValue(o.offsetTop + 8);
            }
          });
  };
  window.onmessage = function(e) {
    if (
      ('closeDropdown' == e.data.topic &&
        document.getElementById('myDropdown').classList.remove('show'),
      'thmUpdate' == e.data.topic)
    ) {
      var t = e.data.data;
      console.log(t);
    }
    'scroll' === e.data && console.log(e.data);
      'initEvent' === e.data && (distEvent = e);
      'getHeight' === e.data &&
        (updateIFrameHeight(sportsViewer), postMessageToSetHeight());
  };
const childWindow = document.getElementById('sports-viewer').contentWindow;
window.addEventListener('message', e => {
  if (e.source !== childWindow) return;
});
window.onload = () => {
    var e,
      t = getParameterByName('page');
      
      
    if (void 0 != t) {
      document.getElementById(
        'dropdown-button'
      ).innerText = document.getElementById(t).textContent;
      for (
        var o = 0;
        o < document.getElementById('selectContainer').children.length;
        o++
      )
        document.getElementById('selectContainer').children[o].innerText ==
          document.getElementById(t).textContent &&
          (document.getElementById('selectContainer').selectedIndex = o);
          let n;
          if(theme!=null){
            n = './sports/' + t + '.html?v=' + Date.now()+"&theme="+theme;
          }else{
            n = './sports/' + t + '.html?v=' + Date.now();
          }
      
      (sportsViewer.style.height = 0), (sportsViewer.src = n);
    }
};
