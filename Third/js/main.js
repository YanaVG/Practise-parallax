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

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['top', 'reile', 'about', 'get_in_touch']
    
  });
});

$.fn.fullpage.moveSectionUp();

$.fn.fullpage.moveSectionDown();
// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
