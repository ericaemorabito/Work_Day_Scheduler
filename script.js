var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd'); 
  currentDayEl.text(currentDay);
}
displayDay();

//TODO: create time blocks
var timeTable = $('#time_table');
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

function createTimeBlocks() {
  for (let i=0; i < hours.length; i++){
//create new row
var newRow = $('<tr>');
//append new row to table
timeTable.append(newRow);
//create td, set data td to index of hour, append to new row
var newHour = $('<td>').text(hours[i]);
timeTable.append(newHour);
//create td, set data to emplty schedule, append to new row 
//make content editable attribute
var newSchedule = $('<td>').text('Schedule area');
timeTable.append(newSchedule);
//create td, set to <a> with save, append to new row
var saveLink = $('<a>').attr('href', '#').text('Save')

  }
};
createTimeBlocks();

//TODO: set time blocks to color depending on their time
//TODO: when click save, save schedule input to local storage