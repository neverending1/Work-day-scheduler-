$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

function TimeTracker() {
  let hourOfDay = moment().hour();
  $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id").split("hour-")[1]);

    if (currentHour < hourOfDay) {
      $(this).children("textarea").addClass("past");
      $(this).children("textarea").removeClass("present");
      $(this).children("textarea").removeClass("future");
    } 
    else if (currentHour === hourOfDay) {
      $(this).children("textarea").removeClass("past");
      $(this).children("textarea").addClass("present");
      $(this).children("textarea").removeClass("future");
    } 
    else {
       $(this).children("textarea").removeClass("past"); 
       $(this).children("textarea").removeClass("present");
       $(this).children("textarea").addClass("future");
    }
  });
}

 TimeTracker();


$("#container").on("click", "button", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});