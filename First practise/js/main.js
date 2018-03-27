const my_name = document.getElementByClassName(".name");
const menu_Icon = document.getElementByClassName(".menuIcon");
const global_nav = document.getElementByClassName(".global-nav");


menu_Icon.addEventListener("click", menu_Icon_click)
// function setColorForTextName() {
  // my_name.style.color = 
  //                   0.213 * this.rgb[0] + 
  //                   0.715 * this.rgb[1] + 
  //                   0.072 * this.rgb[2] 
  //                   < 0.5 ? '#FFF' : '#000';

const menu_Icon_click = (event) => {
  if(menu_Icon.node){
    menu_Icon.node.classList.remove("js-menuOpen");
    global_nav.classList.remove("js-open");
  }
  if(event.target.classList.contains("menuIcon")){
    event.target.classList.add("js-menuOpen");
    global_nav.classList.add("js-open");
  }
}

