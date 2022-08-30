var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd');
  currentDayEl.text(currentDay);
}
displayDay();

var timeBlocks = $('#time_blocks');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//TODO List:
//add event listener to each button within loop
//store text in local storage
//adds specific id for each schedule <td>
//change to list, get rid of default styling for lists

function createTimeBlocks() {
  for (let i = 0; i < hours.length; i++) {
    let newRow = $('<section>').addClass('time-block col-12 d-inline-flex justify-content-center');
    timeBlocks.append(newRow);

    let newHour = $('<li>').text(hours[i]).addClass('hour col-2 p-3');
    newRow.append(newHour);

    let newSchedule = $('<li>').text('Schedule area').attr('contenteditable', 'true').addClass('col-2 d-flex p-3');
    newRow.append(newSchedule);
    newSchedule.attr('data-hour', hours[i]);

    let saveLink = $('<button>').text('Save').addClass('d-flex col-2 saveBtn p-3');
    newRow.append(saveLink);

    let currentTime = moment().format('HH');
    let timeColoring = function () {
      if (currentTime < hours[i]) {
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
var scheduleInput = $('#schedule').text();
console.log(scheduleInput);

//Get Stored Items
var getLocalStorage = function () {
  localStorage.getItem('schedule');
};
console.log(getLocalStorage);

$('.saveBtn').on('click', function () {
  localStorage.setItem('schedule', scheduleInput);
  localStorage.getItem('schedule');
  console.log(this);
  //TODO: use this to find sibling 
});

//TODO: 
var init = function () {
  getLocalStorage();
  $('schedule').text()
};