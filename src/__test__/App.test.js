import { render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("TODO", () => {
  it("renders the title", () => {
    const expectedTitle = "YTP To-Do";
    const { getByText } = render(<App />);
    expect(getByText(expectedTitle)).toBeInTheDocument();
  });

  it("writes input", () => {
    const expectedInputText = "Hello mom! Im using jest";
    const { getByLabelText, getByText } = render(<App />);

    const input = getByLabelText("todo-input");

    // fireEvent.change(input, {target: {value: '$23.0'}})
    fireEvent.change(input, {
      target: {
        value: expectedInputText
      }
    });

    expect(input).toHaveAttribute("value", expectedInputText);

    // Click en el botón de agregar
    const button = getByLabelText("add-button");

    fireEvent.click(button);

    // se muestre en el todo-list
    expect(getByText(expectedInputText)).toBeInTheDocument();

    // se borre el input
    expect(input.value).toBe("");

    // eliminar el registro
    const todo = getByText(expectedInputText);
    fireEvent.click(todo);

    expect(todo).not.toBeInTheDocument();
    // expect(getAllByTestId("item-0")).toBeInTheDocument();
  });
});
