(function (w) {
    var timer,
        doc = w.document,
        docEl = doc.documentElement,
        headEl = docEl.firstElementChild,
        metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
    headEl.appendChild(metaEl);
    function refreshRem () {
        var width = w.innerWidth, rem;
        width = width > 750 ? 750 : width;
        rem = width / 10;
        docEl.style.fontSize = rem + "px";
    }
    refreshRem();
    w.addEventListener('resize', function() {
        clearTimeout(timer);
        timer = setTimeout(refreshRem, 200);
    }, false);
})(window);