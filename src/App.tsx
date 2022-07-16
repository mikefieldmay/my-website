import { Route } from "react-router-dom";
import React, { Component } from "react";

import { Users } from "./containers/Users";
import { Pizza } from "./containers/Pizza";
import { asyncComponent } from "./hoc/asyncComponent";
import { LinkButton } from "./components/LinkButton/LinkButton";

// Typescript not happy with async
// Need to fix
// const AsyncPizza = asyncComponent(() => {
//   return import("./containers/Pizza");
// });

export class App extends Component {
  render() {
    return (
      <div>
        <div>
          <LinkButton to="/" title="Users" />
          <LinkButton to="/pizza" title="Pizza" />
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" component={Pizza} />
        </div>
      </div>
    );
  }
}
