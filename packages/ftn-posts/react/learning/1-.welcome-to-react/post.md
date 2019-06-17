# Welcome to React!

Have you ever found yourself wanting to start from React, but didn't know how?
There's a way you can easily push yourself, although it comes at some costs:

- You need to know JavaScript (highly recommended).
- You should have some functional programming notions.
- You need to know how to transpile JavaScript code from newest standards to
  the widely supported versions in browsers.
- This one is optional, but you might need to get used to a new syntax: `JSX`.
  (I'll explain this later on).
- A server to start with. You can choose whatever server you're comfortable with
  to serve any of the `.html`, `.css` & `.js` files. Be sure that you do this.
  If you try to test this by accessing your files via `file://` protocol, you're
  gonna have `CORS` issues.

But now, without further ado, let's start.

[React](https://reactjs.org) is a very popular library, which I'll not go into
details as to how it came to life. It helps developers greatly on building user
interfaces and delivering amazing experiences quite fast.

Let's begin with a very simple example to demonstrate this, and say we have the
following files:

- A JavaScript file with the following contents:
```javascript
// index.js
const container = document.querySelector('#app')
const App = () => (
  <div>Hello world from React!</div>
)
ReactDOM.render(<App />, container)
```

- An HTML file with the following structure:
```html
<!-- index.html: You don't need to have the same exact syntax. -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Hello world in React!</title>
  
  <script src="https://unpkg.com/@babel/standalone/babel.min.js">
  </script>
  
  <script src="https://unpkg.com/react@16/umd/react.development.js">
  </script>
  
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js">
  </script>

</head>
<body>
  <div id="app"></div>
<script src="index.js">
</script>
</body>
</html>
```

- Run your server at whatever port you like (something like:
  `http://localhost:3000`) where your files are being served from.


After running these steps, you should see something like the following:  
![hello-world](https://media.giphy.com/media/RMATZd31geFLOGkSsr/giphy.gif)


Now that we did something in React, let's dive into this example:

- For the HTML part, the DOM, we set many things that brought our
  tools and space to work with React properly:
  * A script that requests a stand-alone [Babel](https://babeljs.io/) compiler 
  into the browser.
  * A script that brings `React` to the browser.
  * A script that brings `ReactDOM` to the browser. Used to render `React`
    stuff.
  * A `div` element with an `id=app` inside the `body` tag. This is
    will be our main or root element from where we'll render and manipulate
    `React` stuff.

- As for the JavaScript part, we wrote 3 lines:
```javascript
 // We get our root element
const container = document.querySelector('#app')
// We write some weird syntax that contains our 'Hello World' example
const App = () => <div>Hello world from React!</div>
// Finally, we use ReactDOM to render stuff in the container
ReactDOM.render(<App />, container)
```

- First, we retrieved our root element from which we'll render and manipulate
  the DOM, via `document.querySelector('#app')`.
- After that, we wrote our first and what's widely known in the Front-End world
  as `Component`. We'll deep dive into these in the next post, but, for now,
  think of it as the Basic Modular part of the Front-End world, which behaves
  and mutates depending on input data or self-contained data. Our component
  is called `App`, and we write it in a new syntax called `JSX` like this:
  `<App/>` (Weird, but you'll see how it becomes awesome later).
- Finally, we endup rendering this `Component` thing into our retrieved
  container.

The new important thing to note here is the new `JSX` syntax. It's a syntax
used to write our `Component` things in React, and it provides a lot of
flexibility in terms of how we think and structure our app, as well as an
easiness of writing our `Component` elements.
And that's it! A very basic setup on how to React. In the next post, we'll see
how we can use a variety of `Component` elements and render different stuff.