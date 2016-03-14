function Journal(entryTitle, entry) {
  this.entryTitle = entryTitle;
  this.entry = entry;
  //timestamp with moment
}

Journal.prototype.wordCount = function() {
  var entryArray = this.entry.split(" ");
  var wordCount = entryArray.length;
  return wordCount;
}
