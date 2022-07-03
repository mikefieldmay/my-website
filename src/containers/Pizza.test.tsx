import React from "react";
import Pizza from "./Pizza";
import { render } from "@testing-library/react";

describe("<Pizza />", () => {
  test("should render the Pizza component", async () => {
    const { baseElement }: any = render(<Pizza />);
    expect(baseElement).toMatchSnapshot();
  });
});
