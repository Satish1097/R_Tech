function openmenu() {
    let x = document.getElementById("menu");
    x.style.left = "0%";
}

/*function closemenu() {
    let y = document.getElementById("menu");
    y.style.left = "-100%";
}*/



  window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');

    if (window.pageYOffset > 200) {
      
      nav.style.transition = 'top 0.3s, position 0.3s';
      nav.style.top = '0';
      nav.style.position = 'fixed';
    } else {
      nav.style.transition = 'top 0.3s, position 0.3s';
      nav.style.top = '0';
      nav.style.position = 'relative';
    }
  });
  