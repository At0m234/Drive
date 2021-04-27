import lax from "lax.js";

window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".club__underground-image", {
    scrollY: {
      translateX: [
        ["elInY", "elOutY"], // Driver value map
        [-500, 0], // Animation value map
      ],
    },
  });
};
