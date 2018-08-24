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
    var crust = $("input:radio[name=crust-group]:checked").val();
    var size = $("input:radio[name=size-group]:checked").val();
    var toppings = [];

    $("input:checkbox[name=toppings-group]:checked").each(function() {
     toppings.push($(this).val());
   });

   var newPizza = new Pizza(crust, size, toppings);
   console.log(newPizza);
  });
});
