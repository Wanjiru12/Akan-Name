var male = [
  { day: "Sunday", name: "Kwasi" },
  { day: "Monday", name: "Kwadwo" },
  { day: "Tuesday", name: "Kwabena" },
  { day: "Wednesday", name: "Kwaku" },
  { day: "Thursday", name: "Yaw" },
  { day: "Friday", name: "Koffi" },
  { day: "Saturday", name: "Kwame" },
];
var female = [
  { day: "Sunday", name: "Akosua" },
  { day: "Monday", name: "Adwoa" },
  { day: "Tuesday", name: "Abenaa" },
  { day: "Wednesday", name: "Akua" },
  { day: "Thursday", name: "Yaa" },
  { day: "Friday", name: "Afua" },
  { day: "Saturday", name: "Ama" },
];

function dayOfWeek() {
  var dd = parseInt(document.getElementById("date").value);
  var mm = parseInt(document.getElementById("month").value);
  var year = document.getElementById("year").value;

  var cc = parseInt(year.slice(0, 2)); // century digit
  var yy = parseInt(year.slice(2, 4)); // year digit

  if (dd <= 0 || dd > 31) alert("You have entered an invalid day");
  if (mm <= 0 || mm > 12) alert("You have entered an invalid month");

  var day =
    (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;

  return Math.floor(day);
}
