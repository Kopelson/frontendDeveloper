//This adds a click handler that removes the expanded list on the navbar when the user clicks a list item.
$(".li-selector").on("click", function(){
   let button = $("#header-button");
   let navHandler = $("#navbarSupportedContent");
   button.attr("aria-expanded", "false");
   navHandler.removeClass("show");
})

//simulate a click on about tab when learn more button is pressed
$(".learn-more").on("click", function(){
   aboutTab = $('#nav-about-tab');
   aboutTab.trigger('click');
});

//smooth accordian tranistion
$('.collapse').on('shown.bs.collapse', function(e) {
   var $card = $(this).closest('.card');
   $('html,body').animate({
     scrollTop: $card.offset().top
   }, 500);
 });
 