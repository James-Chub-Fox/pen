// Generated by CoffeeScript 2.0.0-alpha1
var el;

pen.options["auto append"] = true;

el = pen("a").Attr("id", "cow").Attr("href", "http://www.google.com").Html("Some text");

pen.options["to selector"] = true;

pen("a#cow").On("click", function(ev) {
  ev.preventDefault();
  if (pen(this).Html() === "Some text") {
    pen(this).Html("Henlo").Css("color", "red");
  } else {
    pen(this).Html("Some text").Css("color", "blue");
  }
});