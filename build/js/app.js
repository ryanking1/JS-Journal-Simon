(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Journal = function(entryTitle, entry) {
  this.entryTitle = entryTitle;
  this.entry = entry;
  //timestamp with moment
}

exports.Journal.prototype.wordCount = function() {
  var entryArray = this.entry.split(" ");
  var wordCount = entryArray.length;
  return wordCount;
};

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').Journal;

$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var entryTitle = $("#title").val();
    var entry = $("#entry").val();
    var journalNew = new Journal(entryTitle, entry);

    $(".result").append("<h2>" + entryTitle + "</h2>" + "<h5>" + entry + "</h5>" + "<p>" + journalNew.wordCount() + "</p>");
    // $("#formTitle").append(entryTitle);
    // $("#formEntry").append(entry);
    // $("#wordCount").append(journalNew.wordCount());
  });
});

},{"./../js/journal.js":1}]},{},[2]);
