var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd');
  currentDayEl.text(currentDay);
}
displayDay();

var timeBlocks = $('#time_blocks');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var storedSchedule = ['schedule 9', 'schedule 10', 'schedule 11', 'schedule 12', 'schedule 13', 'schedule 14', 'schedule 15', 'schedule 16', 'schedule 17'];

//TODO List:
//add event listener to each button within loop
//store text in local storage
//adds specific id for each schedule <td>
//change to list, get rid of default styling for lists

function createTimeBlocks() {
  for (let i = 0; i < hours.length; i++) {
    let newRow = $('<section>').addClass('time-block col-12 d-inline-flex justify-content-center');
    let newHour = $('<li>').text(hours[i]).addClass('hour col-2');
    let newSchedule = $('<li>').text('Schedule area').attr('contenteditable', 'true').addClass('col-12 d-flex');
    newSchedule.attr('data-hour', hours[i]);
    let saveBtn = $('<button>').text('Save').addClass('d-flex col-2 saveBtn');

    timeBlocks.append(newRow);
    newRow.append(newHour);
    newRow.append(newSchedule);
    newRow.append(saveBtn);

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

    //TODO LOCAL STORAGE 

    let scheduleInput = $('#schedule').text();
    saveBtn.on('click', function () {
      //save to local storage
      localStorage.setItem('schedule', scheduleInput);
    })
  }
};
createTimeBlocks();

//TODO: Local Storage
// Get data typed into schedule section
// var scheduleInput = $('#schedule').text();
// console.log(scheduleInput);

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
// var init = function () {
//   getLocalStorage();
//   $('schedule').text()
// };