var Journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var entryTitle = $("#title").val();
    var entry = $("#entry").val();
    var journalNew = new Journal(entryTitle, entry);

    $(".result").append("<h2>" + entryTitle + "</h2>" + "<h5>" + entry + "</h5>" + "<p>" + journalNew.wordCount() + "</p>");
  });
});
