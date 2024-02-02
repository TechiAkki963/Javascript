let result;

result = document.all; //HTMLCollection[37]

result = document.all[11]; //Header
result = document.all[12]; //img

result = document.all.length; //37

result = document.documentElement;
//console.log(document.documentElement);

result = document.head; // head
result = document.body; // body
result = document.head.children; //HTMLCollection(6) [meta, meta, meta, link, link, title, viewport: meta]
result = document.body.children;

result = document.doctype; //<!DOCTYPE html>
result = document.domain; //127.0.0.1
result = document.URL; //http://127.0.0.1:5500/Javascript/07_DOM/03_Imp_Version/02_Document_Element_Properties/index.html?item=
result = document.characterSet; //UTF-8
result = document.contentType; //text/HTML

result = document.forms; //HTMLCollection [form#item-form, item-form: form#item-form]
result = document.forms[0]; //<form>...</form>
result = document.forms[0].id; //item-form
result = document.forms[0].method; //get
result = document.forms[0].action;

//Manipulate the id name
document.forms[0].id = "new-id";

result = document.links; //HTMLCollection[0]
result = document.links[0]; //
result = document.links[0].href; //http://127.0.0.1:5500/Javascript/07_DOM/03_Imp_Version/02_Document_Element_Properties/www.google.com
result = document.links[0].href = "www.facebook.com";
result = document.links[0].id = "google-id";
result = document.links[0].className = "google-class";
result = document.links[0].classList; // DOMTokenList ['google-class', value: 'google-class']

result = document.images;
result = document.images[0];
result = document.images[0].src;

result = console.log(result);
