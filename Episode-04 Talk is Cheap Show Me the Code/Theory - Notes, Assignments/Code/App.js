import React from "react";
import ReactDOM from "react-dom/client";
// include Header.css file
import "./main.css";

/* Components of Our Food-Order App -
 * Low level planning our App -
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// - Learning ::
// - Build a `Food Ordering App`
//   - Think of a `cool name` for your app
//   - Build an `AppLayout`
//   - Build a `Header Component` with Logo & Nav Items & Cart
//   - Build a `Body Component`
//     - Build `RestaurantList Component`
//     - Build `RestaurantCard Component`
//       - Use `static data initially`
//       - Make your `card dynamic`(pass in props)
//       - `Props` - passing arguments to a function - Use Destructuring & Spread operator
//       - `Render` your cards with dynamic data of restaurants
//       - Use `Array.map` to render all the restaurants

const AppLayout = () => {
  return (
    <>
      <Header />
      <RestaurantList />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
