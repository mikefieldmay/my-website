import React, { Component } from "react";

interface State {
  component: any;
}

export const asyncComponent = (importComponent: any) => {
  return class extends Component {
    state: State = {
      component: null
    };

    componentDidMount() {
      importComponent().then((cmp: any) => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};
