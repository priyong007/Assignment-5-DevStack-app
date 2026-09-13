
Name of  project = Assignment-5-DevStack-app

A little description = Assignment-5-DevStack-app is a simple project. Its solve the problem of add to stack, also remove/delete to unnessary stack when we dont need, just like e commerce website add to cart


Technology that you use = This project is created using DaisyUI tailwin css,JavaScript (ES6+), react, React-Toastify (NPM Package), JSON (for technology data),Vite (build tool).

3 features about your project = 1. data add, 2.data fetch , 3. button cart remove


1. What is JSX, and why is it used in React? 

JSX (JavaScript XML) is a syntax extension for JavaScript that write HTML-like markup directly inside React code, making UI components easier to structure, read, and maintain.

2. What is the difference between props and state?

Props are read-only data passed down from a parent component, while state is dynamic, mutable data managed locally inside the component itself.

3. What does the useState hook do, and where did you use it in this project?

The useState hook manages local dynamic state in React components, and in this project, it tracks state like category/badge filtering or UI toggle interactions.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook handles side effects in React, and it was used to automatically fetch and load the external JSON data once when the component first mounts.

5. Why does every item in a .map() list need a unique key prop?

A unique key prop helps React identify which items have changed, been added, or removed, allowing it to efficiently update only the altered DOM elements during re-renders.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering displays different UI elements based on specific conditions, such as showing an empty state message like {technologies.length === 0 && <p>No technologies found</p>} when search results are empty.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed down to a child component using props, and sent back up to the parent by triggering a callback function passed down as a prop.


