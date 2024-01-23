# DOM Cheatsheet

---

### Navigating the DOM:

- Grab element by ID (fastest, but only one element).

  > document.getElementById(id)

- Select first element matching a CSS selector (flexible, good for single element).

  > document.querySelector(selector)

- Get a list of all elements matching a CSS selector (flexible, good for multiple elements).

  > document.querySelectorAll(selector)

- Access child nodes of an element.

  > element.childNodes

- Access parent element of an element.

  > element.parentElement

- Access next sibling element of an element.

  > element.nextElementSibling

- Access previous sibling element of an element.
  > element.previousElementSibling

### Manipulating the DOM:

- Replace element's content with new HTML string.

  > element.innerHTML = "new content"

- Replace element's text content with new text.

  > element.textContent = "new text"

- Set an attribute on an element.

  > element.setAttribute(name, value)

- Get the value of an attribute on an element.

  > element.getAttribute(name)

- Add a class to an element.

  > element.classList.add('class')

- Remove a class from an element.

  > element.classList.remove('class')

- Append a new element as child of the current element.

  > element.appendChild(newElement)

- Remove a child element from the current element.
  > element.removeChild(childElement)

---

### Events:

- Add an event listener to an element.

  > element.addEventListener(event, callback)

- The element that triggered the event.

  > event.target

- Prevent the default behavior of the event.

  > event.preventDefault()

- Stop the event from bubbling up the DOM tree.
  > event.stopPropagation()

---

### Useful DOM properties:

- Element's tag name (e.g., "div", "p").

  > element.tagName

- Access element's CSS styles.

  > element.style

- Hide or show element.

  > element.hidden = true/false

- List of element's class names.

  > element.classList

- Reference to the body element.

  > document.body

- Event handler for when the page finishes loading.
  > window.onload
