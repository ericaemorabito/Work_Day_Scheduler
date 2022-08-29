var currentDayEl = $('#currentDay');

function displayDay() {
  var currentDay = moment().format('dddd'); 
  currentDayEl.text(currentDay);
}
displayDay();

//TODO: create td for each next row, append each, set data to x 
function createTimeBlocks(){

};
createTimeBlocks();