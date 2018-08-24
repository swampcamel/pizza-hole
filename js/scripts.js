function Pizza(crustInput, sizeInput, toppingsInput) {
  this.crust = crustInput;
  this.size = sizeInput;
  this.toppings = toppingsInput;
}

$(document).ready(function(){
  $('.sidenav').sidenav();

  $('#pizza-nav').children().click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });

  $('form#pizza-form').submit(function(event) {
    event.preventDefault();
    console.log("button works");
  })
});
