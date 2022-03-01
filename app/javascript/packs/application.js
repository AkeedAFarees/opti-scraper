// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
ActiveStorage.start()

$(document).on('change', '.skill-select', function (){
  $.ajax({
    method: "get",
    url: "/update_experience",
    data: {
      name: $(".skill-select option:selected").val()
    }
  })
});

// $(document).on({
//   ajaxStart: function() { $(".loader_wrap").removeClass("loader_show");},
//   ajaxStop: function() { $(".loader_wrap").addClass("loader_show"); }
// });
