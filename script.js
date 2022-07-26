var todaysDate = moment();
var currentTime = moment().hour();
var todayElement = $('#currentDay');
var containerEl = $('.container');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Display's Today's Date
todayElement.text(todaysDate.format('dddd, MMMM Do'));

//creates and displays time slots
function displayTimeBlocks() {
  for (var i = 0; i < hours.length; i++) {

    // creates tags for time slots
    var rowBlock = $('<div>');
    var hourBlock = $('<div>');
    var textInput = $('<textarea>');
    var saveBtn = $('<button>');
    var saveIcon = $('<i>');
    //gets any stored info
    var userStored = localStorage.getItem(hours[i]);

    //adds classes to tags for time slot stylings
    rowBlock.addClass('row time-block');
    hourBlock.addClass('col-1 hour');
    hourBlock.text(moment().set('hour', hours[i]).format('hA'));
    textInput.addClass('col-10 description');
    textInput.data('hour', hours[i]);
    saveBtn.addClass('col-1 saveBtn');
    saveIcon.addClass('fas fa-save');

    //appends tags to html
    containerEl.append(rowBlock);
    rowBlock.append(hourBlock);
    rowBlock.append(textInput);
    rowBlock.append(saveBtn);
    saveBtn.append(saveIcon);

    //adds stored info if available
    textInput.text(userStored);

    //colors the time slots based on current time
    if (currentTime > hours[i]) {
      textInput.addClass('past')
    }
    else if (currentTime < hours[i]) {
      textInput.addClass('future')
    }
    else {
      textInput.addClass('present')
    };

  };
  
  //targets button element to call save function
  containerEl.on('click', 'button', saveUserInput);
  
  //pulls value from element previous to <button> and saves to local storage
    function saveUserInput(event) {
      event.preventDefault();
      var input = $(this.previousElementSibling).val();
      var hourSlot = $(this.previousElementSibling).data('hour');
     
      localStorage.setItem(hourSlot, input);
    }

};

displayTimeBlocks();