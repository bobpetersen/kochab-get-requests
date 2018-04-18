console.log("script.js has loaded!");

$(document).ready(onReady);

function onReady() {
  console.log("jQuery has been loaded!");

  $("#quoteButton").on("click", generateQuote);
}

function generateQuote() {
  console.log("button clicked");
  $.ajax({
    type: "GET",
    url: "/quote"
  }).then(function(response) {
    $("#quoteOutput").text(response.quote);
    console.log(response);
  });
}
