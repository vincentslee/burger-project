console.log("linked successfully");

$(function() {
    $(".create-form").on("submit", function(event) {
     event.preventDefault();
 
     var newBurger = {
       name: $("#newburger").val().trim(), 
       eaten: 0
      };
 
     $.ajax("/api/burgers", {
       type: "POST",
       data: newBurger
     }).then(
       function() {
         console.log("created new burger");
         
         location.reload();
       });
   });

   $(".eatburger").on("click", function(event) {
     event.preventDefault();

     var id = $(this).data("id");
     var devouredState = {
       devoured: 1
     };
 
     $.ajax("/api/burgers/" + id, {
       type: "PUT",
       data: devouredState
       }).then(function() {
         console.log("Burger devoured");
         location.reload();
       });
   });

   $(".deleteburger").on("click", function(event) {
     event.preventDefault();

     var id = $(this).data("id");


     $.ajax({
         type: "DELETE",
         url: "/api/burgers/" + id
     }).then(location.reload());
 });

})