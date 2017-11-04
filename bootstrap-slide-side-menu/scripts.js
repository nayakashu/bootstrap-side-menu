function openSideMenu() {
    var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var navbarHeight = document.getElementById('main-navbar').style.height;
    var sideMenuTop = viewPortHeight - navbarHeight;
    document.getElementById('side-menu').style.top = sideMenuTop;

    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main-area').style.marginLeft = '250px';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main-area').style.marginLeft = '0';
}

function resetPadding(element) {
    console.log(element);
    element.style.paddingBottom = element.style.paddingBottom - 4;
}