/***************SCROLL ANIMATION FUNCTIONS*******************/
const scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000/60) //in case requestAnimation not supported
}; 
const showThis = document.querySelectorAll('.showThis');

//to check if user can see
function show() {
    showThis.forEach(function(e) {
        if (isElementInViewport(e)) {
            e.classList.add("showing");
        } else {
            e.classList.remove("showing");
        }
        });
    scroll(show); //request point and apply/remove classes
};

show();

//function to calculate viewport
function isElementInViewport(el) {
    // check for jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
};

/***************BAFFLE.JS*******************/
const name = baffle(".name");
const title = baffle(".title");

//name animation
name.set({
  characters: ">0█ ;>`> <██< █1█ >`/█ /██ >10 <█`> 1;",
  speed: 100
});
name.start();
name.reveal(3500);

//title animation
title.set({
  characters: ">0█ █ / █ ;>`> <██< █1█ >`/█ /██ >10 <█`> 1;",
  speed: 100
});
title.start();
title.reveal(1000);