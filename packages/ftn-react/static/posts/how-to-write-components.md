# Components: How to write them

In the previous post, we've created a veeeery basic setup of how to React with
browser-only resources.  
You can continue from there, or, you could learn how
to set-up a more realistic environment here: [Set up a React Environment](/posts/2).  


If you don't want to go through this, everytime a `Component` comes up, you'll need to write this in the same
`index.js` as the `App` component we
already had.



## How to write a component?

Components are the basic modular structure in a Front-End app.
As we can recall from our last example, a component is written in the following
format:
```js
const App = () => (
  <div>Hello world from React!</div>
)
```

You can tell, if you know the new ES6 Standard, that you could also write this
in the following format:

```js
function App() {
  return (
    <div>Hello world from React!</div>
  )
}
```

Basically, components are functions, that return the `JSX`-ish syntax you see.
It looks a lot like `HTML`, but imagine it has superpowers.  

Cool!  Isn't it?  

It doesn't seem that hard so far.  

The trick here is that the behavior it's different.
This syntax describes what should a component return as
DOM-equivalent elements known as `React` elements. This way, you can isolate an
structure with different elements. You might say: why should I wrap the elements
of a component render phase in parentheses `()`? You don't have to, but, it is a
good practice, especially if you are going to have more elements inside.  

Parentheses improve readability among components.

## How to compose Components?

Composing components (pun intended) isn't different from writing one all alone.

You can do the following if you want to isolate different structures:
## Example using the ultra basic setup
```js
const List = () => (
  <ol>
    <li>
      Element 1
    </li>
    <li>
      Element 2
    </li>
  </ol>
)


const App = () => (
  <div>
    <List />
  </div>
)
```

## Example using a React environment:
```js
// File: list.js
import React from 'react'
const List = () => (
  <ol>
    <li>
      Element 1
    </li>
    <li>
      Element 2
    </li>
  </ol>
)

export default List


// File: index.js
import React from 'react'
import List from './list'

const App = () => (
  <div>
    <List />
  </div>
)
```

That would give you the following in the DOM:  

