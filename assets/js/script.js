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

//shows all tabs
$("#show_all").on("click", function() {
   $(this).addClass("active").parent("li").siblings().find("a").removeClass("active");
   $(".tab-pane").removeClass("fade").addClass("active").addClass("show");
 });
 $(".nav-link").not("#show_all").on("click", function() {
   console.log(this.hash);
   $(".tab-pane").not(this.hash).removeClass("active").removeClass("show");
 });
 