function clockit() {
  // Return inverse value of background color
  function adjustTextColor(backgroundColor) {
    var color = backgroundColor;
    color = color.substring(1);           // remove '#'
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
  }

  // Return verbose name of Date.getMonth()
  function getVerboseMonth(monthVal) {
    var months = ['January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December'];
    return months[monthVal];
  }

  var d = new Date();

  var section = document.getElementById('colorful');
  var github = document.getElementById('github');

  var dateContainer   = document.getElementById("date"),
      hexContainer    = document.getElementById("currentHex"),
      hourContainer   = document.getElementById("hour"),
      minuteContainer = document.getElementById("minute"),
      secondContainer = document.getElementById("second");

  var currentDateVal   = dateContainer.innerText,
      hourVal          = d.getHours().toString(),
      minuteVal        = d.getMinutes().toString(),
      secondVal        = d.getSeconds().toString();

  // Prepend "0" if value is one digit long
  if (hourVal.length === 1) hourVal = "0" + hourVal;
  if (minuteVal.length === 1) minuteVal = "0" + minuteVal;
  if (secondVal.length === 1) secondVal = "0" + secondVal;

  // Update values as needed
  if (hourVal !== hourContainer.innerText) hourContainer.innerText = hourVal;
  if (minuteVal !== minuteContainer.innerText) minuteContainer.innerText = minuteVal;
  if (secondVal !== secondContainer.innerText) secondContainer.innerText = secondVal;

  var hexVal = "#" + hourVal + minuteVal + secondVal;
  github.style.borderRightColor = adjustTextColor(hexVal);

  hexContainer.innerText = hexVal; // always unique text value

  var dateVal  = d.getDate().toString(),
      monthVal = d.getMonth(), // keep as int for getVerboseMonth
      yearVal  = d.getFullYear().toString();

  var newDateVal = dateVal + ' ' + getVerboseMonth(monthVal) + ' ' + yearVal;
  if (currentDateVal !== newDateVal) dateContainer.innerText = newDateVal;

  section.style.backgroundColor = hexVal;
  section.style.color = adjustTextColor(hexVal);
}

window.setInterval(clockit, 1000);