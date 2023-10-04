function menuButton() {
    let state = document.getElementById('menu-nav-box-sm-md-screens').style.display;
    if (state == 'flex') {
        document.getElementById('menu-nav-box-sm-md-screens').style.display = 'none';
    } else {
        document.getElementById('menu-nav-box-sm-md-screens').style.display = 'flex';
    }
}