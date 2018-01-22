// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// Run openCalendar() on every page load
document.addEventListener("turbolinks:load", function() {
  var currentCalendarView;
  currentCalendarView = activeCalendar.getActiveCalendar();
  openCalendar("click", currentCalendarView);
  evt.currentTarget.className += " active";
})


// Keeps track of active calendar
// JS concept: module pattern. Removes need for global variables
var activeCalendar = (function () {
  var cal;

  cal = "Month";
  return {
    setActiveCalendar: function(newCalendar) {
      cal = newCalendar;
    },
    getActiveCalendar: function() {
      return cal;
    }
  }

}());


function openCalendar(evt, calendarView) {
  var i, tabcontent, tablinks;

  //hide all calendars
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //display the target calendar
  document.getElementById(calendarView).style.display = "flex";
  evt.currentTarget.className += " active";

  //update module pattern variable
  activeCalendar.setActiveCalendar(calendarView);
}