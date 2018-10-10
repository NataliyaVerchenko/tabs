/**
 * Created by user on 10-Oct-18.
 */

// class Tab {
//     constructor(selector) {
//         this.selector = selector
//         this.init()
//     }
//
//
//     init(){
//         let currentEl;
//         let contents = document.querySelectorAll('.tab-pane');
//         let tabItems = document.querySelectorAll('[data-toggle]');
//
//
//
//     }
// }
// document.querySelectorAll(".tabs").forEach(item =>{
//     new Tab(item);
// })

// class Carousel {
//     constructor(element, config) {

//         this._element   = element
//         this._config    = config

//         this.init();

//     }

//     init() {}
// }

// let carousel = new Carousel(document.getElementById('carousel'));


let sliders = document.querySelectorAll('.carousel .carousel-item'),
    currentSlide = 1,
    indicators = document.querySelectorAll('[data-slide-to]'),
    controls = document.querySelectorAll('[data-slide]');



function show() {
    sliders.forEach(function (slide, i) {
        slide = sliders[i];
        if(currentSlide > sliders.length){
            slide.classList.remove('active')

        }else{
            slide.classList.add('active')
        }
    });
    indicators.forEach(function (indicator, i) {

        if(currentSlide > indicators.length){
            indicator.classList.remove('active')

        }else{
            indicator.classList.add('active')
        }
    });

}


function goTo(){
    controls.forEach(function (control, i) {
        control.addEventListener( "click",function(e){
            console.log(e.target)
        });

    });
}






show()



      
  
      
   
    
  
  