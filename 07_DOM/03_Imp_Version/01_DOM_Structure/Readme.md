# DOM

```Javascript
console.log(window);
```

---

- Window Document

```JS
console.dir(window.document);
```

---

- Also can write

```JS
  console.log(document);
```

---

- To see what's inside the body

```JS
console.log(document.body);
```

---

- If we want just the HTML in the body

```JS
console.log(document.body.innerHTML);
```

- If we want to get the innerText of HTML using DOM

```JS
console.log(document.body.innerText);
```

---

- If we want to acess link using DOM

```JS
console.log(document.links);

```

- If we want to acess a specific link

```JS
console.log(document.links[0]);

```

---

- Manipulate the innerHTML

```JS
document.body.innerHTML = "<h2>Main hoon DOM</h2>";
```

```JS
const main = document.getElementById("main");

main.innerHTML = "<h1>World of AI , Before World of DOM</h1>";

```

---

### querySelector

```JS
document.querySelector("#main h1").innerHTML = "Intelligence Awkening";

document.querySelector("#main h1").style.color = "orange";
```
