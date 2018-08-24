function Pizza(crustInput, sizeInput, toppingsInput) {
  this.crust = crustInput;
  this.size = sizeInput;
  this.toppings = toppingsInput;
  this.price = 0;
}

Pizza.prototype.pricePizza = function() {
  console.log(this.toppings);
  if (this.crust === "thin") {
    this.price += 2;
  } else if (this.crust === "stuffed") {
    this.price += 4;
  }
  if (this.size === "small") {
    this.price += 9;
  } else if (this.size === "medium") {
    this.price += 11;
  } else if (this.size === "large") {
    this.price += 13;
  } else {
    console.log("CATCH: scripts.js Line 21");
  }

  var toppingsArray = this.toppings;
  var toppingsTotal = 0;
  toppingsArray.forEach(function(topping) {
    if(topping === "pepperoni") {
      toppingsTotal++;
    }
    if (topping === "bacon") {
      toppingsTotal += 2;
    }
    if (topping === "pineapple") {
      toppingsTotal += 2;
    }
  });
  this.price += toppingsTotal;

  return this.price;
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
   var calculateTotal = newPizza.pricePizza();
   console.log(calculateTotal);
  });
});
