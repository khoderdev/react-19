import { useState } from "react";
import Cars from "./Cars";
import Person from "./Person";

export default function index() {
  const [showCar, setShowCar] = useState(false); // State to track the car

  const toggleCarVisibility = () => setShowCar(!showCar); // Function to toggle car visibility

  return (
    <>
      {/* Displaying the Person component */}
      <div>
        <Person
          name="Khoder"
          email="Khoder@gmail.com"
          age="28"
          nationality="lebanese"
        />
      </div>

      {/* Buttons to show or hide the car */}
      <div className="flex gap-2">
        <button
          onClick={toggleCarVisibility}
          className="btn-main-normal mb-6 self-center"
        >
          {/* Conditional rendering of button text based on the showCar state */}
          {showCar ? "Hide Car" : "Show Car"}
        </button>
      </div>

      {/* Conditionally rendering the Cars component based on the showCar state */}
      {showCar && (
        <div>
          <Cars model="BMW" year="2024" color="Black" />
        </div>
      )}
    </>
  );
}

/*
Let's break down how the above code is working:

const toggleCarVisibility = () => setShowCar(!showCar);

1. `const toggleCarVisibility`: This line declares a function named `toggleCarVisibility`. This function is used to toggle the visibility of the car.

2. `() => {...}`: This is an arrow function syntax in JavaScript. It defines an anonymous function. In this case, it's a function with no parameters.

3. `setShowCar(!showCar)`: Inside the function body, `setShowCar` is called. `setShowCar` is a function provided by React's `useState` hook that allows you to update the state variable `showCar`. It accepts a new value for `showCar` as an argument. 

4. `!showCar`: This expression toggles the value of `showCar`. The `!` operator is the logical NOT operator. When applied to a boolean value, it negates it. So, if `showCar` is `true`, `!showCar` becomes `false`, and if `showCar` is `false`, `!showCar` becomes `true`. This effectively toggles the value of `showCar`.

5. Finally, `setShowCar(!showCar)` updates the state variable `showCar` with its new value, effectively toggling its state between `true` and `false`.

In summary, `toggleCarVisibility` is a function that toggles the value of the `showCar` state variable between `true` and `false` each time it is called. This function is then used as the onClick handler for the button, so when the button is clicked, it toggles the visibility of the car.
________________________________________________________________________________________________

The JSX code represents conditional rendering based on the value of the `showCar` state variable.

Here's how it works:

1. `{showCar && ...}`: This is a conditional rendering technique in JSX. It works by evaluating the expression before the `&&`. If the expression evaluates to `true`, then the component or element after the `&&` is rendered; otherwise, it's skipped.

2. `<Cars model="BMW" year="2024" color="Black" />`: This is the component that will be rendered if `showCar` is `true`. It represents the `Cars` component with the specified props: `model`, `year`, and `color`.

3. `<div>...</div>`: This `<div>` element is wrapped around the `<Cars>` component. It's used to provide a container for the `Cars` component. It's not strictly necessary for the functionality but can be useful for styling purposes or for adding additional elements.

So, when `showCar` is `true`, the `<Cars>` component is rendered inside a `<div>`. If `showCar` is `false`, nothing is rendered at this position, as the expression `{showCar && ...}` evaluates to `false`. This effectively shows or hides the `Cars` component based on the value of the `showCar` state variable.

*/
