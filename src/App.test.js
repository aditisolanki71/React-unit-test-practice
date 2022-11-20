import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from "./App";
// test('button has correct initial color and updates when click', () => {
//   render(<App />)
//   //find an element with a role of button and text of "change to blue"
//   const colorButton = screen.getByRole('button', { name: "Change to blue" })
//   //expect the background color to be red
//   expect(colorButton).toHaveStyle({backgroundColor: "red"})

//   //click button
//   fireEvent.click(colorButton);
//   expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

//   //expect the button text to be "Change to red"
//   expect(colorButton).toHaveTextContent("Change to red");
// });

test('button has correct initial color', () => {
  render(<App />)
  //find an element with a role of button and text of "change to Midnight"
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" })
  
  //expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({backgroundColor: "MediumVioletRed"})

  //click button
  fireEvent.click(colorButton);
  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  //expect the button text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to MediumVioletRed");
});
test('button has correct initial text', () => {
  
});

// test('button turns blue when clicked', () => {
//     render(<App />)
//     const colorButton = screen.getByRole("button", { name: "Change to Blue" })
// });
test("initial conditions",() => {
  render(<App />);
  //check that button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to MidnightBlue" })
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables button on first click and enables on second click",() => {
  render(<App/>);
  const colorButton = screen.getByRole('button', { name: "Change to MidnightBlue" })
 
  // expect(colorButton).toBeDisabled();
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"});
    // expect(checkbox).toBeChecked();
  
  fireEvent.click(colorButton);
  expect(colorButton).toBeEnabled();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
})

test("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "Change to MidnightBlue" })
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"});

  //disable-button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  //re-eable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed');
});

test("Clicked disabled button has gray background and reverts to blue", () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: "Change to MidnightBlue" })
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"});

  //change button to blue
  fireEvent.click(colorButton);

  //disable button
  fireEvent.click(checkbox);

  //re-enable button
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: MidnightBlue');
});

//combine test in a describe statement
//describe statement is a way of grouping test
describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
     // expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("MediumVioletRed");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidiumVioletRed")).toBe("Midium Violet Red");
  });
})