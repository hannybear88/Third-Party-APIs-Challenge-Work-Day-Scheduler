// Moment.js
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');


// // Date picker
// $('#event_period').datepicker({
//   inputs: $('.actual_range')
// });

// Text hour var
var fiveAm = $("#5am");
var sixAm = $("#6am");
var sevenAm = $("#7am");
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;
// var hourString = $(".hour").text().split(" ");

// Date, Day of the week and Exact time of the day

var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {

  console.log("Current Hour " + hour);
  var init5 = JSON.parse(localStorage.getItem("05:00 am"));
  fiveAm.val(init5);

  var init6 = JSON.parse(localStorage.getItem("06:00 am"));
  sixAm.val(init6);

  var init7 = JSON.parse(localStorage.getItem("07:00 am"));
  sevenAm.val(init7);

  var init8 = JSON.parse(localStorage.getItem("08:00 am"));
  eightAm.val(init8);

  var init9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(init12);
  
  var init13 = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(init13);
  
  var init14 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(init14);
  
  var init15 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(init15);
 
  var init16 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(init16);
  
  var init17 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(init17);
  
  var init18 = JSON.parse(localStorage.getItem("06:00 pm"))
  sixPm.val(init18);
  
  var init19 = JSON.parse(localStorage.getItem("07:00 pm"))
  sevenPm.val(init19);
} 

function background () {
      
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);

//      console.log(this);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()

  // Save Button for specific tinme slot 
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

  //Delete button for specitfic time slot
  $(".deleteBtn").click(function() {
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(''));
    location.reload()
   

    // colorChange ();
    // renderText ();
    
    });

    



  // Button for clear the day
  $("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

});