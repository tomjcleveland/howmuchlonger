export function formatDate(dateString) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  var date = new Date(dateString)
  var weekDay = weekDays[date.getDay()]
  var month = months[date.getMonth()]
  var numDay = date.getDate()
  var year = date.getFullYear()
  var hours, meridian;
  if (date.getHours() > 12) {
    hours = date.getHours() - 12;
    meridian = "pm";
  } else {
    hours = date.getHours();
    meridian = "am";
  }
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var seconds = date.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var time = hours + ":" + minutes + ":" + seconds + meridian
  
  return weekDay + ", " + month + " " + numDay + ", " + year + " at " + time
}