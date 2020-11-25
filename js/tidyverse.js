(function() {
  
  $(".solution-exo").each(function() {
    $(this).before("<p class='solution-link'><a href='#'>la solution</a></p>");
    $(this).hide();
    $(this).prev().on("click", function() {
      $(this).next().slideToggle();
      $(this).toggleClass("shown");
    });
    
  });
  
  

})();