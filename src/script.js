function button(){
    return 'button';
}

class Slider{
    constructor(width,height,count){
        this.width = width;
        this.height = height;
        this.count = count;
    }
    nextSlide(){
        console.log("Move forward");
    }
    prevSlide(){
        console.log("Move back");
    }
    whoAmI(){
        console.log(this.width, this.height, this.count);
    }
}


// const slider = new Slider(200,200,5),
//       secondSlider = new Slider(400,250,10);
// slider.whoAmI();
// secondSlider.whoAmI();

class AutoSlider extends Slider{
    constructor(width,height,count,border){
        super(width,height,count);
        this.border = border;
    }
    play(brd){
        this.border = brd;
        console.log(`Auto play: ${brd}`);
    
    }
}

const newAutoSlid = new AutoSlider();
newAutoSlid.play('Green 1px ');

export {button};

export default Slider;