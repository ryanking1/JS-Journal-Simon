$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var entry = $("#entry").val();
    var journal = new Journal(title, entry);

    $("#formTitle").append(title);
    $("#formEntry").append(entry);
    $("#wordCount").append(journal.wordCount());
  });
});
