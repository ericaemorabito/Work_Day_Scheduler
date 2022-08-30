var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd'); 
  currentDayEl.text(currentDay);
}
displayDay();

var timeTable = $('#time_table');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

function createTimeBlocks() {
  for (let i=0; i < hours.length; i++){
var newRow = $('<tr>').addClass('.time-block', 'row');
timeTable.append(newRow);

//create td, set data td to index of hour, append to new row
var newHour = $('<td>').text(hours[i]).addClass('hour p-3');
newRow.append(newHour);

//create td, set data to empty schedule, append to new row
var newSchedule = $('<td>').text('Schedule area').attr('contenteditable', 'true').attr('id', 'schedule').addClass('p-3');
newRow.append(newSchedule);

//TODO: adds specific id for each schedule <td>
newSchedule.attr('id', hours[i]);

//create td, set to <a> with save, append to new row
var saveLink = $('<a>').text('Save').attr('href', '#').addClass('saveBtn p-3');
newRow.append(saveLink);

var currentTime = moment().format('HH'); 

var timeColoring = function(){
  if (currentTime < hours[i]){
    newSchedule.addClass('future');
  } else if (currentTime === hours[i]) {
    newSchedule.addClass('present');
  } else {
    newSchedule.addClass('past');
  }
};
timeColoring();
}
};
createTimeBlocks();

//TODO: Local Storage

// Get data typed into schedule section
var scheduleInput = $('#schedule').text(); //
console.log(scheduleInput);

//Get Stored Items
var getLocalStorage = function(){
  localStorage.getItem('schedule');
};
console.log(getLocalStorage);

$('.saveBtn').on('click', function() {
  localStorage.setItem('schedule', scheduleInput);
  localStorage.getItem('schedule');
  });

var init = function(){
  getLocalStorage();
  $('schedule').text()
};