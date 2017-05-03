// Generated by CoffeeScript 2.0.0-alpha1
var Card;

Card = class Card {
  constructor(title, message) {
    this.container = pen("div").Class("card-container");
    this.titleContainer = pen("div").Class("card-title-container");
    this.messageContainer = pen("div").Class("card-message-container");
    this.message = pen("span").Class("card-message").Html(title !== null ? title : '');
    this.title = pen("span").Class("card-title").Html(message !== null ? message : '');
    pen(this.titleContainer).Append(this.title);
    pen(this.messageContainer).Append(this.message);
    pen(this.container).Append(this.titleContainer, this.messageContainer);
  }

  setTitle(str) {
    return pen(this.title).Html(str);
  }

  setMessage(str) {
    return pen(this.message).Html(str);
  }

  Style(el, stroobj) {
    return pen(this[el]).Css(stroobj);
  }

};