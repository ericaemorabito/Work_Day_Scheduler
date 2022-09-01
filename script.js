var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd');
  currentDayEl.text(currentDay);
}
displayDay();

var timeBlocks = $('#time_blocks');

var storedData = [
  {
    hour: 9,
    schedule: ''
  },
  {
    hour: 10,
    schedule: ''
  },
  {
    hour: 11,
    schedule: ''
  },
  {
    hour: 12,
    schedule: ''
  },
  {
    hour: 13,
    schedule: ''
  },
  {
    hour: 14,
    schedule: ''
  },
  {
    hour: 15,
    schedule: ''
  },
  {
    hour: 16,
    schedule: ''
  },
  {
    hour: 17,
    schedule: ''
  }
];

function createTimeBlocks() {
  for (let i = 0; i < storedData.length; i++) {
    let newRow = $('<section>').addClass('time-block col-12 d-inline-flex justify-content-center');
    let newHour = $('<li>').text(storedData[i].hour).addClass('hour col-1');
    let newSchedule = $('<li>').text(storedData[i].schedule).attr('contenteditable', 'true').addClass('schedule col-9 d-flex');
    newSchedule.attr('id', storedData[i].hour); //TODO: Sets id of each section to the hour
    let saveBtn = $('<button>').addClass('d-flex col-1 saveBtn');
    let saveIcon = $('<i>').addClass('fas fa-save');
    saveBtn.append(saveIcon);
    timeBlocks.append(newRow);
    newRow.append(newHour);
    newRow.append(newSchedule);
    newRow.append(saveBtn);

    //Colors the background of Schedule <li> depending on their hour
    let currentTime = moment().format('HH');
    let timeColoring = function () {
      if (currentTime < storedData[i].hour) {
        newSchedule.addClass('future');
      } else if (currentTime > storedData[i].hour) {
        newSchedule.addClass('past');
      } else {
        newSchedule.addClass('present');
      }
    };
    timeColoring();

    //TODO: saving to local storage

    saveBtn.on('click', function () {
      scheduleEl = saveBtn.siblings('.schedule'); //Finds the schedule element next to save button clicked
      console.log(scheduleEl);
      var scheduleId = scheduleEl.attr('id');// Gets the value of schedule element's id
      console.log(scheduleId);
      var scheduleInput = scheduleEl.text(); // Gets the text in the schedule element
      console.log(scheduleInput);
      localStorage.setItem(scheduleId, scheduleInput); //TODO: Set id and input to storage
    });

    //TODO: render item in local storage when page loads
    // var init = function () {
    //   var storedScheduleInput = localStorage.getItem('schedule');
    //   var scheduleInit = scheduleEl.text(storedScheduleInput);
    // };
    // init();
  }
};
createTimeBlocks();

var scheduleEl;

//1. find sibling schedule element .sibling('.schedule')
//2. get the new input data
//3. set the contents of storedData[i].schedule to the new contents(#2)
//4. find index in storedData that matches attr data-hour='12'