![Image](https://media.giphy.com/media/UuBwcJcpvuRQNKbDdL/giphy.gif)


And that doesn't end there. You can do variations of this:
## Basic Setup
```js
const ListItem1 = () => (
  <li>
    Element 1
  </li>
)

const ListItem2 = () => (
  <li>
    Element 2
  </li>
)

const List = () => (
  <ol>
    <ListItem1 />
    <ListItem2 />
  </ol>
)

const App = () => (
  <div>
    <List />
  </div>
)
```

## React Environment
```js
// File: list-item-1.js
import React from 'react'
const ListItem1 = () => (
  <li>
    Element 1
  </li>
)

export default ListItem1


// File: list-item-2.js
import React from 'react'
const ListItem2 = () => (
  <li>
    Element 2
  </li>
)

export default ListItem2


// File: list.js
import React from 'react'
import ListItem1 from './list-item-1'
import ListItem2 from './list-item-2'

const List = () => (
  <ol>
    <ListItem1 />
    <ListItem2 />
  </ol>
)

export default List


// File: index.js
import React from 'react'
import List from './list'
const App = () => (
  <div>
    <List />
  </div>
)
```

Now, this is pretty much self-explanatory. You can use a component inside
another one an so on. These samples would give you the same output shown above.

But, what would happen if we try to render two elements or components at the
very root of our `return` statement inside our components:

```js
import React from 'react'
import List from './list'
const App = () => (
  <div>
    <List />
  </div>
  <div>
    <List />
  </div>
)
```

This would result in an error, as `React` does not allow two `children`
components to be rendered as a result of a component's render phase.
So... how come we compose even further?  
There are two ways to do this:
- Wrap the elements inside a valid element, like a `div` or a `span`
(the parent wrapping element doesn't have to be any of those elements, it can
be anything).
- Use a `Fragment`.

Speaking of `Fragment`, it is a component that acts as a wrapper, but is not
shown at the DOM. It works like this:

## Basic setup
```js
const ListItem1 = () => (
  <li>
    Element 1
  </li>
)

const ListItem2 = () => (
  <li>
    Element 2
  </li>
)

const List = () => (
  <ol>
    <ListItem1 />
    <ListItem2 />
  </ol>
)

const App = () => (
  <React.Fragment>
  <div>
    <List />
  </div>
  <div>
    <List />
  </div>
  </React.Fragment>
)
```

## React environment
```js
// File: list-item-1.js
import React from 'react'
const ListItem1 = () => (
  <li>
    Element 1
  </li>
)

export default ListItem1


// File: list-item-2.js
import React from 'react'
const ListItem2 = () => (
  <li>
    Element 2
  </li>
)

export default ListItem2


// File: list.js
import React from 'react'
import ListItem1 from './list-item-1'
import ListItem2 from './list-item-2'

const List = () => (
  <ol>
    <ListItem1 />
    <ListItem2 />
  </ol>
)

export default List


// File: index.js
import React, { Fragment } from 'react'
import List from './list'
const App = () => (
  <Fragment>
    <div>
      <List />
    </div>
    <div>
      <List />
    </div>
  </Fragment>
)
```


There is even a shorter syntax, but it is not allowed everywhere, so, be careful
when you use it:
```js
// File: index.js
import React from 'react'
import List from './list'
const App = () => (
  <>
    <div>
      <List />
    </div>
    <div>
      <List />
    </div>
  </>
)
```

All of these examples will give you the following result:  
![Image](https://media.giphy.com/media/Wod4yhYgghnb32CitM/giphy.gif)

The last `Fragment` syntax depends on the environment you use, so,
don't expect it to work out-of-the-box.

## A last important feature
One last thing to note here is... What happens if a custom `Component` created
by us would render what we want as children components?

This is very simple to do. We take advantage of a `Component`'s `props`.

`props` will be covered in the next post, but please, follow this example:


## Basic Setup
```js
const ListItem1 = () => (
  <li>
    Element 1
  </li>
)

const ListItem2 = () => (
  <li>
    Element 2
  </li>
)

const List = () => (
  <ol>
    <ListItem1 />
    <ListItem2 />
  </ol>
)

const App = (props) => (
  <div>
    <List />
    { props.children }
  </div>
)

ReactDOM.render(
  <App>
    <div>Hello world from React!</div>
  </App>,
  container
)
```

## React environment
```js
// File: list-item-1.js
import React from 'react'
const ListItem1 = () => (
  <li>
    Element 1
  </li>
)

export default ListItem1


// File: list-item-2.js
import React from 'react'
const ListItem2 = () => (
  <li>
    Element 2
  </li>
)

export default ListItem2


// File: list.js
import React from 'react'
import ListItem1 from './list-item-1'
import ListItem2 from './list-item-2'

const List = () => (
  <ol>
    <ListItem1 />
    <ListItem2 />
  </ol>
)

export default List


// File: index.js
import React from 'react'
import List from './list'
const App = (props) => (
    <div>
      <List />
      { props.children }
    </div>
)

ReactDOM.render(
  <App>
    <div>Hello world from React!</div>
  </App>,
  container
)
```

The examples will give you the following result:  
![Image](https://media.giphy.com/media/RlZGYWw3xZpWp5CGv8/giphy.gif)

`props` are the properties we want our components to have. We'll explain
this futher in the next post, but, for this example, there is a special
property we want to make use of: `children`. This property in particular
lets us use the elements or components we set inside a given component when
rendering it. So, the key part for this is:
```js
ReactDOM.render(
  <App>
    <div>Hello world from React!</div> // children of App
  </App>,
  container
)
```

And then:
```js
const App = (props) => (
    <div>
      <List />
      { props.children } // extracting 'children' from 'props'
    </div>
)
```
The curly braces inside the component indicate that we want to render something
inside the component's render using JavaScript. For example, you could have set
the number `5` inside the braces and it would have rendered as expected:

```js
const App = (props) => (
    <div>
      <List />
      { 5 } // extracting 'children' from 'props'
    </div>
)
```

And, of course, we can use more `JSX` if we want, and every time we want to
render something using pure JavaScript, we would have to use the `JSX` syntax
again inside the element: 

```js
const App = (props) => (
  <div>
    <List />
    { <div>{ 52 }</div> }
  </div>
)
```

This way we can give even more power to composability than before.

One last thing you can use for composability is when rendering multiple
elements.

You might have said:
- Why would I want to wrap a list item inside a full component?
- Wouldn't I wanted to render those elements right next to each other?

You're right. That is completely useless. You might as well could have done the
following: 


## Basic setup

```js
const elementsToRender = [
  "Element 1",
  "Element 2",
  "Element 3",
  "Element 4",
  "Element 5",
  "Element 6",
  "Element 7",
]

const ListItem = (props) => (
  <li>
    { props.children }
  </li>
)


const List = () => (
  <ol>
    {
      elementsToRender.map(
        element => <ListItem>{ element }</ListItem>
      )
    }
  </ol>
)

const App = (props) => (
  <div>
    <List />
    { props.children }
  </div>
)

ReactDOM.render(
  <App>
    <div>Hello world from React!</div>
  </App>,
  container
)
```


## React environment

```js
// File: list-item.js
import React from 'react'
const ListItem = (props) => (
  <li>
    { props.children }
  </li>
)

export default ListItem


// File: list.js
import React from 'react'
import ListItem from './list-item'
const elementsToRender = [
  "Element 1",
  "Element 2",
  "Element 3",
  "Element 4",
  "Element 5",
  "Element 6",
  "Element 7",
]

const List = () => (
  <ol>
    {
      elementsToRender.map(
        element => <ListItem>{ element }</ListItem>
      )
    }
  </ol>
)

export default List


// File: index.js
import React from 'react'
import List from './list'
const App = (props) => (
    <div>
      <List />
      { props.children }
    </div>
)

ReactDOM.render(
  <App>
    <div>Hello world from React!</div>
  </App>,
  container
)
```

These examples will give you the following:  
![Image](https://media.giphy.com/media/KAqUL3h6oEkEKEpBQ5/giphy.gif)


And that's pretty much what you need to begin composing! There are many ways and
flavors as to how to render, but these are some that will give you the boost
you need to find out how to render your elements and components.

In the next post, we'll cover `props`, and ways to use them to our advantage.