var exists,pen,type;type=function(){var t,e,n,i,s,o;for(t={},e=n=0,i=(o="Boolean Number String Function Array Date RegExp Undefined Null Error Symbol".split(/\s+/gi)).length;n<i;e=++n)s=o[e],t[`[object ${s}]`]=s.toLowerCase();return function(e){var n;return n=Object.prototype.toString.call(e),t[n]||"object"}}(),exists=(t=>null!==t&&void 0!==t),(pen=function(t,e=!1,n=document.body){var i,s,o,r,p,h;if(p=(t=>{var e,n;n=/<([^\n]*?)>/gi;"string"===type(t)?!0===n.test(t)?(t=t.replace(/<|>/gi,""),e=document.createElement(t)):e=document.querySelector(t):e=t;this.attributes={};this.style={};this.events={};this.text=void 0;this.element=this.el=e;this.tag=e.tagName.toLowerCase();"template"===this.tag?(this.content=e.content,pen.fn.clone=function(t=!1){return document.importNode(this.el.content,t)}):this.children=t.children;this.Id=e.getAttribute("id");this.Class=e.getAttribute("class");this.Parent=exists(e.parentNode)?e.parentNode:"no parent";return e}),!(this instanceof pen))return new pen(t,e,n);if(t instanceof Document)this.element=this.el=t,this.events={},this.body=t.body,this.head=t.head,pen.fn.ready=function(t,e){return this.on("DOMContentLoaded",t,e),this};else if(t instanceof pen)for(r in t)this[r]=t[r];else p(t);if("boolean"===type(e))!0===e&&pen(n).append(el);else{if("object"!==type(e))throw new Error(`Pen: option 1 can't be a ${type(e)}`);for(s=0,o=e.length;s<o;s++)"options"!==(i=e[s])?this.attr(i,e[i]):(h=e[i],exists(h.options)?exists(h.options.autoAttach)?!0===h.options.autoAttach&&h.options.autoAttachTo.appendChild(el):h.options.autoAttach=!1:(h.options.autoAttach=!1,h.options.autoAttachTo=document.body))}}).fn=pen.prototype={constructor:pen},pen.prototype.handleObject=function(t,e){var n,i;for(n=0,i=t.length;n<i;n++)e(t[n],this,t);return this},pen.prototype.selfInstance=function(t,e){return t instanceof pen&&e(t,this),this},pen.prototype.html=function(t,e=!1){var n;switch(n=(n=>{this.text=t;return exists(t)?!0===e?(this.el[n]+=t,this):(this.el[n]=t,this):this.el[n]}),this.tag){case"input":case"option":case"textarea":return n("value");case"template":if("object"!==type(t))throw new Error("parameter 1 must be an element/object");return this.el.content.appendChild(t),this;default:return n("innerHTML")}},pen.prototype.attr=function(t,e){return exists(t)?"object"===type(t)?(exists(t.id)?this.Id=t.id:this.Class=t.class,this.handleObject(t,function(e,n){return n.attributes[e]=t[e],n.el.setAttribute(e,t[e]),n})):exists(e)?("id"===t?this.ID=e:this.CLASS=e,this.attributes[t]=e,this.el.setAttribute(t,e),this):this.el.getAttribute(t):this.attributes},pen.prototype.css=function(t,e){return exists(t)?"object"===type(t)?this.handleObject(t,function(e,n){return n.style[e]=t[e],n.el.style[e]=t[e],n}):exists(e)?(this.style[t]=e,this.el.style[t]=e,this):this.el.style[t]:this.el.style},pen.prototype.on=function(t,e,n){var i;return i=((t,e,n)=>{exists(this.el.addEventListener)?this.el.addEventListener(t,e,n):exists(this.el.attachEvent)?this.el.attachEvent(t,e):this.el[`on${t}`]=e}),this.events[t]={},this.events[t].fn=e,"object"===type(n)?(this.events[t].options=exists(n)?n:{},i(t,e,exists(n)?n:{})):(this.events[t].capture=!!exists(n)&&n,i(t,e,!!exists(n)&&n)),this},pen.prototype.off=function(t,e){var n;return n=((t,e)=>{exists(this.el.removeEventListener)?this.el.removeEventListener(t,e,cpture):exists(this.el.detachEvent)?this.el.detachEvent(t,e):this.el[`on${t}`]=void 0}),exists(e)?(n(t,e),delete this.events[t]):(n(t,this.events[t].fn),delete this.events[t]),this},pen.prototype.is=function(t){return this.tag===t},pen.prototype.append=function(...t){var e,n,i,s;for(n=i=0,s=t.length;i<s;n=++i)(e=t[n])instanceof pen?(e.PARENT=this.el,"template"===this.tag?this.el.content.appendChild(e.el):this.el.appendChild(e.el)):"template"===this.tag?this.el.content.appendChild(e):this.el.appendChild(e);return this},pen.prototype.appendTo=function(t){return t instanceof pen?(this.PARENT=t.el,t.append(this.el)):(this.PARENT=t,pen(t).append(this.el)),this},pen.prototype.remove=function(){return this.el instanceof pen?this.element.el:this.element,this.PARENT.removeChild(this.el),this.PARENT=void 0,this},pen.prototype.select=pen.fn.$=function(t){return"template"===this.tag?this.el.content.querySelector(str):this.el.querySelector(str)},pen.prototype.selectAll=pen.fn.$$=function(t){return"template"===this.tag?this.el.content.querySelectorAll(str):this.el.querySelectorAll(str)},pen.prototype.create=pen.fn.createElement=function(t,e){var n,i,s,o,r;if(t=pen(t),this.append(t),e.match(/return parent/gi))return this;if(e.match(/return child/)){for(i=s=0,o=(r=this.CHILDREN).length;s<o;i=++s)n=r[i],n=this.CHILDREN[i];if(n===t.el)return n=pen(n)}},pen.prototype.insertChildBefore=function(t,e){return e instanceof pen&&(e=e.el),t instanceof pen&&(t=t.el),this.element.el.insertBefore(t,e),this},pen.prototype.insertParentBefore=function(t,e){var n;return n=this.el instanceof pen?this.element.el:this.element,e instanceof pen&&(e=e.el),t.insertBefore(n,e),this},"undefined"!=typeof module&&null!==module&&(null!=module.exports?module.exports={pen:pen,exists:exists,type:type}:(window.pen=pen,window.exists=exists,window.type=type));