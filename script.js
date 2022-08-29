var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd'); 
  currentDayEl.text(currentDay);
}
displayDay();

//TODO: create time blocks
var timeTable = $('#time_table');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function createTimeBlocks() {
  for (let i=0; i < hours.length; i++){
//create new row
var newRow = $('<tr>')
//append new row to table
timeTable.append(newRow);
//create td, set data td to index of hour, append to new row
var newHour = $('<td>').text(hours[i]).addClass('hour');
timeTable.append(newHour);
//create td, set data to emplty schedule, append to new row 
//make content editable attribute
var newSchedule = $('<td>').text('Schedule area').addClass('schedule').attr('contenteditable', 'true');
timeTable.append(newSchedule);
//create td, set to <a> with save, append to new row
var saveLink = $('<a>').text('Save').attr('href', '#').addClass('save');
timeTable.append(saveLink);

//TODO: set time blocks to color depending on their time
var currentTime = moment().format('HH'); 

var timeColoring = function(){
  if (currentTime < hours[i]){
    newSchedule.addClass('past');
  } else if (currentTime === hours[i]) {
    newSchedule.addClass('present');
  } else {
    newSchedule.addClass('future');
  }
};
timeColoring();
}
};
createTimeBlocks();

//TODO: when click save, save schedule input to local storage
var scheduleInput = $('#schedule').val(); //gets value of schedule <td>
console.log(scheduleInput);

$('.save').on('click', function() { //when save link is clicked, set value of schedule to local input
    localStorage.setItem('schedule', scheduleInput)
  });