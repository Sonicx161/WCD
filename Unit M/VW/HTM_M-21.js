/* 
   Revisions Bookstore and Cafe 
   Filename: script.js

   Author: Anthony
   Date: 16/7/2018
   HTML5 and CSS3 Illustrated Unit M, Visual Workshop
 */

var smallersizeBtn = document.querySelector(".smaller-size");
var defaultsizeBtn = document.querySelector(".selected-button");
var biggersizeBtn = document.querySelector(".larger-size");
var html = document.querySelector("html");

function smallersize() {
  smallersizeBtn.className = "selected-button";
  html.className = "smaller-size";
  defaultsizeBtn.className = "html, default-button";
  biggersizeBtn.className = "larger-size";
}
function biggersize(){
  biggersizeBtn.className = "selected-button";
  html.className = "larger-size";
  defaultsizeBtn.className = "html, default-button";
  smallersizeBtn.className = "smaller-size";
}
function defaultsize(){
  defaultsizeBtn.className = "selected-button";
  html.className = "html";
  biggersizeBtn.className = "larger-size";
  smallersizeBtn.className = "smaller-size";
}
var clickSmaller = smallersizeBtn.addEventListener("click",smallersize);
var clickBigger = biggersizeBtn.addEventListener("click",biggersize);
var clickDefault = defaultsizeBtn.addEventListener("click", defaultsize);