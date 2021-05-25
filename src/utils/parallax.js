import lax from "lax.js";
let x = [-600, -1000,  -1050];
if(window.innerWidth < 767){
  x = [-800, -900,  -950]
}
window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".club__underground-svg", {
    scrollY: {
      translateX: [
        ['elInY', 'elCenterY', 'elOutY'], // Driver value map
        x, // Animation value map
      ],
    },
  });

  lax.addElements(".club__background-string", {
    scrollY: {
      translateX: [
        ['elInY', 'elCenterY', 'elOutY'], // Driver value map
        [-100, 0,  100], // Animation value map
      ],
    },
  });
};
