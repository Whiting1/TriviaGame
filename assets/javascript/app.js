$("#startClock").click( function(){
   var counter = 30;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("timeRem");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         alert('sorry, out of time');
         clearInterval(counter);
       }
     }, 1000);
    function calcscore(){
      var score = 0;
      $(".calc:checked").each(function(){
      score+=parseFloat($(this).val(),10);
      });
    score = score.toFixed(2); 
    $("input[name=openingsum]").val(score);
}
    $().ready(function(){
      $(".calc").change(function(){
        calcscore();
    });
});
});
// function calcscore(){
//   var score = 0;
//   $(".calc:checked").each(function(){
//     score+=parseFloat($(this).val(),10);
//   });
//   score = score.toFixed(2); 
//   $("input[name=openingsum]").val(score);
// }
// $().ready(function(){
//     $(".calc").change(function(){
//         calcscore();
//     });
// });


