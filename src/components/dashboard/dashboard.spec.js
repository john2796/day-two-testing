import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";
import Display from "../display/Display";

// - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.

afterEach(cleanup);

describe("<Dashboard />", () => {
  const clicked = jest.fn();
  it("check if this func is called ", () => {
    const { getByTestId } = render(<Dashboard ball={clicked} />);
    const hit = getByTestId("ball");
    fireEvent.click(hit);
    expect(clicked).toHaveBeenCalled();
  });

  it("balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls ", () => {
    const { getByTestId } = render(<Dashboard state={state} />);
    const balls = parseInt(getByTestId("display-balls").textContent);
    const strike = parseInt(getByTestId("display-strike").textContent);
    expect(balls).toBeLessThan(3);
    expect(strikes).toBeLessThan(4);
  });
});
// - balls and strikes reset to 0 **when** a `hit` is recorded.
// - a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
