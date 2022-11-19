import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color and updates when click', () => {
  render(<App />)
  //find an element with a role of button and text of "change to blue"
  const colorButton = screen.getByRole('button', { name: "Change to blue" })
  //expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: "red"})

  //click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect the button text to be "Change to red"
  expect(colorButton).toHaveTextContent("Change to red");
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
  const colorButton = screen.getByRole('button', { name: "Change to blue" })
 
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
})
test("checkbox disables button on first click and enables on second click",() => {
  render(<App/>);
  const colorButton = screen.getByRole('button', { name: "Change to blue" })
 
  // expect(colorButton).toBeDisabled();
  const checkbox = screen.getByRole("checkbox", {name: "Disable button"});
    // expect(checkbox).toBeChecked();
  
  fireEvent.click(colorButton);
  expect(colorButton).toBeEnabled();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
})