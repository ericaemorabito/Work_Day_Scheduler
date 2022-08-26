var currentDayEl = $('#currentDay');
currentDay = moment().format('dddd'); 
console.log(currentDay)

//TODO: not working
function displayDay() {
  var currentDay = moment().format('dddd'); 
  console.log(currentDay); // logs current day
  currentDayEl.text(currentDay);
}

//TODO: create 8 rows for 8 business hours and 3 columns for hour, space, save button
function print