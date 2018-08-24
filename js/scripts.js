function Pizza(crustInput, sizeInput, toppingsInput) {
  this.crust = crustInput;
  this.size = sizeInput;
  this.toppings = toppingsInput;
  this.price = 0;
}

Pizza.prototype.pricePizza = function() {
  console.log(this.toppings);
  if (this.crust === "Thin") {
    this.price += 2;
  } else if (this.crust === "Stuffed") {
    this.price += 4;
  }
  if (this.size === "Small") {
    this.price += 9;
  } else if (this.size === "Medium") {
    this.price += 11;
  } else if (this.size === "Large") {
    this.price += 13;
  } else {
    console.log("CATCH: scripts.js Line 21");
  }

  var toppingsArray = this.toppings;
  var toppingsTotal = 0;
  toppingsArray.forEach(function(topping) {
    if(topping === "Pepperoni") {
      toppingsTotal++;
    }
    if (topping === "Bacon") {
      toppingsTotal += 2;
    }
    if (topping === "Pineapple") {
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

  $('form#pizza-form').submit(function(event)
    event.preventDefault();
    var crust = $("input:radio[name=crust-group]:checked").val();
    var size = $("input:radio[name=size-group]:checked").val();
    var toppings = [];

    $("input:checkbox[name=toppings-group]:checked").each(function() {
     toppings.push($(this).val());
   });

   var newPizza = new Pizza(crust, size, toppings);
   var calculateTotal = newPizza.pricePizza();

   var li = "<li>";
   var cli = "</li>";
   $("span#crustOutput").text(newPizza.crust);
   $("span#sizeOutput").text(newPizza.size);
   $("ul#toppingsOutput").empty();
   newPizza.toppings.forEach(function(topping) {
    $("ul#toppingsOutput").append(li + topping + cli);
  });
  $("span#totalOutput").text(newPizza.price);
  });
});
