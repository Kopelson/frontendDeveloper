//This adds a click handler that removes the expanded list on the navbar when the user clicks a list item.
$(".li-selector").on("click", function(){
   //assigns button a header-button id selector
   let button = $("#header-button");
   //assigns navHandler a navbarSupportedContent id selector
   let navHandler = $("#navbarSupportedContent");
   //this changes the aria-expanded attribute on button to false
   button.attr("aria-expanded", "false");
   //this removes the class show from the navHandler
   navHandler.removeClass("show");
})