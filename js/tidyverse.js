(function() {
  
  $(".solution").each(function() {
    $(this).before("<p class='solution-link'><a href='#'>Solution</a></p>");
    $(this).hide();
    console.log($(this).prev());
    $(this).prev().on("click", function() {
      $(this).next().slideToggle();
    });
    
  });
  
  

})();