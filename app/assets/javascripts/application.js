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

$(document).ready(function(){
  $(".week-view-container").hide();

  var calendar_view = "month";
  $("#toggle-calendar-view").click(function(){
    if (calendar_view == "month"){
      $(".month-view-container").hide();
      $(".week-view-container").show();
      document.getElementById("toggle-calendar-view").innerHTML = "Week View";
      calendar_view = "week";
    }
    else {
      $(".month-view-container").show();
      $(".week-view-container").hide();
      document.getElementById("toggle-calendar-view").innerHTML = "Month View";
      calendar_view = "month";
    }
  });
});