// $("li").click(function(){
//     //alert("clicked li");
//     //if li is gray 
//       if ($(this).css("color") == "rgb(128,128,128)") {
//           $(this).css({
//               color:"black",
//               textDecoration: "none"
//           });
//       }
//         //turn it black
//     //else
//     else{
//         $(this).css({
//             color:"gray",
//             textDecoration: "line-through"
//         });
//     }
//         //turn it gray
//     $(this).css({
//         color:"gray",
//         textDecoration: "line-through"
//         });
    
// });


//easier way to do all of the above
$("li").click(function(){
    $(this).toggleClass("completed");
});

$("span").click(function(event){
    
    event.stopPropagation();
    
});