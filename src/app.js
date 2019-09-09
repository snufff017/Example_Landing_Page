import './scss/base.scss'
import $ from 'jquery';

$(document).ready(function(){
    let burger_menu = $(".js-burger-menu");
    let body = $('body');
   
    $(burger_menu).click(function(){
        $(this).toggleClass("open");
        $('.js-navigation').toggleClass("open");
        $(body).toggleClass("overflow-hidden");
      });
});