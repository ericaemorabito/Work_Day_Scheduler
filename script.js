var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd');
  currentDayEl.text(currentDay);
}
displayDay();

var timeBlocks = $('#time_blocks');

//TODO: array stored to local storage
localStorage.setItem('data', storedData);

var storedData = [
  {
    hour: 9,
    schedule: 'sch9'
  },
  {
    hour: 10,
    schedule: 'sch10'
  },
  {
    hour: 11,
    schedule: 'sch11'
  },
  {
    hour: 12,
    schedule: 'sch12'
  },
  {
    hour: 13,
    schedule: 'sch13'
  },
  {
    hour: 14,
    schedule: 'sch14'
  },
  {
    hour: 15,
    schedule: 'sch15'
  },
  {
    hour: 16,
    schedule: 'sch16'
  },
  {
    hour: 17,
    schedule: 'sch17'
  }
];

function createTimeBlocks() {
  for (let i = 0; i < storedData.length; i++) {
    let newRow = $('<section>').addClass('time-block col-12 d-inline-flex justify-content-center');
    let newHour = $('<li>').text(storedData[i].hour).addClass('hour col-1');
    let newSchedule = $('<li>').text(storedData[i].schedule).attr('contenteditable', 'true').addClass('schedule col-9 d-flex');
    newSchedule.attr('data-hour', storedData[i].hour); //Sets the data-hour of each schedule to the hour example: data-hour="9"
    let saveBtn = $('<button>').text('Save').addClass('d-flex col-1 saveBtn');

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

    //TODO: LOCAL STORAGE 

    saveBtn.on('click', function () {
      let scheduleEl = saveBtn.siblings('.schedule'); //Finds the schedule element next to save button clicked
      let newScheduleInput = scheduleEl.text(); //Gets the text in the schedule element
      console.log(newScheduleInput);
      localStorage.setItem('schedule', newScheduleInput); //Set to local storage

    })
    //TODO: render item in local storage when page loads
    // var init = function () {
    //   var scheduleInit = localStorage.getItem('schedule'); // Data retrieved from storage
    //   scheduleEl.text(scheduleInit);//set text to schedule element
    // };
    // init();
  }
};
createTimeBlocks();

//1. find sibling schedule element .sibling('.schedule')
//2. get the new input data
//3. set the contents of storedData[i].schedule to the new contents(#2)
//4. find index in storedData that matches attr data-hour='12'