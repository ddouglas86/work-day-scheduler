var todaysDate = moment();
var currentTime = moment();
currentTime = currentTime.format('HH');
var todayElement = document.getElementById('currentDay');

todayElement.textContent = todaysDate.format('dddd, MMMM Do');



