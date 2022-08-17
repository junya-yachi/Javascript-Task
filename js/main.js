'use strict'
{
   $(document).ready(function() {
      let startTime;
      let timeoutId;
      let elapsedTime = 0;

      function countUp() {
        const d = new Date(Date.now() - startTime + elapsedTime);
        const h = d.getUTCHours();
        const m = d.getMinutes();
        const s = d.getSeconds();
        const ms = d.getMilliseconds();
        $(".timer").text(`${h}:${m}:${s}:${ms}`);
        
        timeoutId = setTimeout(() => {
          countUp();
        }, 10);
      }

      function buttonDefault() {
        $(".start").prop("disabled", false);
        $(".stop").prop("disabled", true);
        $(".reset").prop("disabled", true);
      }

      function clickButtonStart() {
        $(".start").prop("disabled", true);
        $(".stop").prop("disabled", false);
        $(".reset").prop("disabled", true);
      }

      function clickButtonStop() {
        $(".start").prop("disabled", false);
        $(".stop").prop("disabled", true);
        $(".reset").prop("disabled", false);
      }

      buttonDefault();

      $(".start").click(function() {
        startTime = Date.now();
        countUp();
        clickButtonStart();
      }); 
      
      $(".stop").click(function() {
        clearTimeout(timeoutId);
        elapsedTime += Date.now() - startTime;
        clickButtonStop();
      }); 
      
      $(".reset").click(function() {
        $(".timer").text("0:0:0:0");
        elapsedTime = 0;
        buttonDefault();
      }); 
  });
}