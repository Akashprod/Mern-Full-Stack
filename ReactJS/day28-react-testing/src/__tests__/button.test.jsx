import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import { expect, vi } from "vitest";
import "@testing-library/jest-dom";
import Button from "../Components/Button";
import Counter from "../Components/Counter";

describe("testing button component", () => {
  it("button should render as component", () => {
    render(<App />);
    const button = screen.getAllByTestId("custom-button");
    expect(button[0]).toBeInTheDocument();
    screen.debug();
  });

  it("checking if parameters are getting passes properly or not", () => {
    render(<Button />);
    const button = screen.getByTestId("custom-button");
    expect(button).toBeInTheDocument();
  });

  it("check if multiple buttons are getting created and getting proper children", () => {
    render(<App />);
    const button = screen.getAllByTestId("custom-button");
    expect(button[0]).toHaveTextContent("hello");
    expect(button[1]).toHaveTextContent("world");
    expect(button[2]).toHaveTextContent("hii");
  });

  it("check  button functionality", () => {
    const mock_func = vi.fn();
    render(<Button func={mock_func} />);

    const button = screen.getByTestId("custom-button");
    fireEvent.click(button);
    expect(mock_func).toBeCalled();
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(mock_func).toBeCalledTimes(5);
  });
});

describe("testing counter component", () => {
  it("counter should render", () => {
    render(<App />);
    const counter = screen.getByTestId("counter");
    expect(counter).toBeInTheDocument();
  });

  it("counter should have default value as 0", () => {
    render(<App />);
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("Counter:0");
  });

  it("button should render",()=>{
    render(<App/>);
    const button = screen.getAllByTestId("custom-button");
    button.forEach((element)=>{
        expect(element).toBeInTheDocument();
    })
  });

  it("Add button should work when clicked",()=>{
    render(<Counter/>);
    const button = screen.getByTestId("custom-button");
    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("Counter:0");
    fireEvent.click(button);
    expect(count).toHaveTextContent("Counter:1");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(count).toHaveTextContent("Counter:5");



  })
});
