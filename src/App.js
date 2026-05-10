import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// React Element => Object ==> HtmlElement(render)
/**
 * const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React ",
);
 */
// JSx (transpiled before it reaches the JS) -> Parcel -> Babel
// JSX => React.createElement() => Object => HtmlElement(render)
// const jsxHeading = (
//   <h1 className="heading" tabIndex="0">
//     Hello World from JSX
//   </h1>
// );

//React Component
//Class based component - OLD
// functional component - NEW

// Functional Component
// const Title = () => (
//   <h1 className="heading" tabIndex="0">
//     TITLE COMPONENT👽
//   </h1>
// );

//Component Composition
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading" tabIndex="0">
//       Hello World from Functional Component
//     </h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

//RENDERING ELEMENT
// root.render(jsxHeading);

// RENDERING COMPONENT
// root.render(<HeadingComponent />);

/**
 * Header
 * - Logo
 * - Nav Items
 *
 * Body
 * - Search Bar
 * - RestaurantContainer
 *  - RestaurantCard
 *    - Image
 *   - NAME OF RESTAURANT,CUSINE,RATING,DELIVERY TIME, COST FOR TWO
 *
 * Footer
 *  Copyright
 * - Links
 * - Address
 * - Contact
 *
 */
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
