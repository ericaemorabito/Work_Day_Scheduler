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

    //TODO LOCAL STORAGE 

    saveBtn.on('click', function () {
      let scheduleElToStore = saveBtn.siblings('.schedule');
      console.log(scheduleElToStore);
      let newScheduleInput = scheduleElToStore.text();
      console.log(newScheduleInput);


      //1. find sibling schedule element .sibling('.schedule')
      //2. get the new input data
      //3. set the contents of storedData[i].schedule to the new contents(#2)
      //4. find index in storedData that matches attr data-hour='12'

      // let scheduleInput = $('.schedule').text(); //gets the text data from all schedule classes


    })
  }
};
createTimeBlocks();