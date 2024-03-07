const mongodb = require('mongodb');
const Habits = require("../models/habit");
const weekData = require("../week").reverseDate;

exports.startPage = (req, res, next) => {
  res.render("homePage");
};

exports.dashboard = (req, res, next) => {
  Habits.find()
    .then((habits) => {
      res.render("dashboard", {
        habits: habits,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.habitStats = (req, res, next) => {
  Habits.find()
    .then((habits) => {
      res.render("habitStats", {
        habits: habits,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteDashboardHabit = (req, res, next) => {
  const habitId = req.body.habitId;
  Habits.findByIdAndDelete(habitId)
    .then(() => {
      console.log("Deleted!");
      res.redirect("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteHabitStats = (req, res, next) => {
  const habitId = req.body.habitId;
  Habits.findByIdAndDelete(habitId)
    .then(() => {
      console.log("Deleted!");
      res.redirect("/dashboard/stats");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postHabits = (req, res, next) => {
  const title = req.body.title;
  let count = 0;
  const habit = new Habits({
    title: title,
    weekData: weekData,
    count: count,
  });
  habit
    .save()
    .then((result) => {
      console.log("Habit Added!");
      res.redirect("/dashboard");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.toggleStatus = async(req, res, next) => {
  const habitId = req.body.habitId;
  const weekDayId = req.body.weekDayId;
   const dayId = new mongodb.ObjectId(weekDayId);
    
    const habit =  await Habits.findById(habitId);
    const week = habit.weekData;
    week.find((day, idx) => {
        if (day._id.equals(dayId)) {
            if (day.status === "None") {
                day.status = "Done";
                habit.count++;
            }else if (day.status === "Done") {
                day.status = "Not Done";
                habit.count--;
            } else {
                day.status = "None"
            }
            console.log(day.day, day.status, habit.count);
        }
    })
    habit.weekData = week;
    await habit.save();

  res.redirect("/dashboard/stats");
};
