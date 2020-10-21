$(".li-selector").on("click", function(){
   let button = $("#header-button");
   let navHandler = $("#navbarSupportedContent");
   button.attr("aria-expanded", "false");
   navHandler.removeClass("show");
})