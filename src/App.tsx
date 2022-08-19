import React, { Component } from "react";

import { Home } from "./containers/Homepage/Home";

// Typescript not happy with async
// Need to fix
// const AsyncPizza = asyncComponent(() => {
//   return import("./containers/Pizza");
// });

export class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
