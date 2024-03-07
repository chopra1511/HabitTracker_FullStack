const weeks = [
  {
    id: 1,
    day: "Sun",
  },
  {
    id: 2,
    day: "Mon",
  },
  {
    id: 3,
    day: "Tue",
  },
  {
    id: 4,
    day: "Wed",
  },
  {
    id: 5,
    day: "Thur",
  },
  {
    id: 6,
    day: "Fri",
  },
  {
    id: 7,
    day: "Sat",
  },
];

const date = [];

function displayTodayAndPrevious6Days() {
  var currentDate = new Date();
  // console.log(weeks[currentDate.getDay() + 1].day, currentDate.getDate() + 1);
  // console.log(weeks[currentDate.getDay()].day, currentDate.getDate());
  date.push({
    id: 7,
    day: weeks[currentDate.getDay()].day,
    date: currentDate.getDate(),
    status: "None",
  });
  for (var i = 1; i <= 6; i++) {
    var previousDate = new Date(currentDate);
    previousDate.setDate(currentDate.getDate() - i);
    date.push({
      id: 7 - i,
      day: weeks[previousDate.getDay()].day,
      date: previousDate.getDate(),
      status: "None",
    });
    // console.log(weeks[previousDate.getDay()].day, previousDate.getDate());
  }
}
displayTodayAndPrevious6Days();
let reverseDate = date.reverse();

exports.reverseDate = reverseDate;
