(() => {
  "use strict";
  (class {
    constructor(o, t, h) {
      (this.width = o), (this.height = t), (this.count = h);
    }
    nextSlide() {
      console.log("Move forward");
    }
    prevSlide() {
      console.log("Move back");
    }
    whoAmI() {
      console.log(this.width, this.height, this.count);
    }
  })(200,500,3).whoAmI();
})();
